import Constants from 'expo-constants';
import {
  API_URL,
  ACCESS_USER_KEY,
} from '@env';

let ENVS;

if (Constants?.appOwnership === 'expo') {
  const expoContants = Constants?.manifest?.extra;
  ENVS = {
    API_URL: expoContants?.API_URL || '',
    ACCESS_USER_KEY: expoContants?.ACCESS_USER_KEY || 'defaultKey',
  };
} else {
  ENVS = {
    API_URL: API_URL || '',
    ACCESS_USER_KEY: ACCESS_USER_KEY || 'defaultKey',
  };
}

export default ENVS;
