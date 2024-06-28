import React from 'react';
import {View, Text} from '@components';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {FONT} from '@fonts';
import {FontSize} from '@constants';
import {Platform} from 'react-native';
type HeaderProps = {
  title: string;
  buttons?: React.ReactNode | React.ReactNode[];
};
const Header: React.FC<HeaderProps> = ({title, buttons}) => {
  const {theme} = useStyles(headerStyles);
  return (
    <View
      height={Platform.OS === 'ios' ? 110 : 90}
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

const headerStyles = createStyleSheet(() => {
  return {
    flex: {
      flex: 1,
    },
  };
});
