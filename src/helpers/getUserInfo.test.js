jest.mock('expo-secure-store');
import * as SecureStore from 'expo-secure-store';
import getUserInfo from './getUserInfo';

describe('GetUserInfo helper', () => {
  let SecureStorageSpy;
  const EMAIL = 'test_email@gmail.com';
  let EXPECTED_EMAIL = EMAIL;

  beforeEach(() => {
    SecureStorageSpy = jest.spyOn(SecureStore, 'getItemAsync');
    SecureStorageSpy.mockReturnValue(Promise.resolve(EXPECTED_EMAIL));
  });

  it('should get user data from async storage', async () => {
    const userEmail = await getUserInfo();
    expect(userEmail).toBe(EXPECTED_EMAIL);
  });

  it('should throw if async storage fail', async () => {
    jest
    .spyOn(SecureStore, 'getItemAsync')
    .mockRejectedValueOnce('Secure storage not available');
    try {
      await getUserInfo();
    } catch (error) {
      expect(error.message).toBe(
        `Error in getUserInfo method: Secure storage not available`
      );
    }
  });

  it('By not getting values ​​from the api you should get null', async () => {
    SecureStorageSpy.mockReturnValue(Promise.resolve(null));
    const response = await getUserInfo();
    expect(response).toBeNull();
  });
});
