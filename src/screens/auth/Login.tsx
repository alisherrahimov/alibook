import {
  Input,
  Text,
  Touchable,
  TouchableWithOutKeyBoard,
  View,
} from '@components';
import {Colors, FontSize} from '@constants';
import {FONT} from '@fonts';
import {navigate} from '@navigation';
import React, {useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';

import {createStyleSheet, useStyles} from 'react-native-unistyles';

const Login = () => {
  const {theme, styles} = useStyles(loginStyles);
  const [phone, setPhone] = useState<string>('');

  return (
    <View flex={1}>
      <TouchableWithOutKeyBoard>
        <KeyboardAvoidingView style={{flex: 1}} behavior="height">
          <View height={200} paddingHorizontal={20} justifyContent="flex-end">
            <Text size={FontSize.x28} font={FONT.BOLD}>
              Hello there 👋
            </Text>
            <Text size={FontSize.x16}>
              <Text size={FontSize.x20} font={FONT.BOLD}>
                ALIBOOK
              </Text>{' '}
              kitoblar do'koniga {'\n'}xush kelibsiz!
            </Text>
          </View>
          <View marginTop={80} paddingHorizontal={20}>
            <Text size={FontSize.x16} font={FONT.BOLD}>
              Telefon raqamingizni kiriting
            </Text>
            <Input
              onChangeText={text => {
                setPhone(text);
              }}
              value={formatPhoneNumber(phone)}
              placeholderTextColor="gray"
              color={theme.colors.typography}
              placeholder="998 99 964 24 12"
              width={'100%'}
              height={50}
              size={FontSize.x16}
              style={styles.input}
              keyboardType="decimal-pad"
              maxLength={16}
            />
          </View>
          <View flex={1} justifyContent="flex-end" padding={20}>
            <Touchable
              onPress={() => {
                navigate('Verification');
              }}
              borderRadius={16}
              backgroundColor={Colors.orage}
              height={60}
              width={'100%'}
              alignItems="center"
              justifyContent="center">
              <Text color={'white'} size={FontSize.x18} font={FONT.BOLD}>
                Kirish
              </Text>
            </Touchable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithOutKeyBoard>
    </View>
  );
};
// 998 99 964 24 12 like this
const formatPhoneNumber = (value: string) => {
  let cleaned = ('' + value).replace(/\D/g, '');

  // Limit to 12 digits
  if (cleaned.length > 12) {
    cleaned = cleaned.substring(0, 12);
  }

  // Format the cleaned string
  let formatted = cleaned;
  if (cleaned.length > 3) {
    formatted = cleaned.slice(0, 3) + ' ' + cleaned.slice(3);
  }
  if (cleaned.length > 5) {
    formatted = formatted.slice(0, 6) + ' ' + cleaned.slice(5);
  }
  if (cleaned.length > 8) {
    formatted = formatted.slice(0, 10) + ' ' + cleaned.slice(8);
  }
  if (cleaned.length > 10) {
    formatted = formatted.slice(0, 13) + ' ' + cleaned.slice(10);
  }
  return formatted;
};

export default Login;

const loginStyles = createStyleSheet(() => {
  return {
    input: {
      borderBottomColor: Colors.orage,
      borderBottomWidth: 1,
    },
  };
});
