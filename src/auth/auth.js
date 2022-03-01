import * as SecureStore from 'expo-secure-store';
import ENV from '../config/envVars';

class Auth {
  constructor() {
    this.authenticated = false;
  }

  async setLoginSession(loginCallback, userEmail) {
    this.authenticated = true;
    try {
      await SecureStore.setItemAsync(ENV?.ACCESS_USER_KEY, userEmail);
      loginCallback();
    } catch (error) {
      throw new Error(`Error in setLoginSession function ${error}`);
    }
  }

  async setLogoutSession(logoutCallback) {
    this.authenticated = false;
    logoutCallback();
  }

  async isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
