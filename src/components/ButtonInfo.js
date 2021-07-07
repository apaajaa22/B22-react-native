import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ButtonInfo = ({label, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <Icon name="right" size={20} />
    </TouchableOpacity>
  );
};

export default ButtonInfo;

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    borderRadius: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
