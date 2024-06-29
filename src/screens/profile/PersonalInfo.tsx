import {
  Header,
  Image,
  Input,
  Line,
  MainHeader,
  Text,
  Touchable,
  View,
} from '@components';
import {Colors, FontSize} from '@constants';
import {FONT} from '@fonts';
import {CameraIcon, ChevronIcon} from '@icons';
import React from 'react';
import {Keyboard, KeyboardAvoidingView, ScrollView} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const PersonalInfo = () => {
  const {styles, theme} = useStyles(personalStyles);
  return (
    <View flex={1}>
      <MainHeader title="Personal Info" />
      <KeyboardAvoidingView behavior="padding">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 20, paddingHorizontal: 20}}>
          <View alignItems="center">
            <Touchable>
              <Image
                source={{
                  uri: 'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8',
                }}
                width={120}
                height={120}
                borderRadius={100}
              />
              <View
                bottom={0}
                left={0}
                right={0}
                zIndex={0}
                opacity={0.5}
                overflow="hidden"
                alignItems="center"
                alignSelf="center"
                position="absolute"
                height={20}
              />
              <CameraIcon
                style={styles.icon}
                width={18}
                height={18}
                color={theme.colors.typography}
              />
            </Touchable>
          </View>
          <Line marginVertical={15} width={'100%'} />
          <View marginVertical={15}>
            <Text
              color={theme.colors.typography}
              size={FontSize.x14}
              font={FONT.BOLD}
              mLeft={5}>
              Full name
            </Text>
            <Input
              color={theme.colors.typography}
              size={FontSize.x16}
              placeholder="John Doe"
              width={'100%'}
              height={50}
              // backgroundColor="red"
              paddingLeft={5}
              font={FONT.BOLD}
              value="John Doe"
              style={styles.input}
            />
          </View>
          <View marginVertical={15}>
            <Text
              color={theme.colors.typography}
              size={FontSize.x14}
              font={FONT.BOLD}
              mLeft={5}>
              Username
            </Text>
            <Input
              color={theme.colors.typography}
              placeholder="John Doe"
              width={'100%'}
              height={50}
              value="John Doe"
              font={FONT.BOLD}
              size={FontSize.x16}
              // backgroundColor="red"
              paddingLeft={5}
              style={styles.input}
            />
          </View>
          <View marginVertical={15}>
            <Text
              color={theme.colors.typography}
              size={FontSize.x14}
              font={FONT.BOLD}
              mLeft={5}>
              Phone Number
            </Text>
            <Input
              color={theme.colors.typography}
              value="+998 99 964 24 12"
              placeholder="998 99 964 24 12"
              width={'100%'}
              height={50}
              font={FONT.BOLD}
              size={FontSize.x16}
              // backgroundColor="red"
              paddingLeft={5}
              style={styles.input}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PersonalInfo;
const personalStyles = createStyleSheet(theme => {
  return {
    input: {
      borderBottomColor: Colors.orage,
      borderBottomWidth: 0.5,
    },
    icon: {
      opacity: 10,
      zIndex: 10,
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center',
    },
  };
});
