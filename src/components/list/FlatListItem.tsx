import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Card from '../card/Card';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

interface FlatListItemProps {
  categories_id: number;
  categories_name: string;
}

const FlatListItem: React.FC<FlatListItemProps> = ({
  categories_id,
  categories_name,
}) => {
  const {styles} = useStyles(flatStyles);
  const [data, setData] = useState([1, 2, 3]);

  return (
    <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={({}) => {
        return (
          <View style={styles.container}>
            <Card
              image="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?cs=srgb&dl=pexels-luisdalvan-1770809.jpg&fm=jpg"
              price={120}
              rate={5}
              title="asdsadsadsadasd"
            />
          </View>
        );
      }}
    />
  );
};

export default FlatListItem;

const flatStyles = createStyleSheet(() => {
  return {
    container: {
      marginLeft: 20,
    },
  };
});
