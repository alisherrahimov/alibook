import {
  Input,
  Line,
  Text,
  Touchable,
  TouchableWithOutKeyBoard,
  View,
} from '@components';
import {Colors, FontSize, style} from '@constants';
import {FONT} from '@fonts';

import {ChevronIcon, XIcon} from '@icons';
import {navigationRef} from '@navigation';
import React, {useEffect, useRef, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const SearchBook = () => {
  const inputRef = useRef<TextInput>(null);
  const [text, setText] = useState<string>('');
  const {theme, styles} = useStyles(searchBookStyles);

  return (
    <View flex={1}>
      <View
        height={Platform.OS === 'ios' ? 110 : 90}
        alignItems="flex-start"
        justifyContent="flex-end"
        paddingHorizontal={20}>
        <View alignItems="center" width={'100%'} flexDirection="row">
          <Touchable
            onPress={() => {
              navigationRef.goBack();
            }}>
            <ChevronIcon
              color={theme.colors.typography}
              width={28}
              height={28}
            />
          </Touchable>
          <Input
            autoFocus={true}
            ref={inputRef}
            placeholderTextColor="gray"
            placeholder="Search for a book"
            value={text}
            onChangeText={val => {
              setText(val);
            }}
            style={styles.input}
            height={50}
            width={'90%'}
          />
        </View>
        <Touchable
          onPress={() => {
            setText('');
          }}
          position="absolute"
          right={30}
          bottom={13}
          justifyContent="flex-end">
          <XIcon color={theme.colors.typography} />
        </Touchable>
      </View>
      <TouchableWithOutKeyBoard>
        <KeyboardAvoidingView style={style.flex}>
          <View paddingHorizontal={20} paddingVertical={20}>
            <Text size={FontSize.x20} font={FONT.BOLD}>
              Previous Search
            </Text>
          </View>
          <View alignItems="center">
            <Line />
          </View>
          <ScrollView>
            {Array.from({length: 10}).map((_, index) => (
              <View key={index} paddingHorizontal={20} paddingVertical={5}>
                <Touchable
                  flexDirection="row"
                  alignItems="center"
                  height={35}
                  justifyContent="space-between">
                  <Text>Book {index + 1}</Text>
                  <Touchable
                    height={35}
                    width={35}
                    alignItems="center"
                    justifyContent="center">
                    <XIcon color={theme.colors.typography} />
                  </Touchable>
                </Touchable>
              </View>
            ))}
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithOutKeyBoard>
    </View>
  );
};

export default SearchBook;

const searchBookStyles = createStyleSheet(theme => ({
  input: {
    borderRadius: 20,
    backgroundColor: theme.colors.background,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: Colors.orage,
    paddingLeft: 15,
    color: theme.colors.typography,
    fontFamily: FONT.REGULAR,
  },
}));
