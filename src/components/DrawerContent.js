import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILForgotPassword} from '../assets';
import Button from './Button';

const DrawerContent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperProfile}>
        <Image style={styles.pictureDrawer} source={ILForgotPassword} />
        <Text style={styles.title}>Zulaikha</Text>
        <Text style={[styles.title, styles.subTitle]}>
          zulaikha17@gmail.com
        </Text>
        {/*coba*/}
        <Button onPress={() => navigation.navigate('Login')} label="to login" />
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {borderTopRightRadius: 30},
  wrapperProfile: {
    backgroundColor: '#6A4029',
    borderBottomRightRadius: 30,
    height: 288,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictureDrawer: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    marginBottom: 10,
    resizeMode: 'cover',
    backgroundColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontWeight: '500',
  },
});
