import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {Reader, useReader} from '@epubjs-react-native/core';
import {useFileSystem} from '@epubjs-react-native/file-system';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {MENU_HEIGHT} from '@constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface RenderEpubProps {
  bottom_height: SharedValue<number>;
  top_height: SharedValue<number>;
  scale: SharedValue<number>;
}

const RenderEpub: React.FC<RenderEpubProps> = ({
  bottom_height,
  top_height,
  scale,
}) => {
  const {goToLocation, changeFontSize, changeFontFamily} = useReader();
  const {top, bottom} = useSafeAreaInsets();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });
  console.log(top + MENU_HEIGHT);

  const onDoublePress = () => {
    bottom_height.value = withTiming(
      bottom_height.value === 0 ? bottom + MENU_HEIGHT : 0,
    );
    top_height.value = withTiming(
      top_height.value === 0 ? top + MENU_HEIGHT : 0,
    );
    scale.value = withTiming(scale.value === 1 ? 0.95 : 1);
  };

  return (
    <TouchableWithoutFeedback
      onPress={onDoublePress}
      style={[styles.container]}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <Reader
          flow="scrolled-continuous"
          src={
            'https://github.com/IDPF/epub3-samples/releases/download/20230704/childrens-literature.epub'
          }
          fileSystem={useFileSystem}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default RenderEpub;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
