import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {BGSplashScreen} from '../assets';
import {getData} from '../utils/storage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        console.log('token', res);
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('GettingStarted');
        }
      });
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.picture} source={BGSplashScreen}>
        <Text style={styles.text}>Coffee For Everyone</Text>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picture: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#000000a0',
    flex: 1,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
    paddingTop: 209,
    textAlign: 'center',
  },
});
