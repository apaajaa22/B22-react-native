import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {BGWelcomeScreen} from '../assets';
import Button from '../components/Button';
import Gap from '../components/Gap';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.picture} source={BGWelcomeScreen}>
        <View style={styles.wrapperContent}>
          <View style={styles.wrapperText}>
            <Text style={styles.text}>Welcome!</Text>
            <Text style={[styles.text, styles.subText]}>
              Get a cup of coffee for free every sunday morning
            </Text>
          </View>
          <Button
            onPress={() => navigation.navigate('Register')}
            label="Create New Account"
          />
          <Gap height={17} />
          <Button
            onPress={() => navigation.navigate('Login')}
            label="Login"
            textColorButton="#fff"
            colorButton="#6A4029"
          />
          <Gap height={54} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picture: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
  },
  wrapperText: {flex: 1, alignItems: 'center'},
  text: {
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
    paddingTop: 209,
    textAlign: 'center',
  },
  subText: {paddingTop: 17, fontSize: 17, width: 282},
  wrapperContent: {
    backgroundColor: '#000000a0',
    flex: 1,
  },
});
