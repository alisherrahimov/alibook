import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {TextX} from '@components';
import {style} from '../../constants/style';
import {Colors, FontSize, WIDTH} from '@constants';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {LightIcon} from '@icons';

const colors = [
  //rainbow colors
  '#ff0000',
  '#ff7f00',
  '#ffff00',
  '#00ff00',
  '#0000ff',
  '#4b0082',
  '#9400d3',
];
const fonts = ['Arial', 'Times New Roman', 'Courier New', 'Verdana'];
const Helper = () => {
  const {styles, theme} = useStyles(styless);
  const height = useSharedValue(20);
  const fontSizeValue = useSharedValue(12);

  const PanGeture = Gesture.Pan()
    .onStart(ctx => {})
    .onChange(ctx => {
      if (ctx.x < WIDTH - 30 && ctx.x > 20) {
        height.value = withTiming(ctx.x, {duration: 10});
      }
    })
    .onEnd(ctx => {});
  const PanGetureX = Gesture.Pan()
    .onStart(ctx => {})
    .onChange(ctx => {
      if (ctx.x < WIDTH - 30 && ctx.x > 20) {
        height.value = withTiming(ctx.x, {duration: 10});
      }
    })
    .onEnd(ctx => {});

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: height.value,
    };
  }, []);
  const animatedStyleX = useAnimatedStyle(() => {
    return {
      width: fontSizeValue.value,
    };
  }, []);
  const onChangeFontFamily = (font: string) => {};

  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <TextX
          color={theme.colors.typography}
          size={FontSize.x18}
          weight={'bold'}>
          Brightness
        </TextX>
        <View style={styles.progressView}>
          <GestureDetector gesture={PanGeture}>
            <Animated.View style={[styles.dotView, animatedStyle]}>
              <LightIcon
                width={18}
                height={18}
                color={theme.colors.background}
              />
            </Animated.View>
          </GestureDetector>
        </View>
        <TextX
          color={theme.colors.typography}
          size={FontSize.x18}
          weight={'bold'}>
          BackGroundColor
        </TextX>
        <View style={styles.colorViewMain}>
          {colors.map((color, index) => (
            <TouchableOpacity style={styles.colorView(color, index)}>
              <View />
            </TouchableOpacity>
          ))}
        </View>
        <TextX
          color={theme.colors.typography}
          size={FontSize.x18}
          weight={'bold'}>
          Font
        </TextX>
        <View style={styles.colorViewMain}>
          {fonts.map((font, index) => (
            <TouchableOpacity
              onPress={() => onChangeFontFamily(font)}
              style={styles.btn(index)}>
              <TextX size={FontSize.x12}>{font}</TextX>
            </TouchableOpacity>
          ))}
        </View>
        <TextX
          color={theme.colors.typography}
          size={FontSize.x18}
          weight={'bold'}>
          FontSize
        </TextX>
        <View style={styles.progressView}>
          <GestureDetector gesture={PanGetureX}>
            <Animated.View style={[styles.dotView, animatedStyleX]}>
              <TextX color={Colors.white}>12</TextX>
            </Animated.View>
          </GestureDetector>
        </View>
      </View>
    </View>
  );
};

export default Helper;

const styless = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  mainView: {
    paddingHorizontal: 15,
  },
  colorView: (color: string, index: number) => ({
    width: WIDTH / 4 - 20,
    height: 40,
    backgroundColor: color,
    marginLeft: index === 0 ? 0 : index === 4 ? 0 : 10,
    marginVertical: 5,
    borderRadius: 8,
  }),
  colorViewMain: {
    ...style.row,
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  btn: (index: number) => ({
    backgroundColor: theme.colors.background,
    padding: 6,
    borderRadius: 8,
    marginLeft: index === 0 ? 0 : index === 4 ? 0 : 10,
    marginVertical: 10,
    borderWidth: 1,
  }),
  progressView: {
    height: 20,
    backgroundColor: Colors.progressBar,
    borderRadius: 50,
    marginVertical: 15,
    justifyContent: 'center',
    width: '100%',
  },
  dotView: {
    width: 20,
    height: 20,
    backgroundColor: Colors.orage,
    borderRadius: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 2,
  },
}));
