import React from 'react';
import {View, Touchable, Text} from '@components';
import {useStyles} from 'react-native-unistyles';
import {ChevronIcon} from '@icons';
import {FONT} from '@fonts';
import {FontSize} from '@constants';
import {navigationRef} from '../../navigation/navigationRef';
import {Platform} from 'react-native';
interface MainHeaderProps {
  title: string;
  icons?: React.ReactNode | React.ReactNode[];
}
const MainHeader: React.FC<MainHeaderProps> = ({title, icons}) => {
  const {theme} = useStyles();
  return (
    <View
      backgroundColor={theme.colors.background}
      alignItems="flex-start"
      justifyContent="flex-end"
      style={{borderBottomWidth: 0.3}}
      borderColor={theme.colors.bottomTabInactiveText}
      height={Platform.OS === 'ios' ? 110 : 90}>
      <View
        alignItems="center"
        justifyContent="space-between"
        width={'100%'}
        paddingVertical={15}
        paddingHorizontal={20}
        flexDirection="row">
        <View alignItems="center" flexDirection="row">
          <Touchable
            onPress={() => {
              navigationRef.goBack();
            }}>
            <ChevronIcon
              color={theme.colors.typography}
              width={28}
              height={28}
            />
          </Touchable>
          <Text
            color={theme.colors.typography}
            mLeft={12}
            size={FontSize.x18}
            font={FONT.BOLD}>
            {title}
          </Text>
        </View>
        {icons}
      </View>
    </View>
  );
};

export default MainHeader;
