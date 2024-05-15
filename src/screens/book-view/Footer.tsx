import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

import Animated, {SharedValue, useAnimatedStyle} from 'react-native-reanimated';

import {style} from '../../constants/style';
import {ChaptersIcon, MoonIcon, SettingsIcon} from '@icons';
import {Colors, FontSize, MENU_HEIGHT} from '@constants';
import {TextX} from '@components';

interface FooterProps {
  bottom_height: SharedValue<number>;
}

const Footer: React.FC<FooterProps> = ({bottom_height}) => {
  // const {toc, section, theme} = useReader();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: bottom_height.value,
    };
  });
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.view}>
        <TouchableOpacity style={styles.btn}>
          <ChaptersIcon width={26} height={26} />
          <TextX mTop={2} color={Colors.titleColor} size={FontSize.x10}>
            Chapters
          </TextX>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <MoonIcon width={26} height={26} />
          <TextX mTop={2} color={Colors.titleColor} size={FontSize.x10}>
            Night Mode
          </TextX>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <SettingsIcon width={26} height={26} />
          <TextX mTop={2} color={Colors.titleColor} size={FontSize.x10}>
            Settings
          </TextX>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopWidth: 0.2,
    borderTopColor: 'gray',
  },
  view: {
    ...style.row,
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    height: MENU_HEIGHT,
    ...style.spaceEvenly,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
