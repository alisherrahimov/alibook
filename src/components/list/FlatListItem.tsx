import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../card/Card';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

interface FlatListItemProps {
  categories_id: number;
}

const FlatListItem: React.FC<FlatListItemProps> = ({categories_id}) => {
  const {styles} = useStyles(flatStyles);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${categories_id}`,
      );
      const json = await response.json();
      console.log(json, 'json');
      setData([json]);
      setLoading(false);
    }
    fetchData();
  }, [categories_id]);

  return (
    <>
      {loading ? (
        <Text>Loading....</Text>
      ) : (
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
      )}
    </>
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
