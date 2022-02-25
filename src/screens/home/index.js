import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CharactersList from './charactersList';


function Home({ navigation }) {
  return (
    <View>
      <CharactersList
        navigate={navigation.navigate}
      />
    </View>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
