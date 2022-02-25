import * as SecureStore from 'expo-secure-store';

const ACCESS_USER_KEY = 'momentoAccessUserKey';

class Auth {
  constructor() {
    this.authenticated = false;
  }

  async setLoginSession(loginCallback, userInfo) {
    this.authenticated = true;
    try {
      await SecureStore.setItemAsync(ACCESS_USER_KEY, JSON.stringify(userInfo));
      loginCallback();
    } catch (error) {
      throw new Error(`Error in setLoginSession function ${error}`);
    }
  }

  async setLogoutSession(logoutCallback, rememberUser) {
    this.authenticated = false;
    if (!rememberUser) {
      try {
        await SecureStore.deleteItemAsync(ACCESS_USER_KEY);
      } catch (error) {
        throw new Error(`Error in setLogoutSession function ${error}`);
      }
    }
    logoutCallback();
  }

  async deletePreviousSession() {
    try {
      await SecureStore.deleteItemAsync(ACCESS_USER_KEY);
    } catch (error) {
      throw new Error(`Error in deletePreviousSession: ${error}`);
    }
  }

  async isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
