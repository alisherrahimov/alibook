import React from 'react';
import {TextInput, ViewStyle} from 'react-native';
interface InputProps {
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  editable?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  autoFocus?: boolean;
  blurOnSubmit?: boolean;
  clearButtonMode?: 'never' | 'while-editing' | 'unless-editing' | 'always';
  style?: ViewStyle;
  padding?: number;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  flexDirection?: 'row' | 'column';
  flexWrap?: 'wrap' | 'nowrap';
}
const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  keyboardType,
  maxLength,
  multiline,
  numberOfLines,
  editable,
  autoCapitalize,
  autoCorrect,
  autoFocus,
  blurOnSubmit,
  clearButtonMode,
  padding,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginHorizontal,
  marginVertical,
  paddingHorizontal,
  paddingVertical,
  justifyContent,
  alignItems,
  flexDirection,
  flexWrap,
  style,
}) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      maxLength={maxLength}
      multiline={multiline}
      numberOfLines={numberOfLines}
      editable={editable}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      autoFocus={autoFocus}
      blurOnSubmit={blurOnSubmit}
      clearButtonMode={clearButtonMode}
      style={[
        {
          padding,
          margin,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
          paddingTop,
          paddingBottom,
          paddingLeft,
          paddingRight,
          marginHorizontal,
          marginVertical,
          paddingHorizontal,
          paddingVertical,
          justifyContent,
          alignItems,
          flexDirection,
          flexWrap,
        },
        style,
      ]}
    />
  );
};
export default Input;
