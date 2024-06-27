import React from 'react';
import {View} from '@components';
import {useStyles} from 'react-native-unistyles';
import {DimensionValue} from 'react-native';

interface LineProps {
  color?: string;
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
  marginHorizontal?: number;
  marginVertical?: number;
}

const Line: React.FC<LineProps> = ({
  color,
  width,
  height,
  marginHorizontal,
  marginVertical,
}) => {
  const {theme} = useStyles();
  return (
    <View
      width={width || '90%'}
      height={height || 1}
      backgroundColor={color || theme.colors.lineColor}
      marginHorizontal={marginHorizontal}
      marginVertical={marginVertical}
    />
  );
};
export default Line;
