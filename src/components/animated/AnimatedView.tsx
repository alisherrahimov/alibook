import React, {PropsWithChildren} from 'react';
import Animated, {
  BaseAnimationBuilder,
  EntryExitAnimationFunction,
} from 'react-native-reanimated';
import {ReanimatedKeyframe} from 'react-native-reanimated/lib/typescript/reanimated2/layoutReanimation/animationBuilder/Keyframe';
type EntryOrExitLayoutType =
  | BaseAnimationBuilder
  | typeof BaseAnimationBuilder
  | EntryExitAnimationFunction
  | ReanimatedKeyframe;
interface AnimatedViewProps extends PropsWithChildren {
  exiting: EntryOrExitLayoutType;
  entering: EntryOrExitLayoutType;
}

const AnimatedView: React.FunctionComponent<AnimatedViewProps> = ({
  exiting,
  children,
  entering,
}) => {
  return (
    <Animated.View entering={entering} exiting={exiting}>
      {children}
    </Animated.View>
  );
};

export default AnimatedView;
