import {
  Image,
  Input,
  Line,
  MainHeader,
  Text,
  Touchable,
  TouchableWithOutKeyBoard,
  View,
} from '@components';
import {Colors, FontSize} from '@constants';
import {FONT} from '@fonts';
import {StarIcon} from '@icons';
import {navigate} from '@navigation';
import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const WriteReview = () => {
  const {styles, theme} = useStyles(bookDetailsStyles);
  return (
    <View flex={1}>
      <TouchableWithOutKeyBoard>
        <KeyboardAvoidingView style={{flex: 1}} behavior="position">
          <MainHeader title="" borderBottomWidth={0} />
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
            <Line marginVertical={20} width={'100%'} />
            <View alignItems="center">
              <Text mTop={10} size={FontSize.x20} font={FONT.BOLD}>
                Rate the Ebook
              </Text>
            </View>
            <Line marginVertical={20} width={'100%'} />
            <Text>Describe your experience (optianal)</Text>
            <Input
              marginTop={10}
              multiline
              color={theme.colors.typography}
              height={150}
              placeholderTextColor={Colors.x9e9f9e}
              placeholder="Write your review here"
              style={styles.input}
            />
          </ScrollView>
          <View
            paddingHorizontal={20}
            bottom={0}
            marginVertical={20}
            justifyContent="space-between"
            flexDirection="row">
            <Touchable
              backgroundColor={Colors.xfef4e5}
              borderRadius={30}
              width={'48%'}
              height={40}
              alignItems="center"
              justifyContent="center">
              <Text color={Colors.orage} size={FontSize.x16} font={FONT.BOLD}>
                Cancel
              </Text>
            </Touchable>
            <Touchable
              backgroundColor={Colors.orage}
              borderRadius={30}
              width={'48%'}
              height={40}
              alignItems="center"
              justifyContent="center">
              <Text color={Colors.white} size={FontSize.x16} font={FONT.BOLD}>
                Submit
              </Text>
            </Touchable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithOutKeyBoard>
    </View>
  );
};

export default WriteReview;

const bookDetailsStyles = createStyleSheet(() => ({
  scroollView: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.orage,
    borderRadius: 10,
    padding: 10,
  },
}));
