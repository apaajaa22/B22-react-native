import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Feather';
import Gap from '../components/Gap';
import {ScrollView} from 'react-native-gesture-handler';
import ItemLoad from '../components/ItemLoad';
import {useEffect} from 'react';
import {getItemBySearch} from '../redux/action/search';
import {useDispatch, useSelector} from 'react-redux';

const Search = ({navigation}) => {
  const {data} = useSelector(state => state.searchReducer);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
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

  const DATA = data;

  const onSearch = () => {
    dispatch(getItemBySearch(search));
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
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header secondary label="Search" />
        <View style={styles.searchWrapper}>
          <Gap width={10} />
          <TouchableOpacity onPress={onSearch}>
            <View style={styles.wrapperIcon}>
              <Icon name="search" size={25} color="#fff" />
            </View>
          </TouchableOpacity>
          <Gap width={10} />
          <TextInput
            placeholderTextColor="#fff"
            style={styles.searchInput}
            placeholder="Search"
            value={search}
            onChangeText={e => setSearch(e)}
          />
        </View>
        <Gap height={20} />
        <FlatList
          contentContainerStyle={styles.flatlist}
          numColumns={2}
          data={DATA}
          renderItem={renderItem}
        />
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6A4029',
    marginHorizontal: 31,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
  },
  wrapperIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    fontSize: 16,
    color: '#fff',
  },
  flatlist: {
    alignItems: 'center',
  },
});
