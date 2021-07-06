import React from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import {BGRegister} from '../assets';
import Button from '../components/Button';
import Gap from '../components/Gap';

const Register = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.picture} source={BGRegister}>
        <View style={styles.wrapperContent}>
          <Text style={styles.text}>Sign Up</Text>
          <TextInput
            placeholder="Enter your email address"
            placeholderTextColor="#fff"
            style={styles.textInput}
          />
          <Gap height={17} />
          <TextInput
            placeholder="Enter your email password"
            placeholderTextColor="#fff"
            style={styles.textInput}
          />
          <Gap height={17} />
          <TextInput
            placeholder="Enter your phone number"
            placeholderTextColor="#fff"
            style={styles.textInput}
          />
          <Gap height={40} />
          <Button
            label="Create Account"
            textColorButton="#fff"
            colorButton="#6A4029"
          />
          <Gap height={20} />
          <Button
            google
            label="Create"
            textColorButton="#000"
            colorButton="#fff"
          />
          <Gap height={50} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picture: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
    paddingTop: 78,
    marginLeft: 31,
    flex: 1,
  },
  textInput: {
    color: '#fff',
    marginHorizontal: 31,
    fontSize: 16,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  subText: {paddingTop: 17, fontSize: 17, width: 282},
  wrapperContent: {
    backgroundColor: '#000000a0',
    flex: 1,
  },
});
