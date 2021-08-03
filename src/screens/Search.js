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
import {getItemBySearch, getProducts} from '../redux/action/search';
import {useDispatch, useSelector} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import toastMessage from '../utils/showMessage';

const Search = ({navigation}) => {
  const [sort, setSort] = useState('');
  const {data, pageInfo} = useSelector(state => state.searchReducer);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(pageInfo);

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
    dispatch(getItemBySearch(search, sort));
  };

  const loadMoreProduct = () => {
    dispatch(getProducts(pageInfo.nextPage));
  };

  useEffect(() => {
    dispatch(getItemBySearch(search, sort));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

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
        <Gap height={10} />
        <View style={styles.sortir}>
          <Text style={styles.textSortir}>Sortir item berdasarkan</Text>
          <Picker
            style={{width: 120}}
            selectedValue={sort}
            onValueChange={(itemValue, itemIndex) => setSort(itemValue)}>
            <Picker.Item label="name" value="name" />
            <Picker.Item label="price" value="price" />
          </Picker>
        </View>
        <Gap height={10} />
        {data.length !== 0 ? (
          <FlatList
            contentContainerStyle={styles.flatlist}
            numColumns={2}
            data={DATA}
            renderItem={renderItem}
            onEndReached={loadMoreProduct}
            onEndReachedThreshold={0}
          />
        ) : (
          <View style={styles.notfoundwrapper}>
            <Text style={styles.notfound}>item could not be found</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  sortir: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 31,
  },
  textSortir: {
    fontSize: 16,
    marginRight: 60,
  },
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
    paddingTop: 20,
  },
  notfoundwrapper: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notfound: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
