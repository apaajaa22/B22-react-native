import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Header from '../components/Header';
import ItemLoad from '../components/ItemLoad';

const LoadMore = () => {
  const dispatch = useDispatch();
  const {favorite, pageInfo} = useSelector(state => state.homeReducer);
  const DATA = favorite;
  const [renderData, setRenderData] = useState(DATA);
  const navigation = useNavigation();

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
    return <Button label="Load More" />;
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
