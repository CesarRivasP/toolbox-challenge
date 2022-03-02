jest.mock('expo-secure-store');
import * as SecureStore from 'expo-secure-store';
import AUTH from './auth';

describe('Autentication class', () => {
  let spyCallback;
  const USER_INFO = {
    email: 'test@mail.com',
    password: 'password',
  };

  beforeEach(() => {
    spyCallback = jest.fn();
  });

  it('should have an initial state of false', async () => {
    const autenticated = await AUTH.isAuthenticated();
    expect(autenticated).toBe(false);
  });

  it('should run once', async () => {
    await AUTH.setLoginSession(spyCallback, USER_INFO);
    expect(spyCallback).toHaveBeenCalledTimes(1);
  });

  it('should remove user of async storage', async () => {
    await AUTH.setLogoutSession(spyCallback, false);
    expect(spyCallback).toHaveBeenCalledTimes(1);
  });

  it('should remove user of async storage', async () => {
    await AUTH.setLogoutSession(spyCallback, true);
    expect(spyCallback).toHaveBeenCalledTimes(1);
  });

  it('should throw an error when async storage is not available', async () => {
    jest
      .spyOn(SecureStore, 'setItemAsync')
      .mockRejectedValueOnce('Async storage not available');
    try {
      await AUTH.setLoginSession(spyCallback);
    } catch (error) {
      expect(error.message).toBe(
        'Error in setLoginSession function Async storage not available'
      );
    }
  });
});
