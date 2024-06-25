import {Header, Text, View} from '@components';
import React from 'react';
import {useStyles} from 'react-native-unistyles';

const Purchased = () => {
  const {theme} = useStyles();
  return (
    <View flex={1} backgroundColor={theme.colors.background}>
      <Header title="Purchased" />
    </View>
  );
};

export default Purchased;
