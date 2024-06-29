import {Header, PurchaseCard, Text, View} from '@components';
import React from 'react';
import {ScrollView} from 'react-native';
import {useStyles} from 'react-native-unistyles';

const Purchased = () => {
  const {theme} = useStyles();
  return (
    <View flex={1} backgroundColor={theme.colors.background}>
      <Header title="Purchased" />
      <ScrollView contentContainerStyle={{paddingHorizontal: 20}}>
        <PurchaseCard />
        <PurchaseCard />
        <PurchaseCard />
      </ScrollView>
    </View>
  );
};

export default Purchased;
