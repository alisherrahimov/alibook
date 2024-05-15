import {StyleSheet, View} from 'react-native';
import React from 'react';

import {BookView} from '@screens';
// StatusBar.setBarStyle('dark-content', true);
// if (Platform.OS === 'android') {
//   StatusBar.setBackgroundColor('rgba(0,0,0,0)');
//   StatusBar.setTranslucent(true);
// }
const App = () => {
  return (
    <View style={styles.container}>
      <BookView />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
