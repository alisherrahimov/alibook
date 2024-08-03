import {MainHeader, Text, View} from '@components';
import React from 'react';
import {FlatList} from 'react-native';

const Genres = () => {

    

  return (
    <View flex={1}>
      <MainHeader title="Genres" />
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={() => <Text>Genre</Text>}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default Genres;
