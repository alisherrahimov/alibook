import {Header, Text, View, Image, Line, Switch, MenuButton} from '@components';
import {Colors, FontSize} from '@constants';
import {FONT} from '@fonts';
import {
  EyeFillIcon,
  HelpIcon,
  InfoIcon,
  LanguageFillIcon,
  LogOutIcon,
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
import {useStyles} from 'react-native-unistyles';
import {navigate} from '../../navigation/navigationRef';

const Profile = () => {
  const {theme} = useStyles();

  const navigateRoute = (screen: string) => {
    navigate(screen);
  };
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
            <Text
              color={theme.colors.typography}
              size={FontSize.x18}
              font={FONT.BOLD}
              mLeft={20}>
              John Doe
            </Text>
          </View>
          <PenIcon color={theme.colors.typography} />
        </View>
        <Line marginVertical={15} width={'100%'} height={0.5} />
        <MenuButton
          onPress={() => navigateRoute('Payment')}
          icon={<PaymentIcon color={Colors.x45dba7} />}
          iconBackgroundColor={theme.colors.securityIconBackground}
          title="Payment Methods"
          rightIcon={<RightRowIcon color={theme.colors.typography} />}
        />
        <Line marginVertical={15} width={'100%'} />
        <MenuButton
          icon={
            <ProfileFillIcon width={28} height={28} color={Colors.x3575fe} />
          }
          iconBackgroundColor={theme.colors.personalIconBackground}
          title="Personal Information"
          rightIcon={<RightRowIcon color={theme.colors.typography} />}
        />
        <MenuButton
          icon={<RingIcon width={28} height={28} color={Colors.xff6e79} />}
          iconBackgroundColor={theme.colors.notificationIconBackground}
          title="Notifications"
          rightIcon={<RightRowIcon color={theme.colors.typography} />}
        />
        <MenuButton
          icon={
            <SettingsFillIcon width={28} height={28} color={Colors.x7455ff} />
          }
          iconBackgroundColor={theme.colors.settingIconBackground}
          title="Settings"
          rightIcon={<RightRowIcon color={theme.colors.typography} />}
        />
        <MenuButton
          icon={
            <SecurityFillIcon width={28} height={28} color={Colors.x45dba7} />
          }
          iconBackgroundColor={theme.colors.securityIconBackground}
          title="Security"
          rightIcon={<RightRowIcon color={theme.colors.typography} />}
        />
        <MenuButton
          icon={
            <LanguageFillIcon width={28} height={28} color={Colors.xf99a0f} />
          }
          iconBackgroundColor={theme.colors.languageIconBackground}
          title="Language"
          rightIcon={<RightRowIcon color={theme.colors.typography} />}
        />
        <MenuButton
          icon={<EyeFillIcon width={28} height={28} color={Colors.x3575fe} />}
          iconBackgroundColor={theme.colors.settingIconBackground}
          title="Dark Mode"
          rightIcon={
            <Switch
              circleColor={Colors.orage}
              backgroundColor={theme.colors.languageIconBackground}
            />
          }
        />
        <Line marginVertical={15} width={'100%'} />
        <MenuButton
          icon={<HelpIcon width={28} height={28} color={Colors.x45dba7} />}
          iconBackgroundColor={theme.colors.securityIconBackground}
          title="Help Center"
          rightIcon={<RightRowIcon color={theme.colors.typography} />}
        />
        <MenuButton
          icon={<InfoIcon width={28} height={28} color={Colors.xf99a0f} />}
          iconBackgroundColor={theme.colors.languageIconBackground}
          title="About Alibook"
          rightIcon={<RightRowIcon color={theme.colors.typography} />}
        />
        <MenuButton
          icon={<LogOutIcon width={28} height={28} color={Colors.xff6e79} />}
          iconBackgroundColor={theme.colors.notificationIconBackground}
          title="Dark Mode"
          rightIcon={<></>}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;
