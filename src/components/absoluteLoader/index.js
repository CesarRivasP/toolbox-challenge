import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types'
import Colors from '../../utils/styles/colors';
import styles from './styles'

function AbsoluteLoader({
  visible,
  spinnerColor,
  backgroundColor,
}) {
  if(visible) {
    return (
      <View style={[styles.container, backgroundColor ]}>
        <ActivityIndicator size='large' color={spinnerColor} />
      </View>
    );
  }
  return null;
};

AbsoluteLoader.propTypes = {
  visible: PropTypes.bool.isRequired,
  spinnerColor: PropTypes.string,
  backgroundColor: PropTypes.string,
}

AbsoluteLoader.defaultProps = {
  visible: false,
  spinnerColor: Colors.WHITE,
  backgroundColor: Colors.BACKDROP_COLOR,
}

export default AbsoluteLoader;
