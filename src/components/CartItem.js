import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Counter from './Counter';
import Gap from './Gap';
import Icon from 'react-native-vector-icons/Ionicons';

const CartItem = ({price, name, img, onValueChange, productId, onDelete}) => {
  return (
    <View style={styles.wrapperItem}>
      <View style={styles.wrapperImage}>
        <Image source={img} style={styles.picture} />
        <Text style={styles.price}>IDR {price}</Text>
      </View>
      <Gap width={25} />
      <View style={styles.wrapperCounter}>
        <Text style={styles.name}>{name}</Text>
        <Counter onValueChange={onValueChange} productId={productId} />
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Icon name="close-sharp" size={23} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  wrapperItem: {flexDirection: 'row', marginBottom: 40},
  wrapperImage: {
    backgroundColor: '#fff',
    width: 120,
    height: 130,
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
