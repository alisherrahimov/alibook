import {Header, Text, View} from '@components';
import React from 'react';
import {useStyles} from 'react-native-unistyles';

const Profile = () => {
  const {theme} = useStyles();
  return (
    <View flex={1} backgroundColor={theme.colors.background}>
      <Header title="Profile" />
    </View>
  );
};

export default Profile;
