import Constants from 'expo-constants';

let ENVS;

if (Constants?.appOwnership === 'expo') {
  const expoContants = Constants?.manifest?.extra;
  ENVS = {
    API_URL: expoContants?.API_URL || '',
    ACCESS_USER_KEY: expoContants?.ACCESS_USER_KEY || 'defaultKey',
  };
}

export default ENVS;
