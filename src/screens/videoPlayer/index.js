import React, { useRef } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Video, AVPlaybackStatus } from 'expo-av';
import SafeAreaFrame from '../../components/safeAreaFrame';
import Toolbar from '../../components/toolbar/toolbar';

function VideoPlayer({ navigation, route }) {
  const { videoURI } = route.params;
  const videoPlayerRef = useRef(null);

  return (
    <SafeAreaFrame title='VideoPlayerScreen' completeScreen={false} headerStyle={{ backgroundColor: '#8F8F8F', }} completeStyle={{ backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <Toolbar
          leftElement
          title="Video Player"
          onLeftElementPress={navigation.goBack}
        />
        <Video
          ref={videoPlayerRef}
          style={{ alignSelf: 'center', width: 400, height: 250, marginTop: 20 }}
          useNativeControls
          source={{ uri: videoURI }}
        />
      </View>
    </SafeAreaFrame>
  );
}

VideoPlayer.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      videoURI: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

VideoPlayer.defaultProps = {
  route: {
    params: {
      videoURI: '',
    },
  },
};

export default VideoPlayer;
