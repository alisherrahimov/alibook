import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {FlatListItem, Header, Text, Touchable, View} from '@components';
import {NotificationIcon, RightRowIcon} from '@icons';
import {navigate} from '@navigation';
import {ScrollView} from 'react-native';

import {FONT} from '@fonts';
import {Colors, FontSize} from '@constants';
const arr = [
  {
    categories_id: 1,
    categories_name: 'Classic',
  },
  {
    categories_id: 2,
    categories_name: 'Modern',
  },
  {
    categories_id: 3,
    categories_name: 'Vintage',
  },
  {
    categories_id: 4,
    categories_name: 'Retro',
  },
  {
    categories_id: 5,
    categories_name: 'Contemporary',
  },
];
const Home = () => {
  const {theme, styles} = useStyles(homeStyles);

  return (
    <View flex={1}>
      <Header
        title="Header"
        buttons={
          <Touchable
            onPress={() => {
              navigate('Notifications');
            }}>
            <NotificationIcon />
          </Touchable>
        }
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        {arr.map((item, index) => {
          return (
            <View key={index}>
              <View
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row">
                <Text size={FontSize.x20} mV={20} font={FONT.BOLD} mLeft={20}>
                  {item.categories_name}
                </Text>
                <Touchable marginRight={20}>
                  <RightRowIcon color={Colors.orage} />
                </Touchable>
              </View>
              <FlatListItem categories_id={index} categories_name="sadasdas" />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;

const homeStyles = createStyleSheet(theme => {
  return {
    flex: {
      flex: 1,
    },
    container: {},
  };
});
