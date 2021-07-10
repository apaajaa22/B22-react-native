import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import Header from '../components/Header';
import HomeTabSection from '../components/HomeTabSection';

const Home = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>A good coffee is a good day</Text>
        <View style={styles.searchWrapper}>
          <TouchableOpacity>
            <Icon name="search" size={25} color="#6A4029" />
          </TouchableOpacity>
          <TextInput placeholder="Search" />
        </View>
      </View>
      <View style={styles.wrapperTabView}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: '#fff', flex: 1},
  container: {paddingHorizontal: 31},
  title: {
    width: 285,
    fontSize: 34,
    fontWeight: 'bold',
  },

  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEEEE',
    borderRadius: 50,
    height: 60,
    paddingLeft: 20,
    marginVertical: 20,
  },
  wrapperTabView: {
    flex: 1,
  },
});
