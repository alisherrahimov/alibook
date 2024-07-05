import {Header, Text, Touchable, View} from '@components';
import {SearchIcon} from '@icons';
import {navigate} from '@navigation';
import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const Discover = () => {
  const {theme} = useStyles(discoverStyles);
  return (
    <View flex={1} backgroundColor={theme.colors.background}>
      <Header
        title="Discover"
        buttons={
          <Touchable
            width={35}
            height={35}
            alignItems="center"
            justifyContent="center"
            onPress={() => {
              navigate('SearchBook');
            }}>
            <SearchIcon color={theme.colors.typography} />
          </Touchable>
        }
      />
      <Touchable onPress={() => {}}>
        <Text>Discover</Text>
      </Touchable>
    </View>
  );
};

export default Discover;

const discoverStyles = createStyleSheet(() => ({}));
