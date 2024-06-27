import {Platform, StatusBar} from 'react-native';
import React from 'react';

import './src/config/unistyles';
import {Navigation} from '@navigation';
StatusBar.setBarStyle('default');
if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('rgba(0,0,0,0)');
  StatusBar.setTranslucent(true);
}

const App = () => {
  return <Navigation />;
};

export default App;
