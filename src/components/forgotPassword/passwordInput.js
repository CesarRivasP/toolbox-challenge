import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import {
  TextInput,
  TouchableOpacity,
  ViewPropTypes,
  View,
} from 'react-native';
import Colors from '../../utils/styles/colors';
import styles from './styles';

const PasswordInput = ({
  value,
  placeholder,
  onChangeText,
  textStyle,
  onFocus,
  onBlur,
  eyeIconContainerStyle
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.textBoxContainer}>
      <TextInput
        underlineColorAndroid="transparent"
        secureTextEntry={secureTextEntry}
        placeholderTextColor={Colors.GRAY_40}
        style={textStyle}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.touchableButton, eyeIconContainerStyle]}
        onPress={() => toggleSecureEntry()}
        id="securePasswordStatus"
      >
        <FontAwesome
          name={secureTextEntry ?  'eye-slash' : 'eye'}
          color={Colors.GRAY}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  textStyle: PropTypes.shape({}).isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  eyeIconContainerStyle: ViewPropTypes.style,
};

export default PasswordInput;
