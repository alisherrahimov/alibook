import {
  StyleSheet,
  Image as ImageX,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';
import React from 'react';
interface ImageProps {
  source: ImageSourcePropType;
  width?: number;
  height?: number;
  borderRadius?: number;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  style?: ImageStyle;
}
const Image: React.FC<ImageProps> = ({
  source,
  borderRadius,
  height,
  resizeMode,
  width,
  style,
}) => {
  return (
    <ImageX
      source={source}
      style={[
        {
          width: width,
          height: height,
          borderRadius: borderRadius,
          resizeMode: resizeMode,
        },
        style,
      ]}
    />
  );
};

export default Image;
