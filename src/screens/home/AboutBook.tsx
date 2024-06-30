import {MainHeader, Text, View} from '@components';
import {FontSize} from '@constants';
import React from 'react';
import {ScrollView} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const AboutBook = () => {
  const {styles} = useStyles(aboutBookStyles);
  return (
    <View flex={1}>
      <MainHeader title="About this Ebook" borderBottomWidth={0} />
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Text style={styles.text} size={FontSize.x16}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          elementum, sapien ac vehicula tincidunt, orci nunc tristique urna, nec
          lacinia nunc turpis sit amet justo. Nulla facilisi. Duis ut
          sollicitudin nunc. Nullam nec libero nec odio tincidunt, nec
          condimentum nunc pellentesque. Nullam nec libero nec odio tincidunt,
          nec condimentum nunc pellentesque. Nullam nec libero nec odio
          tincidunt, nec condimentum nunc pellentesque. Nullam nec libero nec
          odio tincidunt, nec condimentum nunc pellentesque. Nullam nec libero
          nec odio tincidunt, nec condimentum nunc pellentesque. Nullam nec
          libero nec odio tincidunt, nec condimentum ia nunc turpis sit amet
          justo. Nulla facilisi. Duis ut sollicitudin nunc. Nullam nec libero
          nec odio tincidunt, nec condimentum nunc pellentesque. Nullam nec
          libero nec odio tincidunt, nec condimentum nunc pellentesque. Nullam
          nec libero nec odio tincidunt, nec condimentum nunc pellentesque.
          Nullam nec libero nec odio tincidunt, nec condimentum nunc
          pellentesque. Nullam nec libero nec odio tincidunt, nec condimentum
          nunc pellentesque. Nullam nec libero nec odio tincidunt, nec
          condimentum ia nunc turpis sit amet justo. Nulla facilisi. Duis ut
          sollicitudin nunc. Nullam nec libero nec odio tincidunt, nec
          condimentum nunc pellentesque. Nullam nec libero nec odio tincidunt,
          nec condimentum nunc pellentesque. Nullam nec libero nec odio
          tincidunt, nec condimentum nunc pellentesque. Nullam nec libero nec
          odio tincidunt, nec condimentum nunc pellentesque. Nullam nec libero
          nec odio tincidunt, nec condimentum nunc pellentesque. Nullam nec
          libero nec odio tincidunt, nec condimentum
        </Text>
      </ScrollView>
    </View>
  );
};

export default AboutBook;

const aboutBookStyles = createStyleSheet(() => ({
  scrollview: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text: {
    lineHeight: 25,
  },
}));
