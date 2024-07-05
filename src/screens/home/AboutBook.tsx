import {Line, MainHeader, Text, View} from '@components';
import {FontSize} from '@constants';
import {FONT} from '@fonts';
import React from 'react';
import {ScrollView} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const AboutBook = () => {
  const {styles} = useStyles(aboutBookStyles);
  return (
    <View flex={1}>
      <MainHeader title="About this Ebook" borderBottomWidth={0} />
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Text style={styles.text} size={FontSize.x16}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          elementum, sapien ac vehicula tincidunt, orci nunc tristique urna, nec
          lacinia nunc turpis sit amet justo. Nulla facilisi. Duis ut
          sollicitudin nunc. Nullam nec libero nec odio tincidunt, nec
          condimentum nunc pellentesque. Nullam nec libero nec odio tincidunt,
          nec condimentum nunc pellentesque. Nullam nec libero nec odio
          tincidunt, nec condimentum nunc pellentesque. Nullam nec libero nec
          odio tincidunt, nec condimentum nunc pellentesque. Nullam nec libero
          nec odio tincidunt, nec condimentum nunc pellentesque. Nullam nec
          libero nec odio tincidunt, nec condimentum ia nunc turpis sit amet
        </Text>
        <View alignItems="center">
          <Line width={'100%'} marginVertical={20} />
        </View>
        {/*  */}
        <View flexDirection="row">
          <View width={'50%'}>
            <Text font={FONT.BOLD} size={FontSize.x18}>
              Language
            </Text>
            <Text mTop={6}>Uzbek</Text>
          </View>
          <View width={'50%'}>
            <Text font={FONT.BOLD} size={FontSize.x18}>
              Age
            </Text>
            <Text mTop={6}>Ages 20 & up</Text>
          </View>
        </View>
        {/*  */}
        <View marginVertical={20} flexDirection="row">
          <View width={'50%'}>
            <Text font={FONT.BOLD} size={FontSize.x18}>
              Author
            </Text>
            <Text mTop={6}>Alisher Navoiy</Text>
          </View>
          <View width={'50%'}>
            <Text font={FONT.BOLD} size={FontSize.x18}>
              Publisher
            </Text>
            <Text mTop={6}>Publish company</Text>
          </View>
        </View>
        {/*  */}
        <View flexDirection="row">
          <View width={'50%'}>
            <Text font={FONT.BOLD} size={FontSize.x18}>
              Published on
            </Text>
            <Text mTop={6}>15 Dec 2015</Text>
          </View>
          <View width={'50%'}>
            <Text font={FONT.BOLD} size={FontSize.x18}>
              ISBN
            </Text>
            <Text mTop={6}>123123123123</Text>
          </View>
        </View>
        {/*  */}
        <View marginVertical={20} flexDirection="row">
          <View width={'50%'}>
            <Text font={FONT.BOLD} size={FontSize.x18}>
              Pages
            </Text>
            <Text mTop={6}>399</Text>
          </View>
          <View width={'50%'}>
            <Text font={FONT.BOLD} size={FontSize.x18}>
              Genre
            </Text>
            <Text mTop={6}>Fantacy, Magic</Text>
          </View>
        </View>
        <View flexDirection="row">
          <View width={'50%'}>
            <Text font={FONT.BOLD} size={FontSize.x18}>
              Purchased
            </Text>
            <Text mTop={6}>5k+</Text>
          </View>
          <View width={'50%'}>
            <Text font={FONT.BOLD} size={FontSize.x18}>
              Size
            </Text>
            <Text mTop={6}>9.7 MB</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutBook;

const aboutBookStyles = createStyleSheet(() => ({
  scrollview: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text: {
    lineHeight: 25,
  },
}));
