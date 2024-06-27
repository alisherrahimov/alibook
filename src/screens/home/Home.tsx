import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {Header, View} from '@components';

const Home = () => {
  const {theme} = useStyles(homeStyles);

  return (
    <View backgroundColor={theme.colors.background} flex={1}>
      <Header title="Header" />
      {/* <ScrollView>
        {Array.from({length: 1000}).map((_, index) => (
          <Text>Card {index + 1}</Text>
        ))}
      </ScrollView> */}
    </View>
  );
};

export default Home;

const homeStyles = createStyleSheet(theme => {
  return {
    flex: {
      flex: 1,
    },
  };
});
