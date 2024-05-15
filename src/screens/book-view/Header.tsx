import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import Animated, {SharedValue, useAnimatedStyle} from 'react-native-reanimated';

import {ChevronIcon, SearchIcon} from '@icons';
import {FontSize, MENU_HEIGHT, style} from '@constants';
import {TextX} from '@components';
interface HeaderProps {
  top_height: SharedValue<number>;
}

const Header: React.FC<HeaderProps> = ({top_height}) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: top_height.value,
    };
  });
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.view}>
        <View style={{...style.row}}>
          <TouchableOpacity style={styles.btn}>
            <ChevronIcon width={28} height={28} />
          </TouchableOpacity>
          <TextX weight={'bold'} size={FontSize.x18} cut style={styles.text}>
            Heade Header Header Header Header Headerr
          </TextX>
        </View>
        <TouchableOpacity style={styles.btn}>
          <SearchIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  text: {
    alignSelf: 'center',
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    ...style.center,
    borderRadius: 50,
  },
  view: {
    height: MENU_HEIGHT,
    alignItems: 'flex-end',
    // justifyContent: 'flex-start',
    ...style.row,
    borderBottomWidth: 0.2,
    borderBottomColor: 'gray',
    paddingHorizontal: 15,
    paddingBottom: 8,
    ...style.spaceBetween,
  },
});
