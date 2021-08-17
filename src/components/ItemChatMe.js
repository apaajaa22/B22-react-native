import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILUserDefault} from '../assets';
import Gap from './Gap';

const ItemChatMe = ({pic, msg, onPress}) => {
  return (
    <View style={styles.wrapperContent}>
      <TouchableOpacity onPress={onPress} style={styles.containerText}>
        <Text style={styles.text}>{msg}</Text>
      </TouchableOpacity>
      <Gap width={12} />
      <Image
        source={pic !== null ? pic : ILUserDefault}
        style={styles.picture}
      />
    </View>
  );
};

export default ItemChatMe;

const styles = StyleSheet.create({
  wrapperContent: {
    paddingHorizontal: 21,
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 50,
    justifyContent: 'flex-end',
  },
  picture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  containerText: {
    backgroundColor: '#6A4029',
    padding: 15,
    borderRadius: 20,
    marginLeft: 50,
  },
  text: {
    color: 'white',
  },
});
