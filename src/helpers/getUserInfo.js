import * as SecureStore from 'expo-secure-store';
// import * as Sentry from 'sentry-expo';

const ACCESS_USER_KEY = 'momentoAccessToken';

const getUserInfo = async () => {
  try {
    const response = await SecureStore.getItemAsync(ACCESS_USER_KEY);
    const validResponse = response ? JSON.parse(response) : null;
    return validResponse;
  } catch (error) {
    // Sentry.Native.captureException(new Error(`Error in getUserInfo method: ${error}`), {
    //   tags: {
    //     section: 'LOGIN',
    //     func: 'GetUserInfo',
    //   },
    // });
    return null;
  }
};

export default getUserInfo;
