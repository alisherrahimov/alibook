import {
  Card,
  Image,
  Line,
  MainHeader,
  Text,
  Touchable,
  View,
} from '@components';
import {Colors, FontSize} from '@constants';
import {FONT} from '@fonts';
import {HeartIcon, RightIcon, ShareIcon, StarIcon} from '@icons';
import {navigate} from '@navigation';
import React from 'react';
import {FlatList, ScrollView, Share} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const BookDetails = () => {
  const {theme, styles} = useStyles(bookDetailsStyles);
  return (
    <View flex={1}>
      <MainHeader
        title="Book name"
        borderBottomWidth={0}
        icons={
          <View
            width={'18%'}
            justifyContent="space-between"
            flexDirection="row">
            <Touchable
              width={30}
              height={30}
              alignItems="center"
              justifyContent="center">
              <HeartIcon color={theme.colors.typography} />
            </Touchable>
            <Touchable
              onPress={() => {
                Share.share({message: 'nima gap', url: 'niga ', title: 'asad'});
              }}
              width={30}
              height={30}
              alignItems="center"
              justifyContent="center">
              <ShareIcon color={theme.colors.typography} />
            </Touchable>
          </View>
        }
      />

      <ScrollView contentContainerStyle={styles.scroollView}>
        <View flex={1} flexDirection="row">
          <Image
            source={{
              uri: 'https://e0.pxfuel.com/wallpapers/237/246/desktop-wallpaper-ayyy-ne-tatlı-kediş-bu-kediler-kawaii-kawaii-cartoon-cat.jpg',
            }}
            width={170}
            height={200}
            borderRadius={16}
          />
          <View marginHorizontal={10} width={'50%'}>
            <Text mTop={10} size={FontSize.x18} font={FONT.BOLD}>
              Lorem ipsum dolor sit amet
            </Text>
            <Text
              color={Colors.orage}
              mTop={10}
              size={FontSize.x14}
              font={FONT.BOLD}>
              Alisher Navoiy
            </Text>
            <Text
              mTop={10}
              size={FontSize.x14}
              color={Colors.x9e9f9e}
              font={FONT.BOLD}>
              Released on Dec, 2021
            </Text>
            <View marginTop={4} flexDirection="row" flexWrap="wrap">
              {['Classic', 'Modern', 'Romance', 'Noval', 'History'].map(
                (item, index) => {
                  return (
                    <View
                      backgroundColor={Colors.xefeeef}
                      margin={4}
                      left={-4}
                      key={index}
                      padding={5}
                      borderRadius={10}
                      alignItems="center"
                      justifyContent="center">
                      <Text color={Colors.x747374} size={FontSize.x12}>
                        {item}
                      </Text>
                    </View>
                  );
                },
              )}
            </View>
          </View>
        </View>

        <View
          justifyContent="space-between"
          marginVertical={20}
          height={60}
          flexDirection="row">
          <View width={'25%'}>
            <View
              flexDirection="row"
              alignItems="center"
              justifyContent="center">
              <Text pRight={6} font={FONT.BOLD} size={FontSize.x18}>
                4.9
              </Text>
              <StarIcon width={20} height={20} color={Colors.orage} />
            </View>
            <Text size={FontSize.x12} mTop={4}>
              6.8k reviews
            </Text>
          </View>
          <View
            height={'80%'}
            width={2}
            backgroundColor={theme.colors.lineColor}
          />
          <View alignItems="center" width={'25%'}>
            <View
              flexDirection="row"
              alignItems="center"
              justifyContent="center">
              <Text pRight={6} font={FONT.BOLD} size={FontSize.x18}>
                5.6 MB
              </Text>
            </View>
            <Text size={FontSize.x12} mTop={4}>
              size
            </Text>
          </View>
          <View
            height={'80%'}
            width={2}
            backgroundColor={theme.colors.lineColor}
          />
          <View alignItems="center" width={'25%'}>
            <View
              flexDirection="row"
              alignItems="center"
              justifyContent="center">
              <Text pRight={6} font={FONT.BOLD} size={FontSize.x18}>
                399
              </Text>
            </View>
            <Text size={FontSize.x12} mTop={4}>
              pages
            </Text>
          </View>
          <View
            height={'80%'}
            width={2}
            backgroundColor={theme.colors.lineColor}
          />
          <View width={'25%'} alignItems="center">
            <View
              flexDirection="row"
              alignItems="center"
              justifyContent="center">
              <Text pRight={6} font={FONT.BOLD} size={FontSize.x18}>
                5k
              </Text>
            </View>
            <Text size={FontSize.x12} mTop={4}>
              purchased
            </Text>
          </View>
        </View>

        <Touchable
          alignItems="center"
          justifyContent="center"
          backgroundColor={Colors.orage}
          width={'100%'}
          height={40}
          borderRadius={16}>
          <Text color={Colors.white} size={FontSize.x16} font={FONT.BOLD}>
            Buy 9.99 $
          </Text>
        </Touchable>

        <View>
          <View
            marginVertical={15}
            justifyContent="space-between"
            flexDirection="row"
            alignItems="center">
            <Text size={FontSize.x18} font={FONT.BOLD}>
              About this Ebook
            </Text>
            <Touchable
              onPress={() => navigate('AboutBook')}
              width={25}
              height={25}
              alignItems="center"
              justifyContent="center">
              <RightIcon color={Colors.orage} />
            </Touchable>
          </View>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada turpis nec odio tincidunt, nec condimentum nunc
            pellentesque. Nullam nec libero nec odio tincidunt, nec condimentum
          </Text>
          <View
            marginVertical={15}
            justifyContent="space-between"
            flexDirection="row"
            alignItems="center">
            <Text size={FontSize.x18} font={FONT.BOLD}>
              Rating & Reviews
            </Text>
            <Touchable
              onPress={() => navigate('ReviewBook')}
              width={25}
              height={25}
              alignItems="center"
              justifyContent="center">
              <RightIcon color={Colors.orage} />
            </Touchable>
          </View>
          <View alignItems="center">
            <Text size={FontSize.x30 + 10} font={FONT.BOLD}>
              4.9
            </Text>
            <View flexDirection="row">
              <StarIcon color={Colors.orage} />
              <StarIcon color={Colors.orage} />
              <StarIcon color={Colors.orage} />
              <StarIcon color={Colors.orage} />
              <StarIcon color={Colors.orage} />
            </View>

            <Text mTop={10} size={FontSize.x16} font={FONT.BOLD}>
              (5.9k reviews)
            </Text>
          </View>
        </View>
        <View marginVertical={20} alignItems="center">
          <Line width={'100%'} />
          <Text mTop={10} size={FontSize.x20} font={FONT.BOLD}>
            Rate the Ebook
          </Text>
          <View flexDirection="row">
            <StarIcon color={Colors.orage} />
            <StarIcon color={Colors.orage} />
            <StarIcon color={Colors.orage} />
            <StarIcon color={Colors.orage} />
            <StarIcon color={Colors.orage} />
          </View>
          <Touchable
            onPress={() => navigate('WriteReview')}
            height={40}
            width={'50%'}
            alignItems="center"
            borderWidth={1}
            borderColor={Colors.orage}
            borderRadius={25}
            justifyContent="center">
            <Text size={FontSize.x16} font={FONT.BOLD} color={Colors.orage}>
              Write a review
            </Text>
          </Touchable>
        </View>
        <View marginVertical={10}>
          <Text size={FontSize.x18} font={FONT.BOLD}>
            Harry Potter Series
          </Text>
        </View>
        <FlatList
          horizontal
          data={[1, 2]}
          contentContainerStyle={{gap: 15}}
          renderItem={() => (
            <Card
              image="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL3JtNTk3ZGVzaWduLWMtY2hvbmctMDAxLmpwZw.jpg"
              price={9.99}
              rate={4}
              title="Harry Potter"
            />
          )}
        />
        <View marginVertical={10}>
          <Text size={FontSize.x18} font={FONT.BOLD}>
            Harry Potter Series
          </Text>
        </View>
        <FlatList
          horizontal
          data={[1, 2]}
          contentContainerStyle={{gap: 15}}
          renderItem={() => (
            <Card
              image="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL3JtNTk3ZGVzaWduLWMtY2hvbmctMDAxLmpwZw.jpg"
              price={9.99}
              rate={4}
              title="Harry Potter"
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default BookDetails;

const bookDetailsStyles = createStyleSheet(() => {
  return {
    scroollView: {
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
  };
});
