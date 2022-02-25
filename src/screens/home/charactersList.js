import React, { useEffect, useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import useFetch from '../../hooks/useFetch';
import * as Types from '../../config/apiTypes';
import CharacterInfoCard from './characterInfoCard';
import AbsoluteLoader from '../../components/absoluteLoader';

function CharactersList({ navigate }) {
  const [characters, setCharacters] = useState([]);
  const { data, error, loading } = useFetch({
    request: Types.GET_CHARACTERS,
    params: null,
    onMountFetch: true,
  });

  useEffect(() => {
    if (error){
      console.log('HUBO UN ERROR', error);
    } else if (data?.results){
      setCharacters(data?.results);
    }
  }, [data, error]);

  const handleDisplayCharacterDetails = (characterId) => navigate('Details', { characterId });

  const handleRenderItem = ({ item }) => (
    <CharacterInfoCard
      id={item.id}
      name={item.name}
      gender={item.gender}
      species={item.species}
      status={item.status}
      image={item.image}
      handleDisplayCharacterDetails={handleDisplayCharacterDetails}
    />
  );

  return (
    <View>
      <FlatList
        data={characters}
        renderItem={handleRenderItem}
        keyExtractor={(item) => String(item?.id)}
      />
      <AbsoluteLoader visible={loading} />
    </View>
  );
}

CharactersList.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default CharactersList;
