import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILUserDefault} from '../assets';
import Gap from './Gap';

const CardChat = ({isMe, pic, name, msg, onPress}) => {
  if (isMe) {
    return <View />;
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.wrapperCard}
        activeOpacity={0.7}>
        <Image source={pic} style={styles.picture} />
        <Gap width={15} />
        <View style={styles.wrapperText}>
          <Text style={styles.name}>{name}</Text>
          <Text>{msg}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

export default CardChat;

const styles = StyleSheet.create({
  picture: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  wrapperCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  wrapperText: {
    width: '70%',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});
