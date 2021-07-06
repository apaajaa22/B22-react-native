import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcGoogle} from '../assets';
import Gap from './Gap';

const Button = ({
  label,
  onPress,
  textColorButton = '#000',
  colorButton = '#FFBA33',
  google,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.wrapperButton(colorButton)}>
      {google ? (
        <View style={styles.text(textColorButton)}>
          <View style={styles.wrapperGoogle}>
            <Image source={IcGoogle} />
            <Gap width={10} />
            <Text style={styles.textGoogle}>{label} with Google</Text>
          </View>
        </View>
      ) : (
        <Text style={styles.text(textColorButton)}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapperButton: colorButton => ({
    height: 70,
    justifyContent: 'center',
    backgroundColor: colorButton,
    marginHorizontal: 31,
    borderRadius: 20,
  }),
  text: textColorButton => ({
    textAlign: 'center',
    color: textColorButton,
    fontWeight: 'bold',
    fontSize: 17,
  }),
  wrapperGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGoogle: {color: '#000', fontWeight: 'bold'},
});
