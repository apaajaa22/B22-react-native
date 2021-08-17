import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILUserDefault} from '../assets';
import Gap from './Gap';

const ItemChatOthers = ({pic, msg}) => {
  return (
    <View style={styles.wrapperContent}>
      <Image source={pic} style={styles.picture} />
      <Gap width={12} />
      <View style={styles.containerText}>
        <Text style={styles.text}>{msg}</Text>
      </View>
    </View>
  );
};

export default ItemChatOthers;

const styles = StyleSheet.create({
  wrapperContent: {
    paddingHorizontal: 21,
    marginTop: 20,
    flexDirection: 'row',
    marginRight: 50,
    justifyContent: 'flex-start',
  },
  picture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  containerText: {
    padding: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#6A4029',
    marginRight: 50,
  },
  text: {
    color: 'black',
  },
});
