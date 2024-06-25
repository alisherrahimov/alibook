import React, {PropsWithChildren} from 'react';
import {DimensionValue, Text, TextStyle} from 'react-native';
import {Colors, FontSize} from '@constants';
import {FONT} from '@fonts';

interface TextProps extends PropsWithChildren {
  color?: string | Colors;
  size?: number;
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 'ultralight'
    | 'thin'
    | 'light'
    | 'medium';
  style?: TextStyle;
  cut?: boolean;
  mTop?: DimensionValue | undefined;
  mBottom?: DimensionValue | undefined;
  mLeft?: DimensionValue | undefined;
  mRight?: DimensionValue | undefined;
  pTop?: DimensionValue | undefined;
  pBottom?: DimensionValue | undefined;
  pLeft?: DimensionValue | undefined;
  pRight?: DimensionValue | undefined;
  pH?: DimensionValue | undefined;
  pV?: DimensionValue | undefined;
  mH?: DimensionValue | undefined;
  mV?: DimensionValue | undefined;
  font?: FONT;
}

const TextX: React.FC<TextProps> = ({
  color,
  size = FontSize.x14,
  style,
  weight,
  children,
  cut,
  mBottom,
  mLeft,
  mRight,
  mTop,
  pBottom,
  pLeft,
  pRight,
  pTop,
  pH,
  pV,
  mH,
  mV,
  font = FONT.MEDIUM,
}) => {
  return (
    <Text
      style={{
        color,
        marginLeft: mLeft,
        fontSize: size,
        fontWeight: weight,
        marginTop: mTop,
        marginBottom: mBottom,
        marginRight: mRight,
        paddingTop: pTop,
        paddingBottom: pBottom,
        paddingLeft: pLeft,
        paddingRight: pRight,
        paddingHorizontal: pH,
        paddingVertical: pV,
        marginHorizontal: mH,
        marginVertical: mV,
        fontFamily: font,
        ...style,
      }}>
      {children!.toString().length > 20 && cut
        ? children!.toString().substring(0, 20) + '...'
        : children}
    </Text>
  );
};

export default TextX;
