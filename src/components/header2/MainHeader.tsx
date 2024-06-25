import React from 'react';
import {View, Touchable, Text} from '@components';
import {useStyles} from 'react-native-unistyles';
import {ChevronIcon} from '@icons';
import {FONT} from '@fonts';
import {FontSize} from '@constants';
interface MainHeaderProps {
  title: string;
  icons?: React.ReactNode | React.ReactNode[];
}
const MainHeader: React.FC<MainHeaderProps> = ({title, icons}) => {
  const {theme} = useStyles();
  return (
    <View
      alignItems="flex-start"
      justifyContent="flex-end"
      style={{borderBottomWidth: 0.3}}
      borderColor={theme.colors.bottomTabInactiveText}
      height={110}>
      <View
        alignItems="center"
        justifyContent="space-between"
        width={'100%'}
        paddingVertical={15}
        paddingHorizontal={20}
        flexDirection="row">
        <View alignItems="center" flexDirection="row">
          <Touchable>
            <ChevronIcon width={28} height={28} />
          </Touchable>
          <Text mLeft={12} size={FontSize.x18} font={FONT.BOLD}>
            {title}
          </Text>
        </View>
        {icons}
      </View>
    </View>
  );
};

export default MainHeader;
