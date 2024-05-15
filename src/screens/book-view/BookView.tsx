import {StyleSheet, View} from 'react-native';
import React from 'react';
import {RenderEpub} from '@components';
import Header from './Header';
import Footer from './Footer';
import {useSharedValue} from 'react-native-reanimated';
import SwipeView from './SwipeView';

const BookView = () => {
  const top_height = useSharedValue(0);
  const bottom_height = useSharedValue(0);
  const scale = useSharedValue(1);

  return (
    <View style={styles.container}>
      <Header top_height={top_height} />
      <RenderEpub
        top_height={top_height}
        bottom_height={bottom_height}
        scale={scale}
      />
      <Footer bottom_height={bottom_height} />
      {/* <SwipeView /> */}
    </View>
  );
};

export default BookView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
