import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {ILForgotPassword} from '../assets';
import ItemHome from './ItemHome';
import Gap from './Gap';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#6A4029',
      height: 3,
      width: 0.5,
    }}
    style={{backgroundColor: 'white', shadowColor: '#fff'}}
    tabStyle={{width: 'auto', paddingLeft: 31}}
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
  const navigation = useNavigation();
  return (
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
        <ItemHome
          img={ILForgotPassword}
          name="Hazelnut Latte"
          price="25.000"
          onPress={() => navigation.navigate('ProductDetail')}
        />
        <ItemHome img={ILForgotPassword} name="Hazelnut Latte" price="25.000" />
        <ItemHome img={ILForgotPassword} name="Hazelnut Latte" price="25.000" />
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

const Coffee = () => (
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

const NonCoffee = () => (
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
