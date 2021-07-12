import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Gap from './Gap';

const ItemLoad = ({img, name, price, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{marginTop: 40, alignItems: 'center', marginHorizontal: 10}}>
      <View
        style={{
          alignItems: 'center',
          elevation: 5,
          backgroundColor: '#fff',
          width: 180,
          height: 220,
          borderRadius: 30,
        }}>
        <Image
          source={img}
          style={{
            width: 148,
            borderRadius: 148 / 2,
            height: 148,
            resizeMode: 'cover',
            marginTop: -30,
            backgroundColor: '#fff',
          }}
        />
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              width: 125,
              textAlign: 'center',
              marginVertical: 2,
            }}>
            {name}
          </Text>
          <Text style={{fontSize: 17, fontWeight: '700', color: '#6A4029'}}>
            IDR {price}
          </Text>
        </View>
      </View>
      <Gap height={40} />
    </TouchableOpacity>
  );
};

export default ItemLoad;

const styles = StyleSheet.create({});
