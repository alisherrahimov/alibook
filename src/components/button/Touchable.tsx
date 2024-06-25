import React, {PropsWithChildren} from 'react';
import {DimensionValue, TouchableOpacity, ViewStyle} from 'react-native';
interface TouchableProps extends PropsWithChildren {
  style?: ViewStyle;
  onPress?: () => void;
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
  backgroundColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  padding?: number;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  flexDirection?: 'row' | 'column';
  flexWrap?: 'wrap' | 'nowrap';
  position?: 'absolute' | 'relative';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}
const Touchable: React.FC<TouchableProps> = ({
  children,
  style,
  onPress,
  width,
  height,
  backgroundColor,
  borderRadius,
  borderWidth,
  borderColor,
  padding,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginHorizontal,
  marginVertical,
  paddingHorizontal,
  paddingVertical,
  justifyContent,
  alignItems,
  flexDirection,
  flexWrap,
  position,
  top,
  bottom,
  left,
  right,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        style,
        {
          width,
          height,
          backgroundColor,
          borderRadius,
          borderWidth,
          borderColor,
          padding,
          margin,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
          paddingTop,
          paddingBottom,
          paddingLeft,
          paddingRight,
          marginHorizontal,
          marginVertical,
          paddingHorizontal,
          paddingVertical,
          justifyContent,
          alignItems,
          flexDirection,
          flexWrap,
          position,
          top,
          bottom,
          left,
          right,
        },
      ]}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;
