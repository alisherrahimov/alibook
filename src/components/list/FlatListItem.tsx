import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../card/Card';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {BookService} from '@api';

interface FlatListItemProps {
  categories_id: number;
}

const FlatListItem: React.FC<FlatListItemProps> = ({categories_id}) => {
  const {styles} = useStyles(flatStyles);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const res = await BookService.getBooksByCategory(categories_id, page);
      console.log(res.data.data);
      setData(res.data.data || []);
    }
    fetchData();
  }, [categories_id, page]);

  return (
    <>
      {loading ? (
        <Text>Loading....</Text>
      ) : (
        <FlatList
          horizontal
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.container}>
                <Card
                  image="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?cs=srgb&dl=pexels-luisdalvan-1770809.jpg&fm=jpg"
                  price={120}
                  rate={5}
                  title={item?.title || ''}
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
