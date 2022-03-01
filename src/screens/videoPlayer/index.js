import React, { useRef } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Video } from 'expo-av';
import SafeAreaFrame from '../../components/safeAreaFrame';
import Toolbar from '../../components/toolbar/toolbar';
import styles from './styles';

function VideoPlayer({ navigation, route }) {
  const { videoURI } = route.params;
  const videoPlayerRef = useRef(null);

  return (
    <SafeAreaFrame
      title='VideoPlayerScreen'
      completeScreen={false}
      headerStyle={styles.safeAreaHeader}
      completeStyle={styles.safeAreaBottom}
    >
      <View style={styles.container}>
        <Toolbar
          leftElement
          title="Video Player"
          onLeftElementPress={navigation.goBack}
        />
        <Video
          ref={videoPlayerRef}
          style={styles.videoPlayerContainer}
          useNativeControls
          source={{ uri: videoURI }}
        />
      </View>
    </SafeAreaFrame>
  );
}

VideoPlayer.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
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
