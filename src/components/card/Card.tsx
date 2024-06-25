import {StyleSheet} from 'react-native';
import React from 'react';
import {Text, Image, Touchable, View} from '@components';
import {FontSize} from '@constants';
import {FONT} from '@fonts';
import {StarIcon} from '@icons';
import {useStyles} from 'react-native-unistyles';

const CARD_WIDTH = 150;
const CARD_HEIGHT = 270;
const IMAGE_HEIGHT = 200;

interface CardProps {
  image: string;
  title: string;
  price: number;
  rate: number;
}

const Card: React.FC<CardProps> = ({image, price, rate, title}) => {
  const {theme} = useStyles();
  return (
    <Touchable borderRadius={14} height={CARD_HEIGHT} width={CARD_WIDTH}>
      <Image
        source={{
          uri: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
        }}
        width={CARD_WIDTH}
        height={IMAGE_HEIGHT}
        resizeMode="cover"
        borderRadius={14}
      />
      <Text
        color={theme.colors.typography}
        size={FontSize.x14}
        font={FONT.BOLD}
        mV={6}>
        {title.slice(0, 35) + '...'}
      </Text>
      <View flexDirection="row" alignItems="center">
        <StarIcon
          color={theme.colors.bottomTabInactiveText}
          width={20}
          height={20}
        />
        <Text
          color={theme.colors.bottomTabInactiveText}
          size={FontSize.x12}
          mLeft={4}
          font={FONT.BOLD}>
          {rate.toFixed(1)}
        </Text>
        <Text
          color={theme.colors.bottomTabInactiveText}
          size={FontSize.x12}
          font={FONT.BOLD}
          mH={8}>
          $ {price}
        </Text>
      </View>
    </Touchable>
  );
};

export default Card;

const styles = StyleSheet.create({});
