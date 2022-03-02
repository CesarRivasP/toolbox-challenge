jest.mock('expo-secure-store');
import * as React from 'react';
import { mount } from 'enzyme';
import LoginScreen from '.';
import MountComponentWrapper from '../../../__mocks__/mountComponentWrapper';
import InfoModal from '../../components/infoModal';
import {
  EMPTY_FIELDS_ERROR,
  INVALID_PASSWORD_ERROR,
  GENERAL_ERROR_MESSAGE,
} from '../../utils/constants/errorMessages';
import * as GetPlatform from '../../helpers/getDevicePlatform';
import * as Actions from '../../state/global/types';

let mockData = null;
let mockError = null;
let mockLoading = false;
let mockHandleFetchDataSpy;

jest.mock('../../hooks/useFetch.js', () => {
  return jest.fn(() => ({
    data: mockData,
    error: mockError,
    loading: mockLoading,
    handleFetchData: mockHandleFetchDataSpy,
  }));
});

describe('Login screen', () => {
  let wrapper;
  let globalDispatch;
  const VALID_EMAIL = 'toolbox@test.com';
  const VALID_PASSWORD = 'Wallet123!';
  const VALID_TOKEN = 'VALID_TOKEN';
  const TYPE_AUTHORIZATION = 'Bearer';
  const globalState = {
    isAutenticated: false,
    token: '',
    authorizationType: '',
    sessionExpired: false,
  };
  const VALID_RESPONSE = {
    token: VALID_TOKEN,
    type: TYPE_AUTHORIZATION,
  };

  const loadWrapper = (platform = 'android') => {
    jest.spyOn(GetPlatform, 'getDevicePlatform').mockImplementation(() => platform);
    globalDispatch = jest.fn();
    mockHandleFetchDataSpy = jest.fn();
    wrapper = mount(
      <MountComponentWrapper globalState={globalState} globalDispatch={globalDispatch}>
        <LoginScreen />
      </MountComponentWrapper>
    );
  };

  const generateValidCall = async () => {
    const emailInput = wrapper.find({ testID: 'emailInput' }).at(0);
    emailInput.props().onChangeText(VALID_EMAIL);
    wrapper.update();
    const passwordInput = wrapper.find({ testID: 'passwordInput' }).at(0);
    passwordInput.props().onChangeText(VALID_PASSWORD);
    wrapper.update();
    const loginButton = wrapper.find({ testID: 'loginButtonContainer' }).at(0);
    loginButton.props().onPress();
    wrapper.update();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    wrapper.update();
  };

  it('should have a valid email value in Email input', () => {
    loadWrapper();
    expect(wrapper).not.toBeNull();
    const emailInput = wrapper.find({ testID: 'emailInput' }).at(0);
    expect(emailInput.props().value).toBe('');
  });

  it('should have a change email value in email input', () => {
    loadWrapper();
    const NEW_EMAIL = 'MY_NEW_EMAIL';
    const emailInput = wrapper.find({ testID: 'emailInput' }).at(0);
    emailInput.props().onChangeText(NEW_EMAIL);
    wrapper.update();
    const updatedEmailInput = wrapper.find({ testID: 'emailInput' }).at(0);
    expect(updatedEmailInput.props().value).toBe(NEW_EMAIL);
  });

  it('should have a change password value in password input', () => {
    loadWrapper();
    const NEW_PASSWORD = 'MY_NEW_PASWWORD';
    const passwordInput = wrapper.find({ testID: 'passwordInput' }).at(0);
    passwordInput.props().onChangeText(NEW_PASSWORD);
    wrapper.update();
    const updatedPasswordInput = wrapper.find({ testID: 'passwordInput' }).at(0);
    expect(updatedPasswordInput.props().value).toBe(NEW_PASSWORD);
  });

  it('should show error for email or password invalid', async () => {
    loadWrapper();
    const loginButton = wrapper.find({ testID: 'loginButtonContainer' }).at(0);
    loginButton.props().onPress();
    wrapper.update();
    const errorModal = wrapper.find(InfoModal);
    expect(errorModal.props().description).toBe(EMPTY_FIELDS_ERROR);
  });

  it('should show error for password error', async () => {
    loadWrapper();
    const NEW_EMAIL = 'MY_NEW_EMAIL';
    const emailInput = wrapper.find({ testID: 'emailInput' }).at(0);
    emailInput.props().onChangeText(NEW_EMAIL);
    wrapper.update();
    const loginButton = wrapper.find({ testID: 'loginButtonContainer' }).at(0);
    loginButton.props().onPress();
    wrapper.update();
    const errorModal = wrapper.find(InfoModal);
    expect(errorModal.props().description).toBe(INVALID_PASSWORD_ERROR);
  });

  it('should validate behavior prop of keyboardAvoidingView por ios devices', async () => {
    loadWrapper('ios');
    const loginKeyboardAvoidingView = wrapper.find({ testID: 'loginKeyboardAvoidingView' }).first();
    expect(loginKeyboardAvoidingView.props().behavior).toBe('padding');
  });

  it('should hide error modal when user closes it', async () => {
    loadWrapper();
    wrapper.update();
    let infoModal = wrapper.find(InfoModal);
    infoModal.props().onClose();
    wrapper.update();
    infoModal = wrapper.find(InfoModal);
    expect(infoModal.props().visible).toBeFalsy();
  });

  it('When getting the response from the expected api, the dispatch of SESSION_INFO should be executed.', async () => {
    mockData = VALID_RESPONSE;
    loadWrapper();
    await generateValidCall();
    expect(mockHandleFetchDataSpy).toHaveBeenCalledTimes(1);
    expect(globalDispatch).toHaveBeenCalledWith({
      type: Actions.SESSION_INFO,
      payload: {
        authorizationType: TYPE_AUTHORIZATION,
        token: VALID_TOKEN,
      },
    });
  });

  it('When getting an error from the api, the indicated error message should be displayed.', async () => {
    mockData = null;
    mockError = new Error('Ocurrio un error');
    loadWrapper();
    await generateValidCall();
    expect(mockHandleFetchDataSpy).toHaveBeenCalledTimes(1);
    expect(globalDispatch).toHaveBeenCalledTimes(0);
    let infoModal = wrapper.find(InfoModal);
    wrapper.update();
    expect(infoModal.props().description).toBe(GENERAL_ERROR_MESSAGE);
  });
});
