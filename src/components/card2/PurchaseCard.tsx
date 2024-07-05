import React from 'react';
import {View, Text, Touchable, Image} from '@components';
import {StarIcon, ThreeDotIcon} from '@icons';
import {FONT} from '@fonts';
import {FontSize} from '@constants';
import {useStyles} from 'react-native-unistyles';
const PurchaseCard: React.FC = () => {
  const {theme} = useStyles();
  return (
    <Touchable marginVertical={10} flexDirection="row">
      <Image
        width={100}
        height={120}
        borderRadius={16}
        source={{
          uri: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
        }}
      />

      <View
        flex={1}
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row">
        <View width={'90%'} marginLeft={8}>
          <Text
            color={theme.colors.typography}
            size={FontSize.x16}
            font={FONT.BOLD}>
            {/* // book name */}
            ALisher Navoiy hayoti va ijodi asdsad
          </Text>

          <View marginVertical={10} flexDirection="row" alignItems="center">
            <StarIcon width={16} height={16} />
            <Text mLeft={5} size={FontSize.x12} color={'gray'}>
              4.9
            </Text>
          </View>
          <Text mLeft={5} size={FontSize.x14} color={'gray'}>
            $ 9.99
          </Text>
        </View>

        <Touchable
          width={30}
          height={30}
          alignItems="center"
          justifyContent="center">
          <ThreeDotIcon color={theme.colors.typography} />
        </Touchable>
      </View>
    </Touchable>
  );
};

export default PurchaseCard;
