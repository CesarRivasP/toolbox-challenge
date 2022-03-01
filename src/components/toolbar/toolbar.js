import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import Colors from '../../utils/styles/colors';

function Toolbar({
  title,
  leftElement,
  onLeftElementPress,
}) {
  const renderCloseButton = (
    <TouchableOpacity
      testID='toolbarLeftElement'
      activeOpacity={0.8}
      style={styles.backButton}
      onPress={onLeftElementPress}
    >
      <Ionicons
        name="arrow-back-outline"
        size={30}
        color={Colors.WHITE}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {leftElement ? renderCloseButton : null}
      {title ? <Text style={styles.title} testID='toolbarTitle'>{title}</Text> : null}
    </View>
  );
}

Toolbar.propTypes = {
  title: PropTypes.string,
  leftElement: PropTypes.bool,
  onLeftElementPress: PropTypes.func,
};

Toolbar.defaultProps = {
  title: null,
  leftElement: null,
  onLeftElementPress: null,
};
export default Toolbar;
