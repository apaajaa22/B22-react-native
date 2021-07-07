import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ItemHome = ({img, name, price, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{marginTop: 50, marginLeft: 38}}>
      <View
        style={{
          alignItems: 'center',
          elevation: 5,
          backgroundColor: '#fff',
          width: 220,
          height: 270,
          borderRadius: 30,
        }}>
        <Image
          source={img}
          style={{width: 168, height: 189, resizeMode: 'cover', marginTop: -30}}
        />
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              width: 125,
              textAlign: 'center',
              marginVertical: 8,
            }}>
            {name}
          </Text>
          <Text style={{fontSize: 17, fontWeight: '700', color: '#6A4029'}}>
            IDR {price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemHome;

const styles = StyleSheet.create({});
