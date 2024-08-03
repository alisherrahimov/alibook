import React, {useCallback, useEffect, useState} from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {FlatListItem, Header, Text, Touchable, View} from '@components';
import {NotificationIcon, RightIcon} from '@icons';
import {navigate} from '@navigation';
import {RefreshControl, ScrollView} from 'react-native';

import {FONT} from '@fonts';
import {Colors, FontSize} from '@constants';

const Home = () => {
  const {theme, styles} = useStyles(homeStyles);
  const [categories, setCategories] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onGetCategories = useCallback(async () => {}, []);

  useEffect(() => {
    onGetCategories();
  }, []);

  return (
    <View flex={1}>
      <Header
        title="ALIBOOK"
        buttons={
          <Touchable
            onPress={() => {
              navigate('Notifications');
            }}>
            <NotificationIcon color={theme.colors.typography} />
          </Touchable>
        }
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onGetCategories} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        {categories.map((item, index) => {
          return (
            <View key={index}>
              <View
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row">
                <Text size={FontSize.x20} mV={20} font={FONT.BOLD} mLeft={20}>
                  {item?.name}
                </Text>
                <Touchable
                  onPress={() => {
                    navigate('SeeAll', {
                      categories_id: item.id,
                      categories_name: item?.name,
                    });
                  }}
                  marginRight={20}>
                  <RightIcon width={26} height={26} color={Colors.orage} />
                </Touchable>
              </View>
              {index === 0 ? <Text>Test</Text> : null}
              <FlatListItem categories_id={item?.id} />
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
