import {Image, MainHeader, Text, Touchable, View} from '@components';
import {Colors, FontSize} from '@constants';
import {FONT} from '@fonts';
import {
  DoubleRowIcon,
  FilterIcon,
  OneRowIcon,
  SearchIcon,
  StarIcon,
} from '@icons';
import {navigate} from '@navigation';
import {useRoute} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const SeeAll = ({}) => {
  const {styles, theme} = useStyles(seeAllStyles);
  const params = useRoute().params;

  const renderItem = useCallback(() => {
    return (
      <Touchable
        onPress={() => {
          navigate('BookDetails');
        }}
        width={170}>
        <Image
          borderRadius={16}
          source={{
            uri: 'https://marketplace.canva.com/EAFTDa9HnCc/1/0/900w/canva-cream-beige-aesthetic-phone-wallpaper-D0iGbUPXGiU.jpg',
          }}
          width={170}
          height={190}
        />
        <Text mTop={8} font={FONT.BOLD}>
          Lorem ipsum dolor sit ametasd
        </Text>
        <View alignItems="center" flexDirection="row" marginTop={4}>
          <StarIcon width={20} height={20} color={Colors.orage} />
          <Text mH={4}>4.9</Text>
          <Text mLeft={8}>$ 9.99</Text>
        </View>
      </Touchable>
    );
  }, []);

  return (
    <View flex={1}>
      <MainHeader
        title={params?.categories_name}
        borderBottomWidth={0}
        icons={
          <View
            flexDirection="row"
            alignItems="center"
            width={'20%'}
            justifyContent="space-between">
            <Touchable
              height={30}
              width={30}
              alignItems="center"
              justifyContent="center">
              <SearchIcon color={theme.colors.typography} />
            </Touchable>
            <Touchable
              height={30}
              width={30}
              alignItems="center"
              justifyContent="center">
              <FilterIcon color={theme.colors.typography} />
            </Touchable>
          </View>
        }
      />
      <View
        paddingHorizontal={20}
        paddingVertical={10}
        width={'100%'}
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center">
        <Text font={FONT.BOLD} size={FontSize.x18}>
          Show In
        </Text>
        <View
          flexDirection="row"
          width={'18%'}
          justifyContent="space-between"
          alignItems="center">
          <Touchable>
            <DoubleRowIcon color={Colors.orage} />
          </Touchable>
          <Touchable>
            <OneRowIcon color={theme.colors.typography} />
          </Touchable>
        </View>
      </View>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.container}
        data={[1, 2, 3, 4, 5]}
        renderItem={renderItem}
        columnWrapperStyle={{justifyContent: 'space-between'}}
      />
    </View>
  );
};

export default SeeAll;

const seeAllStyles = createStyleSheet(theme => {
  return {
    flex: {
      flex: 1,
    },
    container: {
      paddingHorizontal: 20,
      gap: 15,
      paddingVertical: 20,
    },
  };
});
