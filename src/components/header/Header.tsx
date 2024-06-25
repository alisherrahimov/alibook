import React from 'react';
import {View, Text, Touchable} from '@components';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {NotificationIcon, SearchIcon} from '@icons';
import {FONT} from '@fonts';
import {FontSize} from '@constants';
type HeaderProps = {
  title: string;
  buttons?: React.ReactNode | React.ReactNode[];
};
const Header: React.FC<HeaderProps> = ({title, buttons}) => {
  const {styles, theme} = useStyles(headerStyles);
  return (
    <View
      height={110}
      alignItems="flex-start"
      justifyContent="flex-end"
      backgroundColor={theme.colors.background}>
      <View
        marginVertical={10}
        paddingHorizontal={20}
        width={'100%'}
        flexDirection="row"
        justifyContent="space-between">
        <Text
          color={theme.colors.typography}
          size={FontSize.x22}
          font={FONT.BOLD}>
          {title}
        </Text>
        <View justifyContent="space-between" flexDirection="row">
          {buttons}
        </View>
      </View>
    </View>
  );
};

export default Header;

const headerStyles = createStyleSheet(theme => {
  return {
    flex: {
      flex: 1,
    },
  };
});
