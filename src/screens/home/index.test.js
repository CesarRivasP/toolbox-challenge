import * as React from 'react';
import { mount } from 'enzyme';
import HomeScreen from '.';
import MountComponentWrapper from '../../../__mocks__/mountComponentWrapper';
import InfoModal from '../../components/infoModal';
import { VIDEO_NOT_AVALIABLE_MESSAGE } from '../../utils/constants/errorMessages';
import * as GetPlatform from '../../helpers/getDevicePlatform';
import * as Actions from '../../state/global/types';
import { ERROR_CODE, ERROR_CODE_MESSAGE } from '../../utils/constants/errorCodes';
import { MOCK_DATA_LIST } from '../../../__mocks__/mockDataList';

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
  let navigation;
  const VALID_TOKEN = 'VALID_TOKEN';
  const TYPE_AUTHORIZATION = 'Bearer';
  const globalState = {
    isAutenticated: true,
    token: VALID_TOKEN,
    authorizationType: TYPE_AUTHORIZATION,
    sessionExpired: false,
  };

  const loadWrapper = (platform = 'android') => {
    jest.spyOn(GetPlatform, 'getDevicePlatform').mockImplementation(() => platform);
    navigation = {
      navigate: jest.fn(),
    };
    globalDispatch = jest.fn();
    mockHandleFetchDataSpy = jest.fn();
    wrapper = mount(
      <MountComponentWrapper globalState={globalState} globalDispatch={globalDispatch}>
        <HomeScreen navigation={navigation} />
      </MountComponentWrapper>
    );
  };

  it('When obtaining the data correctly, the elements should be displayed and the navigation should be executed when selecting one that contains the videoUrl field.', () => {
    mockData = MOCK_DATA_LIST;
    loadWrapper();
    wrapper.update();
    expect(wrapper).not.toBeNull();
    let thumbCarouselFlatList = wrapper.find({ testID: 'thumbCarouselFlatList' }).at(0);
    thumbCarouselFlatList.props().keyExtractor({}, 1);
    wrapper.update();
    thumbCarouselFlatList = wrapper.find({ testID: 'thumbCarouselFlatList' }).at(0);
    const thumbItem = thumbCarouselFlatList.renderProp('renderItem')({
      item: MOCK_DATA_LIST[0].items[0],
    });
    wrapper.update();
    thumbItem.props().children.props.handlePress();
    expect(navigation.navigate).toHaveBeenCalledTimes(1);
  });

  it('When obtaining the data correctly, the elements should be displayed, but without executing the navigation when selecting one that does not contain the videoUrl field.', async () => {
    mockData = MOCK_DATA_LIST;
    loadWrapper();
    wrapper.update();
    let posterCarouselFlatList = wrapper.find({ testID: 'posterCarouselFlatList' }).at(0);
    posterCarouselFlatList.props().keyExtractor({}, 1);
    wrapper.update();
    posterCarouselFlatList = wrapper.find({ testID: 'posterCarouselFlatList' }).at(0);
    const thumbItem = posterCarouselFlatList.renderProp('renderItem')({
      item: MOCK_DATA_LIST[1].items[0],
    });
    wrapper.update();
    thumbItem.props().children.props.handlePress();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    wrapper.update();
    const infoModal = wrapper.find(InfoModal);
    expect(infoModal.props().description).toBe(VIDEO_NOT_AVALIABLE_MESSAGE);
  });

  it('When getting the error code E403 from the api, the dispatch of SESSION_EXPIRED should be executed.', async () => {
    mockData = MOCK_DATA_LIST;
    loadWrapper();
    wrapper.update();
    mockData = null;
    mockError = {
      response: {
        data: {
          code: 'E403',
        },
      },
    };
    let refreshControl = wrapper.find({ testID: 'refreshControl' }).at(0);
    refreshControl.props().onRefresh();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    wrapper.update();
    expect(globalDispatch).toHaveBeenCalledWith({
      type: Actions.SESSION_EXPIRED,
    });
  });

  it('When obtaining the error code E401 from the api, the error modal should be displayed with the indicated message.', async () => {
    mockData = MOCK_DATA_LIST;
    loadWrapper();
    wrapper.update();
    mockData = null;
    mockError = {
      response: {
        data: {
          code: 'E401',
        },
      },
    };
    let refreshControl = wrapper.find({ testID: 'refreshControl' }).at(0);
    refreshControl.props().onRefresh();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    wrapper.update();
    const infoModal = wrapper.find(InfoModal);
    expect(infoModal.props().description).toBe(ERROR_CODE_MESSAGE[ERROR_CODE.SERVER_ERROR]);
  });
});
