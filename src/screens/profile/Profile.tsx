import {Header, Text, View, Image, Line, Touchable} from '@components';
import {Colors, FontSize} from '@constants';
import {FONT} from '@fonts';
import {
  EyeFillIcon,
  LanguageFillIcon,
  PaymentIcon,
  PenIcon,
  ProfileFillIcon,
  RightRowIcon,
  RingIcon,
  SecurityFillIcon,
  SettingsFillIcon,
} from '@icons';
import React from 'react';
import {ScrollView} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const rows = [
  {
    id: 1,
    title: 'Personal Information',
    imageIcon: <ProfileFillIcon width={28} height={28} />,
    rightIcon: <RightRowIcon />,
  },
  {
    id: 2,
    title: 'Notifications',
    imageIcon: <RingIcon width={28} height={28} />,
    rightIcon: <RightRowIcon />,
  },
  {
    id: 3,
    title: 'Settings',
    imageIcon: <SettingsFillIcon width={28} height={28} />,
    rightIcon: <RightRowIcon />,
  },
  {
    id: 4,
    title: 'Security',
    imageIcon: <SecurityFillIcon width={28} height={28} />,
    rightIcon: <RightRowIcon />,
  },
  {
    id: 5,
    title: 'Language',
    imageIcon: <LanguageFillIcon width={28} height={28} />,
    rightIcon: <RightRowIcon />,
  },
  {
    id: 6,
    title: 'Dark Mode',
    imageIcon: <EyeFillIcon width={28} height={28} />,
    rightIcon: <RightRowIcon />,
  },
  {
    id: 7,
    title: 'Help Center',
    imageIcon: <EyeFillIcon width={28} height={28} />,
    rightIcon: <RightRowIcon />,
  },
  {
    id: 8,
    title: 'About Alibook',
    imageIcon: <EyeFillIcon width={28} height={28} />,
    rightIcon: <RightRowIcon />,
  },
  {
    id: 9,
    title: 'Log Out',
    imageIcon: <EyeFillIcon width={28} height={28} />,
    rightIcon: <RightRowIcon />,
  },
];

const Profile = () => {
  const {theme} = useStyles();
  return (
    <View flex={1} backgroundColor={theme.colors.background}>
      <Header title="Profile" />
      <ScrollView contentContainerStyle={{paddingHorizontal: 20}}>
        <View
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <View flexDirection="row" alignItems="center">
            <Image
              width={60}
              height={60}
              borderRadius={50}
              source={{
                uri: 'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8',
              }}
            />
            <Text size={FontSize.x18} font={FONT.BOLD} mLeft={20}>
              John Doe
            </Text>
          </View>
          <PenIcon />
        </View>

        <Line marginVertical={15} width={'100%'} />
        <Touchable>
          <View
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            <View flexDirection="row" alignItems="center">
              <View
                borderRadius={50}
                width={60}
                height={60}
                alignItems="center"
                backgroundColor="#F5F5F5"
                justifyContent="center">
                <PaymentIcon color={Colors.x45dba7} />
              </View>
              <Text size={FontSize.x18} font={FONT.BOLD} mLeft={20}>
                Payment Methods
              </Text>
            </View>
            <RightRowIcon />
          </View>
        </Touchable>
        <Line marginVertical={15} width={'100%'} />
        {rows.slice(0, 6).map((val, index) => {
          return (
            <Touchable marginVertical={8} key={index}>
              <View
                key={index}
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center">
                <View flexDirection="row" alignItems="center">
                  <View
                    borderRadius={50}
                    width={60}
                    height={60}
                    alignItems="center"
                    backgroundColor="#F5F5F5"
                    justifyContent="center">
                    {val.imageIcon}
                  </View>
                  <Text size={FontSize.x18} font={FONT.BOLD} mLeft={20}>
                    {val.title}
                  </Text>
                </View>
                {val.rightIcon}
              </View>
            </Touchable>
          );
        })}
        <Line marginVertical={15} width={'100%'} />
        {rows.slice(6).map((val, index) => {
          return (
            <Touchable marginVertical={8} key={index}>
              <View
                key={index}
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center">
                <View flexDirection="row" alignItems="center">
                  <View
                    borderRadius={50}
                    width={60}
                    height={60}
                    alignItems="center"
                    backgroundColor="#F5F5F5"
                    justifyContent="center">
                    {val.imageIcon}
                  </View>
                  <Text size={FontSize.x18} font={FONT.BOLD} mLeft={20}>
                    {val.title}
                  </Text>
                </View>
                {val.rightIcon}
              </View>
            </Touchable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Profile;

const profileStyles = createStyleSheet(theme => {
  return {
    image: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
  };
});
