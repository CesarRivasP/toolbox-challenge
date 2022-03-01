import mockAxios from 'axios';
import { API } from './api';
import { MOCK_DATA_LIST } from '../../__mocks__/mockDataList';

describe('API config', () => {
  const TOKEN = 'xxxxxxxxxxxxxxds';
  const TYPE_AUTHORIZATION = 'Bearer';

  const resolveGetData = (responseData) => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve(responseData)
    )
  }
  const resolvePostData = (responseData) => {
    mockAxios.post.mockImplementation(() =>
      Promise.resolve(responseData)
    )
  }

  it('should return the token', async () => {
    const responseData = {
      data: {
        token: TOKEN,
        type: TYPE_AUTHORIZATION,
      },
    };
    resolvePostData(responseData)
    const subParam = 'ToolboxMobileTest';
    const request = await API.postLoginUser({
      sub: subParam,
    });
    expect(request).toEqual(responseData);
    expect(mockAxios.post).toHaveBeenCalled();
  });

  it('You return user information', async () => {
    const responseData = {
      data: MOCK_DATA_LIST,
    };
    resolveGetData(responseData)
    let request = await API.getDataList({
      token: TOKEN,
      authorizationType: TYPE_AUTHORIZATION,
    });
    expect(request).toEqual(responseData);
    expect(mockAxios.get).toHaveBeenCalled();
  });
});
