import React from "react";
import PropTypes from "prop-types";
import { View, TextInput as Input, ViewPropTypes } from "react-native";
import { Text } from "@ui-kitten/components";
import styles from "./styles";
import Colors from "../../utils/styles/colors";

function TextInput(props){
  const { label, containerStyle, error, inputStyle } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <Input
        placeholderTextColor={Colors.GREY}
        style={[styles.input, inputStyle]}
        {...props}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  inputStyle: Input.propTypes.style,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  label: undefined,
};

export default TextInput;
