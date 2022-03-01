import mockAxios from 'axios';
import { API } from './api';

const MOCK_DATA_LIST = [
  {
      "title": "Carousel Thumb",
      "type": "thumb",
      "items": [
          {
              "title": "Movie 1",
              "imageUrl": "http://placeimg.com/640/480/any",
              "videoUrl": "https://d11gqohmu80ljn.cloudfront.net/128/media-20210712191955-cbdi-0.m3u8/master.m3u8",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          },
          {
              "title": "Movie 3",
              "imageUrl": "http://placeimg.com/640/480/any",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
      ]
  },
  {
      "title": "Carousel Poster",
      "type": "poster",
      "items": [
          {
              "title": "Movie 1",
              "imageUrl": "http://placeimg.com/320/480/any",
              "videoUrl": "https://d11gqohmu80ljn.cloudfront.net/128/media-20210712191955-cbdi-0.m3u8/master.m3u8",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius."
          },
      ]
  }
]

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
