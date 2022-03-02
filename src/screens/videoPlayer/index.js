import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Video } from 'expo-av';
import SafeAreaFrame from '../../components/safeAreaFrame';
import Toolbar from '../../components/toolbar/toolbar';
import { GENERAL_ERROR_MESSAGE } from '../../utils/constants/errorMessages';
import styles from './styles';
import Colors from '../../utils/styles/colors';

function VideoPlayer({ navigation, route }) {
  const { videoURI } = route?.params;
  let renderVideoPlayer;

  if (!videoURI) {
    renderVideoPlayer = (
      <View style={styles.emptyVideoContainer}>
        <Text testID='emptyVideoText' onPress={navigation.goBack} style={styles.emptyVideoText}>
          {GENERAL_ERROR_MESSAGE}
        </Text>
      </View>
    );
  } else {
    renderVideoPlayer = (
      <Video
        testID='videoPlayerComponent'
        useNativeControls
        style={styles.videoPlayerContainer}
        source={{ uri: videoURI }}
        resizeMode='contain'
      />
    );
  }
  return (
    <SafeAreaFrame
      title='VideoPlayerScreen'
      completeScreen={false}
      statusBarColor={Colors.GRAY}
      headerStyle={styles.safeAreaHeader}
      completeStyle={styles.safeAreaBottom}
    >
      <View style={styles.container}>
        <Toolbar
          leftElement
          title="Video Player"
          onLeftElementPress={navigation.goBack}
        />
        {renderVideoPlayer}
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
