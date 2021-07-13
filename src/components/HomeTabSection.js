import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {useDispatch, useSelector} from 'react-redux';
import {ILForgotPassword} from '../assets';
import {getCategory} from '../redux/action/category';
import {getFoodById} from '../redux/action/home';
import Gap from './Gap';
import ItemHome from './ItemHome';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#6A4029',
      height: 3,
      width: 0.5,
    }}
    style={{backgroundColor: 'white', shadowColor: '#fff'}}
    tabStyle={{width: 'auto', paddingLeft: 31, backgroundColor: '#fff'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontSize: 17,
          fontWeight: '600',
          color: focused ? '#6A4029' : '#9A9A9D',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const Favorite = () => {
  const {favorite} = useSelector(state => state.homeReducer);
  const [id, setId] = useState(1);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(getFoodById(1));
    setId(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, navigation]);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginRight: 25,
          marginTop: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('LoadMore', {id})}>
          <Text
            style={{
              fontSize: 17,
              color: '#6A4029',
            }}>
            See More
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorite.map(food => {
          return (
            <ItemHome
              key={food.id}
              img={{uri: food.picture}}
              name={food.name}
              price={food.price.toLocaleString('en')}
              onPress={() => navigation.navigate('ProductDetail', food)}
            />
          );
        })}
        <Gap width={38} />
      </ScrollView>
    </View>
  );
};

const Promo = () => (
  <View style={{flex: 1}}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 25,
        marginTop: 20,
      }}>
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 17,
            color: '#6A4029',
          }}>
          See More
        </Text>
      </TouchableOpacity>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <ItemHome img={ILForgotPassword} name="Hazelnut Latte" price="25.000" />
      <ItemHome img={ILForgotPassword} name="Hazelnut Latte" price="25.000" />
      <ItemHome img={ILForgotPassword} name="Hazelnut Latte" price="25.000" />
      <Gap width={38} />
    </ScrollView>
  </View>
);

const Coffee = () => {
  const {coffee} = useSelector(state => state.homeReducer);

  const [id, setId] = useState(2);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    setId(2);
    dispatch(getFoodById(2));
  }, [dispatch, navigation]);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginRight: 25,
          marginTop: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('LoadMore', {id})}>
          <Text
            style={{
              fontSize: 17,
              color: '#6A4029',
            }}>
            See More
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {coffee.map(kopi => {
          return (
            <ItemHome
              key={kopi.id}
              img={{uri: kopi.picture}}
              name={kopi.name}
              price={kopi.price.toLocaleString('en')}
              onPress={() => navigation.navigate('ProductDetail', kopi)}
            />
          );
        })}
        <Gap width={38} />
      </ScrollView>
    </View>
  );
};

const NonCoffee = () => {
  const [id, setId] = useState(3);
  const {nonCoffee} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    setId(3);
    dispatch(getFoodById(3));
  }, [dispatch]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginRight: 25,
          marginTop: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('LoadMore', {id})}>
          <Text
            style={{
              fontSize: 17,
              color: '#6A4029',
            }}>
            See More
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {nonCoffee.map(data => {
          return (
            <ItemHome
              key={data.id}
              img={{uri: data.picture}}
              name={data.name}
              price={data.price.toLocaleString('en')}
              onPress={() => navigation.navigate('ProductDetail', data)}
            />
          );
        })}
        <Gap width={38} />
      </ScrollView>
    </View>
  );
};

const renderScene = SceneMap({
  1: Favorite,
  2: Promo,
  3: Coffee,
  4: NonCoffee,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Favorite'},
    {key: '2', title: 'Promo'},
    {key: '3', title: 'Coffee'},
    {key: '4', title: 'Non Coffee'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
