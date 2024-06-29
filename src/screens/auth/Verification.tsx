import {
  MainHeader,
  Text,
  Touchable,
  TouchableWithOutKeyBoard,
  View,
} from '@components';
import {Colors, FontSize} from '@constants';
import {FONT} from '@fonts';
import {navigate} from '@navigation';
import React, {useRef, useState} from 'react';
import {KeyboardAvoidingView, TextInput} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const Verification = () => {
  const {styles} = useStyles(verificationStyles);
  const ref1 = useRef<TextInput>(null);
  const ref2 = useRef<TextInput>(null);
  const ref3 = useRef<TextInput>(null);
  const ref4 = useRef<TextInput>(null);
  const [code, setCode] = useState<string>('');

  return (
    <View flex={1}>
      <MainHeader title="Verification" borderBottomWidth={0} />
      <TouchableWithOutKeyBoard>
        <KeyboardAvoidingView style={styles.key} behavior="height">
          <View height={200} paddingHorizontal={20} justifyContent="center">
            <Text size={FontSize.x28} font={FONT.BOLD}>
              Siz sms xabar {'\n'}qabul qilasiz! 📩
            </Text>
          </View>
          <View
            flexDirection="row"
            justifyContent="space-between"
            paddingHorizontal={20}>
            <TextInput
              ref={ref1}
              keyboardType="number-pad"
              style={styles.input}
              maxLength={1}
              onChangeText={text => {
                if (text.length === 0) {
                  ref1.current?.focus();
                  setCode('');
                }
                if (text.length > 0) {
                  ref2.current?.focus();
                }
                setCode(text);
              }}
            />
            <TextInput
              ref={ref2}
              keyboardType="number-pad"
              style={styles.input}
              maxLength={1}
              onChangeText={text => {
                if (text.length === 0) {
                  ref1.current?.focus();
                  setCode(code.slice(0, 1));
                }
                if (text.length > 0) {
                  ref3.current?.focus();
                }
                setCode(code + text);
              }}
            />
            <TextInput
              ref={ref3}
              keyboardType="number-pad"
              style={styles.input}
              maxLength={1}
              onChangeText={text => {
                if (text.length === 0) {
                  ref2.current?.focus();
                  setCode(code.slice(0, 2));
                }
                if (text.length > 0) {
                  ref4.current?.focus();
                }
                setCode(code + text);
              }}
            />
            <TextInput
              ref={ref4}
              keyboardType="number-pad"
              style={styles.input}
              maxLength={1}
              onChangeText={text => {
                if (text.length === 0) {
                  ref3.current?.focus();
                  setCode(code.slice(0, 3));
                }
                setCode(code + text);
              }}
            />
          </View>
          <View
            paddingVertical={15}
            paddingHorizontal={20}
            alignItems="flex-end">
            <Touchable>
              <Text size={FontSize.x14} color={Colors.orage} font={FONT.BOLD}>
                Qayta yuborish
              </Text>
            </Touchable>
          </View>
          <View flex={1} justifyContent="flex-end" padding={20}>
            <Touchable
              onPress={() => {
                navigate('BottomTab');
              }}
              borderRadius={16}
              backgroundColor={Colors.orage}
              height={60}
              width={'100%'}
              alignItems="center"
              justifyContent="center">
              <Text color={'white'} size={FontSize.x18} font={FONT.BOLD}>
                Tasdiqlash
              </Text>
            </Touchable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithOutKeyBoard>
    </View>
  );
};

export default Verification;
const verificationStyles = createStyleSheet(theme => {
  return {
    input: {
      width: 70,
      height: 70,
      backgroundColor: theme.colors.lineColor,
      borderRadius: 20,
      textAlign: 'center',
      fontFamily: FONT.BOLD,
      fontSize: FontSize.x28,
      color: theme.colors.typography,
    },
    key: {
      flex: 1,
    },
  };
});
