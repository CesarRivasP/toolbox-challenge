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
  titleBold,
  activeOpacity,
}) {
  const { pressedStatus, handlePressedStatus } = usePressedStatus();
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => handlePressedStatus(true)}
      onPressOut={() => handlePressedStatus(false)}
      style={[styles.container(disabled, pressedStatus), style]}
      delayPressIn={0}
    >
      <Text style={styles.title(titleBold, disabled)}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  titleBold: PropTypes.bool,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  activeOpacity: PropTypes.number,
};

Button.defaultProps = {
  activeOpacity: 0.68,
};

export default Button;
