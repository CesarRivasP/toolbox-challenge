import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import AbsoluteLoader from '../../components/absoluteLoader';
import styles from './styles';

function CharacterInfoCard({
  id,
  name,
  gender,
  species,
  status,
  image,
  handleDisplayCharacterDetails,
}) {
  return (
    <View key={id} style={styles.itemContainer}>
      <TouchableOpacity style={styles.cardContainer} onPress={() => handleDisplayCharacterDetails(id)}>
        <Image source={{ uri: image }} style={styles.characterImage} />
        <View style={styles.characterDescriptionContainer}>
          <Text numberOfLines={1} style={styles.characterTitle}>{name}</Text>
          <Text>{gender}</Text>
          <Text>{species}</Text>
          <Text>{status}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

CharacterInfoCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handleDisplayCharacterDetails: PropTypes.func.isRequired,
};

export default CharacterInfoCard;
