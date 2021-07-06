import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {BGSplashScreen} from '../assets';
import Button from '../components/Button';
import Gap from '../components/Gap';

const GettingStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.picture} source={BGSplashScreen}>
        <View style={styles.wrapperContent}>
          <Text style={styles.text}>Coffee For Everyone</Text>
          <Button
            onPress={() => navigation.navigate('WelcomeScreen')}
            label="Get Started"
          />
          <Gap height={54} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default GettingStarted;

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
    flex: 1,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
    paddingTop: 209,
    textAlign: 'center',
  },
  wrapperContent: {
    backgroundColor: '#000000a0',
    flex: 1,
  },
});
