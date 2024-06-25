import React, {useEffect} from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {Header, MainHeader, Text, View} from '@components';
import {ScrollView} from 'react-native';
import {BookService} from '../../api';

const Home = () => {
  const {theme} = useStyles(homeStyles);

  useEffect(() => {
    async function fetchData() {
      const response = await BookService.getBooks();
      console.log(response.data);
    }
    fetchData();
  }, []);

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
