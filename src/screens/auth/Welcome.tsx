import {Text, View} from '@components';
import {WIDTH} from '@constants';

import React from 'react';
import {ImageBackground} from 'react-native';

const Welcome = () => {
  return (
    <View flex={1}>
      <ImageBackground
        source={{
          uri: 'https://www.londonlibrary.co.uk/images/20210408113322.JPG',
        }}
        style={{width: WIDTH, height: WIDTH}}
      />
      <View>
        <Text size={20} textAlign="center">
          Welcome to the Library
        </Text>
        <Text textAlign="center" color="grey">
          Explore the world of books
        </Text>
      </View>
    </View>
  );
};

export default Welcome;
