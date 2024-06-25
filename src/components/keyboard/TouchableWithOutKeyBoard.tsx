import React, {PropsWithChildren, useCallback} from 'react';
import {Keyboard, TouchableWithoutFeedback, ViewStyle} from 'react-native';

interface TouchableWithOutKeyBoardProps extends PropsWithChildren {
  style?: ViewStyle;
  onPress: () => void;
}

const TouchableWithOutKeyBoard: React.FC<TouchableWithOutKeyBoardProps> = ({
  children,
  style,
}) => {
  const OnPress = useCallback(() => {
    Keyboard.dismiss();
  }, []);
  return (
    <TouchableWithoutFeedback style={[{flex: 1}, style]} onPress={OnPress}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default TouchableWithOutKeyBoard;
