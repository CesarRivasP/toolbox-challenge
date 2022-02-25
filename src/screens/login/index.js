import React, { useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import SafeAreaFrame from '../../components/safeAreaFrame';
import PasswordInput from '../../components/forgotPassword/passwordInput';
import useGlobalContext from '../../hooks/useGlobalContext';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import useInfoModal from '../../hooks/useInfoModal';
import usePressedStatus from '../../hooks/usePressedStatus';
import inputHideEmail from '../../helpers/inputHideEmail';
import getUserInfo from '../../helpers/getUserInfo';
import AUTH from '../../auth/auth';
import InfoModal from '../../components/infoModal';
import AbsoluteLoader from '../../components/absoluteLoader';
import {
  INVALID_PASSWORD_ERROR,
  EMPTY_FIELDS_ERROR,
} from '../../utils/constants/errorMessages';
import * as Actions from '../../state/global/types';
import { getDevicePlatform } from '../../helpers/getDevicePlatform';
import * as Types from '../../config/apiTypes';
import Colors from '../../utils/styles/colors';
import styles from './styles';

export const FIRST_OR_LAST_NAME_VALIDATOR = /^(?!.*(--|´´|``|‘‘|''|’’|\.{2}){1})[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÑÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹßÇŒÆČŠŽ∂ð' .´`‘'’-]+([a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÑÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹßÇŒÆČŠŽ∂ð.]+){1}$/;

const LOGIN_FORM = [
  {
    field: 'email',
    required: true,
    regex: FIRST_OR_LAST_NAME_VALIDATOR,
    regexErrorMessage: 'Should contain only letters',
  },
  {
    field: 'password',
    required: true,
  },
];

export default function SignIn() {
  const { globalDispatch } = useGlobalContext();
  const {
    form,
    handleChangeInput,
    handleValidateForm,
  } = useForm({
    initialState: {
      email: '',
      password: '',
    },
    validationRegex: LOGIN_FORM,
  });
  const { pressedStatus, handlePressedStatus } = usePressedStatus();
  const { data, error, loading, handleFetchData } = useFetch({
    request: Types.POST_LOGIN_USER,
    body: null,
    onMountFetch: false,
  });
  const { infoModal, handleOpenModal, handleCloseModal } = useInfoModal({
    visible: false,
    title: null,
    description: null,
  });
  const devicePlatform = useRef(getDevicePlatform());

  const handleLoginData = useCallback(
    async ({ token, type: authorizationType, userAccess }) => {
      await AUTH.setLoginSession(() => {
        globalDispatch({
          type: Actions.SESSION_INFO,
          payload: { token, authorizationType },
        });
      }, userAccess);
      globalDispatch({ type: Actions.SESSION_INFO });
    },
    [globalDispatch]
  );

  const handleRememberUser = useCallback(async () => {
    const response = await getUserInfo();
    const email = response ? inputHideEmail(response?.email) : null;
    if (email) {
      globalDispatch({ type: Actions.REMEMBER_USER, payload: true });
      // setEmailValues({ emailDisplay: email, emailValue: response?.email });
    }
  }, [globalDispatch]);

  const handleLoginUser = useCallback(async () => {
    if (handleValidateForm()) {
      handleFetchData();
    } else {
      console.log('HUBO ERROR')
      let messageError = form.email.length === 0 ? EMPTY_FIELDS_ERROR : INVALID_PASSWORD_ERROR;
      handleOpenModal({
        title: 'Inicio Fallido',
        description: messageError,
        visible: true,
      });
    }
  }, [form.email, handleValidateForm, handleFetchData, handleOpenModal]);

  useEffect(() => {
    if (error) {
      console.log(error, 'error');
    } else if (data) {
      console.log(data, 'data');
      // handleLoginData();
    }
  }, [data, error]);

  useEffect(() => {
    handleRememberUser();
  }, [handleRememberUser]);

  const INPUTS_COMPLETED = form.email && form.password;

  return (
    <SafeAreaFrame
      completeScreen
      title='LoginScreen'
      statusBarStyle='dark-content'
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={devicePlatform?.current !== 'android' ? 'padding' : null}
        enabled
        testID="signInScreen"
      >
        <ScrollView
          contentContainerStyle={styles.loginContentContainer}
          keyboardShouldPersistTaps='handled'
        >
          {/* <View style={styles.logoContainer}>
            <RenderSvgXML xml={AppImages.svgDBFinancialLogo} />
          </View> */}
          <View style={styles.inputsContainer}>
            <Text style={styles.label}>Correo Electrónico</Text>
            <TextInput
              testID="emailInputSignIn"
              autoCapitalize="none"
              keyboardType="email-address"
              value={form.email}
              style={styles.emailInput}
              placeholder="Ingrese Correo Electrónico"
              onChangeText={(text) => handleChangeInput('email', text)}
              placeholderTextColor={Colors.GRAY_40}
            />
            <Text style={styles.label}>Contraseña</Text>
            <PasswordInput
              testID="passwordInput"
              value={form.password}
              placeholder="Ingrese Contraseña"
              onChangeText={(text) => handleChangeInput('password', text)}
              textStyle={styles.passwordInput}
              eyeIconContainerStyle={styles.passwordInputIcon}
              selectionColor={Colors.GRAY_0}
              onSubmitEditing={handleLoginUser}
            />
          </View>
          <View style={styles.loginButtonSectionContainer}>
            <TouchableOpacity
              testID="loginUserButton"
              onPress={handleLoginUser}
              activeOpacity={0.6}
              delayPressIn={0}
              onPressIn={() => handlePressedStatus(true)}
              onPressOut={() => handlePressedStatus(false)}
              style={
                !INPUTS_COMPLETED ?
                  styles.loginButtonContainer :
                  styles.loginButtonContainerActive
              }
              disabled={!form.email || !form.password}
            >
              <Text
                style={
                  !INPUTS_COMPLETED ?
                    styles.loginButtonText :
                    styles.loginButtonTextActived
                }
                testID="logIn"
              >
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <InfoModal
        showCloseButton
        onClose={handleCloseModal}
        visible={infoModal.visible}
        title={infoModal.title}
        description={infoModal.description}
      />
      <AbsoluteLoader visible={(loading)} />
    </SafeAreaFrame>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    replace: PropTypes.func,
  }).isRequired,
};
