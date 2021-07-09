import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILForgotPassword} from '../assets';
import Counter from './Counter';
import Gap from './Gap';

const CartItem = () => {
  return (
    <View style={styles.wrapperItem}>
      <View style={styles.wrapperImage}>
        <Image source={ILForgotPassword} style={styles.picture} />
        <Text style={styles.price}>IDR 25.000</Text>
      </View>
      <Gap width={25} />
      <View style={styles.wrapperCounter}>
        <Text style={styles.name}>Beef Spagetti</Text>
        <Counter />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  wrapperItem: {flexDirection: 'row', marginBottom: 40},
  wrapperImage: {
    backgroundColor: '#fff',
    width: 120,
    height: 120,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    width: 84,
    height: 84,
    borderRadius: 84 / 2,
    marginBottom: 10,
    marginTop: -50,
    backgroundColor: '#fff',
  },
  price: {fontSize: 16, color: '#895537', fontWeight: 'bold'},
  name: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  wrapperCounter: {
    justifyContent: 'center',
  },
});
