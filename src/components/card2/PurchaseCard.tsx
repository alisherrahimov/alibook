import React from 'react';
import {View, Text, Touchable, Image} from '@components';
import {ThreeDotIcon} from '@icons';
import {FONT} from '@fonts';
import {FontSize} from '@constants';
import {useStyles} from 'react-native-unistyles';
const PurchaseCard: React.FC = () => {
  const {theme} = useStyles();
  return (
    <View marginVertical={10} flexDirection="row">
      <Touchable>
        <Image
          width={100}
          height={120}
          borderRadius={16}
          source={{
            uri: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
          }}
        />
      </Touchable>
      <View flex={1} justifyContent="space-between" flexDirection="row">
        <View width={'90%'} marginLeft={8}>
          <Text
            color={theme.colors.typography}
            size={FontSize.x16}
            font={FONT.BOLD}>
            Product Name
          </Text>
          <Text color={theme.colors.typography}>Price</Text>
        </View>
        <Touchable justifyContent="center">
          <ThreeDotIcon color={theme.colors.typography} />
        </Touchable>
      </View>
    </View>
  );
};

export default PurchaseCard;
