import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ButtonInfo = ({label, onPress, buttonColor = '#fff'}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container(buttonColor)}>
      <Text style={styles.text}>{label}</Text>
      <Icon name="right" size={20} />
    </TouchableOpacity>
  );
};

export default ButtonInfo;

const styles = StyleSheet.create({
  container: buttonColor => ({
    height: 80,
    backgroundColor: buttonColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    borderRadius: 20,
  }),
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
});
