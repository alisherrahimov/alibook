import React from 'react';
import Touchable from '../button/Touchable';
import View from '../view/View';
import {Text} from '@components';
import {FontSize} from '@constants';
import {FONT} from '@fonts';
import {useStyles} from 'react-native-unistyles';

interface MenuButtonProps {
  icon: React.ReactNode;
  title: string;
  rightIcon?: React.ReactNode;
  iconBackgroundColor: string;
  onPress?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  icon,
  iconBackgroundColor,
  title,
  rightIcon,
  onPress,
}) => {
  const {theme} = useStyles();
  return (
    <Touchable onPress={onPress} marginVertical={4}>
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <View flexDirection="row" alignItems="center">
          <View
            borderRadius={50}
            width={60}
            height={60}
            backgroundColor={iconBackgroundColor}
            alignItems="center"
            justifyContent="center">
            {icon}
          </View>
          <Text
            color={theme.colors.typography}
            size={FontSize.x18}
            font={FONT.BOLD}
            mLeft={20}>
            {title}
          </Text>
        </View>
        {rightIcon}
      </View>
    </Touchable>
  );
};

export default MenuButton;
