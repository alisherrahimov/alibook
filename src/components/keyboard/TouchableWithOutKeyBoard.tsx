import React, {PropsWithChildren, useCallback} from 'react';
import {Keyboard, TouchableWithoutFeedback, ViewStyle} from 'react-native';

interface TouchableWithOutKeyBoardProps extends PropsWithChildren {
  style?: ViewStyle;
}

const TouchableWithOutKeyBoard: React.FC<TouchableWithOutKeyBoardProps> = ({
  children,
  style,
}) => {
  const onPress = useCallback(() => {
    Keyboard.dismiss();
  }, []);
  return (
    <TouchableWithoutFeedback style={[{flex: 1}, style]} onPress={onPress}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default TouchableWithOutKeyBoard;
