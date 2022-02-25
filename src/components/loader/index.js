import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

function Loader({ size, height, color }) {
  return (
    <View
      testID='loadingContainer'
      style={[styles.container, { height }]}
    >
      <ActivityIndicator
        testID='loadingComponent'
        color={color}
        size={size}
      />
    </View>
  );
}

Loader.propTypes = {
  size: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Loader;