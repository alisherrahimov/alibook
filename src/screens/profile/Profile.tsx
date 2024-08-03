import {
  Header,
  Text,
  View,
  Image,
  Line,
  Switch,
  MenuButton,
  Touchable,
  Modal,
} from '@components';
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
import {ModalRef} from '../../components/modal/Modal';

const Profile = () => {
  const {theme} = useStyles();
  const modalRef = React.useRef<ModalRef>(null);

  const navigateRoute = (screen: string) => {
    navigate(screen);
  };

  return (
    <View flex={1} backgroundColor={theme.colors.background}>
      <Header title="Profile" />
      <ScrollView contentContainerStyle={{paddingHorizontal: 20}}>
        <Touchable onPress={() => navigateRoute('PersonalInfo')}>
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
        </Touchable>
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
          onPress={() => navigateRoute('Notification')}
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
          onPress={() => navigateRoute('Language')}
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
          onPress={() => {
            modalRef.current?.show();
          }}
          icon={<LogOutIcon width={28} height={28} color={Colors.xff6e79} />}
          iconBackgroundColor={theme.colors.notificationIconBackground}
          title="Log Out"
          rightIcon={<></>}
        />
      </ScrollView>
      <Modal height={200} ref={modalRef}>
        <Text
          color={Colors.xff6e79}
          textAlign="center"
          size={FontSize.x28}
          font={FONT.BOLD}>
          Log Out
        </Text>
        <Text pV={10} textAlign="center" size={FontSize.x16} font={FONT.BOLD}>
          Are you sure you want to log out?
        </Text>
        <View justifyContent="flex-end" flex={1}>
          <View
            marginTop={10}
            flexDirection="row"
            justifyContent="space-between">
            <Touchable
              onPress={() => modalRef.current?.hide()}
              alignItems="center"
              justifyContent="center"
              width={'48%'}
              backgroundColor={Colors.xfff8eb}
              borderRadius={20}
              height={40}>
              <Text font={FONT.BOLD} color={Colors.xf59202}>
                Cancel
              </Text>
            </Touchable>
            <Touchable
              onPress={() => {
                modalRef.current?.hide();
                navigateRoute('Login');
              }}
              backgroundColor={Colors.xf59202}
              borderRadius={20}
              alignItems="center"
              justifyContent="center"
              width={'48%'}
              height={40}>
              <Text font={FONT.BOLD} color={Colors.white}>
                Yes, Logout
              </Text>
            </Touchable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;
