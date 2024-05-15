import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';

const SwipeView = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>SwipeView</Text>
      </View>
    </View>
  );
};

export default SwipeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width - 130,
  },
});
