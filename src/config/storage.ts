import {MMKV} from 'react-native-mmkv';

const storage = new MMKV({
  id: 'com.alibook',
  encryptionKey: 'alisher',
});

export const setStorege = (key: string, value: string) => {
  storage.set(key, value);
};

export const getStorege = (key: string) => {
  return storage.getString(key);
};
