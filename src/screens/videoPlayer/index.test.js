import * as React from 'react';
import { mount } from 'enzyme';
import VideoPlayer from '.';
import { GENERAL_ERROR_MESSAGE } from '../../utils/constants/errorMessages';

describe('VideoPlayer screen', () => {
  let wrapper;
  let navigation;
  const route = {
    params: {
      videoURI: 'videoUriTest',
    },
  };
  const loadWrapper = () => {
    navigation = {
      navigate: jest.fn(),
    };
    wrapper = mount(
      <VideoPlayer
        navigation={navigation}
        route={route}
      />
    );
  };

  it('When the videoURI parameter exists, the VideoPlayer component should exist.', () => {
    loadWrapper();
    wrapper.update();
    expect(wrapper).not.toBeNull();
    const videoPlayerComponent = wrapper.find({ testID: 'videoPlayerComponent' }).at(0);
    expect(videoPlayerComponent).toExist();
  });

  it('sSince the videoURI parameter does not exist, the VideoPlayer component should not exist, and the error text should be displayed.', () => {
    route.params.videoURI = null;
    loadWrapper();
    wrapper.update();
    expect(wrapper).not.toBeNull();
    const videoPlayerComponent = wrapper.find({ testID: 'videoPlayerComponent' }).at(0);
    expect(videoPlayerComponent).not.toExist();
    const emptyVideoText = wrapper.find({ testID: 'emptyVideoText' }).at(0);
    expect(emptyVideoText.props().children).toBe(GENERAL_ERROR_MESSAGE);
  });
});
