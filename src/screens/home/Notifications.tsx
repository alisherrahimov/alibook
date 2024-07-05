import {MainHeader, Text, View} from '@components';
import {FontSize} from '@constants';
import {FONT} from '@fonts';
import React from 'react';
import {Skottie} from 'react-native-skottie';

const Notifications = () => {
  return (
    <View flex={1}>
      <MainHeader title="Notifications" />
      <View alignItems="center" justifyContent="center" flex={1}>
        <Skottie
          style={{width: 200, height: 200}}
          autoPlay
          source={require('../../assets/lotties/KljqRRTxqa.json')}
        />
        <Text size={FontSize.x18} font={FONT.BOLD}>
          Notifications are not found
        </Text>
      </View>
    </View>
  );
};

export default Notifications;
