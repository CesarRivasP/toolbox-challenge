import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function CarouselTitle({ title }) {
  if (!title) return null;
  return (
    <View style={styles.carouselTitleContainer}>
      <Text style={styles.carouselTitleText}>
        {title}
      </Text>
    </View>
  );
}

export default CarouselTitle;
