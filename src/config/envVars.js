import Constants from 'expo-constants';
// import {
//   NODE_ENV,
//   API_URL,
// } from '@env';

let ENVS;

if (Constants?.appOwnership === 'expo') {
  const expoContants = Constants?.manifest?.extra;
  ENVS = {
    NODE_ENV: expoContants?.ENV || '',
    API_URL: expoContants?.API_URL || '',
  };
}
// TODO: Implement in bare workflow
// else {
//   ENVS = {
//     NODE_ENV: NODE_ENV || '',
//     API_URL: API_URL || '',
//   };
// }

export default ENVS;
