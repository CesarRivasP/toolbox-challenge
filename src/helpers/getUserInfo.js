import * as SecureStore from 'expo-secure-store';
import ENV from '../config/envVars';

const getUserInfo = async () => {
  try {
    const response = await SecureStore.getItemAsync(ENV?.ACCESS_USER_KEY);
    const validResponse = response ? response : null;
    return validResponse;
  } catch (error) {
    return null;
  }
};

export default getUserInfo;
