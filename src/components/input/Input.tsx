import React, {forwardRef} from 'react';
import {DimensionValue, TextInput, ViewStyle} from 'react-native';
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
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
  backgroundColor?: string;
  size?: number;
  font?: string;
  color?: string;
  placeholderTextColor?: string;
}
const Input = forwardRef(
  (
    {
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
      style,
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
      width,
      height,
      backgroundColor,
      size,
      font,
      color,
      placeholderTextColor,
    }: InputProps,
    ref: React.Ref<TextInput>,
  ) => {
    return (
      <TextInput
        ref={ref}
        placeholderTextColor={placeholderTextColor}
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
            width,
            height,
            backgroundColor,
            fontSize: size,
            fontFamily: font,
            color,
          },
          style,
        ]}
      />
    );
  },
);
export default Input;
