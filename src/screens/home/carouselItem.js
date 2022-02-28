import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

function CarouselItem({
  id,
  title,
  imageUri,
  containerStyle,
  imageStyle,
  titleStyle,
  handlePress,
 }) {
  return (
    <TouchableOpacity
      key={id}
      activeOpacity={0.8}
      onPress={handlePress}
      style={containerStyle}>
      <Image
        source={{ uri: imageUri }}
        style={imageStyle}
        resizeMode='contain'
      />
      <Text style={titleStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

CarouselItem.defaultProps = {
  id: '',
  title: '',
  imageUri: '',
  containerStyle: {},
  imageStyle: {},
  titleStyle: {},
  handlePress: () => {},
};

CarouselItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  imageUri: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  imageStyle: ViewPropTypes.style,
  titleStyle: Text.propTypes.style,
  handlePress: PropTypes.func.isRequired,
};

export default CarouselItem;
