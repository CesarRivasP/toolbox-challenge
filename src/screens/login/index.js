import React, { useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import SafeAreaFrame from '../../components/safeAreaFrame';
import PasswordInput from '../../components/forgotPassword/passwordInput';
import Button from '../../components/button';
import InfoModal from '../../components/infoModal';
import AbsoluteLoader from '../../components/absoluteLoader';
import useGlobalContext from '../../hooks/useGlobalContext';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import useInfoModal from '../../hooks/useInfoModal';
import AUTH from '../../auth/auth';
import {
  INVALID_PASSWORD_ERROR,
  EMPTY_FIELDS_ERROR,
  GENERAL_MODAL_TITLE,
  GENERAL_ERROR_MESSAGE,
} from '../../utils/constants/errorMessages';
import { LOGIN_FORM } from './form';
import * as Actions from '../../state/global/types';
import { getDevicePlatform } from '../../helpers/getDevicePlatform';
import * as ApiTypes from '../../config/apiTypes';
import Colors from '../../utils/styles/colors';
import styles from './styles';

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
  const { data, error, loading, handleFetchData } = useFetch({
    request: ApiTypes.POST_LOGIN_USER,
    body: null,
    onMountFetch: false
  });
  const { infoModal, handleOpenModal, handleCloseModal } = useInfoModal({
    visible: false,
    title: null,
    description: null,
  });
  const devicePlatformRef = useRef(getDevicePlatform());
  const emailInputRef = useRef(null);
  const disabledLoginButton = !form.email || !form.password;

  const handleLoginData = useCallback(
    async ({ token, type: authorizationType, userEmail }) => {
      await AUTH.setLoginSession(() => {
        globalDispatch({
          type: Actions.SESSION_INFO,
          payload: { token, authorizationType },
        });
      }, userEmail);
    },
    [globalDispatch]
  );

  const handleLoginUser = useCallback(async () => {
    if (handleValidateForm()) {
      emailInputRef.current = form.email;
      handleFetchData();
    } else {
      let messageError = form.email.length === 0 ? EMPTY_FIELDS_ERROR : INVALID_PASSWORD_ERROR;
      handleOpenModal({
        title: GENERAL_MODAL_TITLE,
        description: messageError,
        visible: true,
      });
    }
  }, [form.email, handleValidateForm, handleFetchData, handleOpenModal]);

  useEffect(() => {
    if (error) {
      handleOpenModal({
        title: GENERAL_MODAL_TITLE,
        description: GENERAL_ERROR_MESSAGE,
        visible: true,
      });
    } else if (data) {
      handleLoginData({ ...data, userEmail: emailInputRef.current });
    }
  }, [data, error]);

  return (
    <SafeAreaFrame
      completeScreen
      title='LoginScreen'
      statusBarStyle='dark-content'
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={devicePlatformRef?.current !== 'android' ? 'padding' : null}
        enabled
        testID="signInScreen"
      >
        <ScrollView
          contentContainerStyle={styles.loginContentContainer}
          keyboardShouldPersistTaps='handled'
        >
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
            <Image
              source={require('../../../assets/toolboxLogo.png')}
              style={{ width: 250, height: 250 }}
              resizeMode='contain'
            />
          </View>
          <View style={styles.inputsContainer}>
            <Text style={styles.label}>Correo Electrónico</Text>
            <TextInput
              testID='emailInput'
              autoCapitalize='none'
              keyboardType='email-address'
              value={form.email}
              style={styles.emailInput}
              placeholder='Ingrese Correo Electrónico'
              onChangeText={(text) => handleChangeInput('email', text)}
              placeholderTextColor={Colors.GRAY_40}
            />
            <Text style={styles.label}>Contraseña</Text>
            <PasswordInput
              testID='passwordInput'
              value={form.password}
              placeholder='Ingrese Contraseña'
              onChangeText={(text) => handleChangeInput('password', text)}
              textStyle={styles.passwordInput}
              eyeIconContainerStyle={styles.passwordInputIcon}
              selectionColor={Colors.GRAY_0}
              onSubmitEditing={handleLoginUser}
            />
          </View>
          <View style={styles.loginButtonSectionContainer}>
            <Button
              testID='loginButtonContainer'
              activeOpacity={1.0}
              title='LOGIN'
              style={styles.loginButtonContainer}
              onPress={handleLoginUser}
              disabled={disabledLoginButton}
            />
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
      <AbsoluteLoader visible={loading} />
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
