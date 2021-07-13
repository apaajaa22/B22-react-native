import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Header from '../components/Header';
import ItemLoad from '../components/ItemLoad';
import {API_URL} from '@env';

///categories/:id/products?page=1
const LoadMore = ({route}) => {
  const {id} = route.params;

  const dispatch = useDispatch();
  const [renderData, setRenderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigation = useNavigation();

  const getFood = () => {
    dispatch({type: 'SET_LOADING', payload: true});
    axios
      .get(`${API_URL}/categories/${id}/products?page=${currentPage}`)
      .then(res => {
        dispatch({type: 'SET_LOADING', payload: false});
        setRenderData([...renderData, ...res.data.results]);
      });
  };

  useEffect(() => {
    getFood();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const renderItem = ({item}) => {
    return (
      <ItemLoad
        name={item.name}
        price={item.price.toLocaleString('en')}
        img={{uri: item.picture}}
        onPress={() => navigation.navigate('ProductDetail', item)}
      />
    );
  };
  const footerComponent = () => {
    return (
      <View>
        <ActivityIndicator size="large" color="#FFBA33" />
      </View>
    );
  };

  const loadMoreProduct = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <View style={styles.container}>
      <Header secondary label="Favorite Products" />
      <View style={styles.content}>
        <Text style={styles.title}>Everyone’s Favorite</Text>
        <Gap height={40} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerFlat}
        data={renderData}
        renderItem={renderItem}
        numColumns={2}
        ListFooterComponent={footerComponent}
        ListFooterComponentStyle={styles.footer}
        onEndReached={loadMoreProduct}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

export default LoadMore;

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  containerFlat: {marginLeft: 15},
  footer: {
    marginBottom: 20,
  },
});
