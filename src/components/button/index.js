import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, ViewPropTypes } from 'react-native';
import usePressedStatus from '../../hooks/usePressedStatus';
import styles from './styles';

function Button({
  title,
  style,
  onPress,
  disabled,
  activeOpacity,
}) {
  const { pressedStatus, handlePressedStatus } = usePressedStatus();
  return (
    <TouchableOpacity
      testID='buttonComponent'
      activeOpacity={activeOpacity}
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => handlePressedStatus(true)}
      onPressOut={() => handlePressedStatus(false)}
      style={[styles.container(disabled, pressedStatus), style]}
      delayPressIn={0}
    >
      <Text style={styles.title(disabled)}>{title}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  activeOpacity: PropTypes.number,
};

Button.defaultProps = {
  activeOpacity: 0.6,
};

export default Button;
