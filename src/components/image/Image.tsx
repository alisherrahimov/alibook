import {
  StyleSheet,
  Image as ImageX,
  Text,
  View,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
interface ImageProps {
  source: ImageSourcePropType;
  width?: number;
  height?: number;
  borderRadius?: number;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}
const Image: React.FC<ImageProps> = ({
  source,
  borderRadius,
  height,
  resizeMode,
  width,
}) => {
  return (
    <ImageX
      source={source}
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        resizeMode: resizeMode,
      }}
    />
  );
};

export default Image;

const styles = StyleSheet.create({});
