import {MainHeader, Text, View} from '@components';
import React from 'react';

const Notifications = () => {
  return (
    <View flex={1}>
      <MainHeader title="Notifications" />
      <View>
        <Text>Notifications</Text>
      </View>
    </View>
  );
};

export default Notifications;
