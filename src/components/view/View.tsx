import React, {PropsWithChildren} from 'react';
import {DimensionValue, ViewStyle, View as ViewX} from 'react-native';
interface ViewProps extends PropsWithChildren {
  style?: ViewStyle;
  flex?: number;
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
  zIndex?: number;
  shadowColor?: string;
  shadowOffset?: {width: number; height: number};
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
  overflow?: 'visible' | 'hidden' | 'scroll';
  alignSelf?: 'auto' | 'center' | 'flex-start' | 'flex-end' | 'stretch';
  flexShrink?: number;
  flexGrow?: number;
  flexBasis?: DimensionValue | undefined;
  aspectRatio?: number;
  opacity?: number;
}
const View: React.FC<ViewProps> = ({
  children,
  style,
  flex,
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
  zIndex,
  shadowColor,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  elevation,
  overflow,
  alignSelf,
  flexShrink,
  flexGrow,
  flexBasis,
  aspectRatio,
  opacity,
}) => {
  const viewStyle: ViewStyle = {
    flex,
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
    zIndex,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    elevation,
    overflow,
    alignSelf,
    flexShrink,
    flexGrow,
    flexBasis,
    aspectRatio,
    opacity,
  };
  return <ViewX style={[viewStyle, style]}>{children}</ViewX>;
};

export default View;
