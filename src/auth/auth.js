import * as SecureStore from 'expo-secure-store';

const ACCESS_USER_KEY = 'ToolboxKey';

class Auth {
  constructor() {
    this.authenticated = false;
  }

  async setLoginSession(loginCallback, userEmail) {
    this.authenticated = true;
    try {
      await SecureStore.setItemAsync(ACCESS_USER_KEY, JSON.stringify(userEmail));
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
