import { getDevicePlatform } from './getDevicePlatform';

describe('getDevicePlatform helper', () => {
  it('should return ios', () => {
    const values = getDevicePlatform();
    expect(values).toBe('ios');
  });
});
