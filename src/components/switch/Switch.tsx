import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {View, Touchable} from '@components';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  createStyleSheet,
  UnistylesRuntime,
  useStyles,
} from 'react-native-unistyles';
import {Colors} from '@constants';

interface SwitchProps {
  backgroundColor?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  circleColor: string;
}

const Switch: React.FC<SwitchProps> = ({
  circleColor,
  backgroundColor,
  borderRadius,
  height,
  width,
}) => {
  const {styles} = useStyles(switchStyles);
  const valueX = useSharedValue(0);
  const [isEnabled, setIsEnabled] = React.useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withTiming(valueX.value)}],
    };
  }, []);

  const toggleSwitch = () => {
    valueX.value = isEnabled ? 0 : 27.5;
    setIsEnabled(previousState => !previousState);
    UnistylesRuntime.setTheme(!isEnabled ? 'dark' : 'light');
  };

  return (
    <Touchable
      borderWidth={1}
      borderColor={Colors.orage}
      onPress={toggleSwitch}
      justifyContent="center"
      width={width || 60}
      height={height || 30}
      backgroundColor={backgroundColor || '#f1f1f1'}
      borderRadius={borderRadius || 20}>
      <Animated.View
        style={[styles.switch(circleColor || Colors.black), animatedStyle]}
      />
    </Touchable>
  );
};

export default Switch;

const switchStyles = createStyleSheet(() => ({
  switch: (color: string) => {
    return {
      marginLeft: 2.5,
      backgroundColor: color,
      height: 25,
      borderRadius: 50,
      width: 25,
    };
  },
}));
