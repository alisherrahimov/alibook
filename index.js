/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ReaderProvider} from '@epubjs-react-native/core';
import {SafeAreaProvider} from 'react-native-safe-area-context';
export default function Main() {
  return (
    <ReaderProvider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </ReaderProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
