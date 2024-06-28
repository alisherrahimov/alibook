import {Platform, StatusBar} from 'react-native';
import React from 'react';

import './src/config/unistyles';
import {Navigation} from '@navigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
StatusBar.setBarStyle('default');
if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('rgba(0,0,0,0)');
  StatusBar.setTranslucent(true);
}

const App = () => {
  const {styles} = useStyles(appStyles);
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;

const appStyles = createStyleSheet(theme => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  };
});
