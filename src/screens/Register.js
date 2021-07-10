import React from 'react';
import {useState} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import {BGRegister} from '../assets';
import Button from '../components/Button';
import Gap from '../components/Gap';
import {useDispatch} from 'react-redux';
import {signUpAction} from '../redux/action/auth';
import {showMessage, hideMessage} from 'react-native-flash-message';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const formData = {
    email: email,
    password: password,
    phone: phone,
  };
  const onSubmit = () => {
    dispatch(signUpAction(formData));
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.picture} source={BGRegister}>
        <View style={styles.wrapperContent}>
          <Text style={styles.text}>Sign Up</Text>
          <TextInput
            placeholder="Enter your email address"
            placeholderTextColor="#fff"
            style={styles.textInput}
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <Gap height={17} />
          <TextInput
            secureTextEntry
            placeholder="Enter your password"
            placeholderTextColor="#fff"
            style={styles.textInput}
            value={password}
            onChangeText={value => setPassword(value)}
          />
          <Gap height={17} />
          <TextInput
            placeholder="Enter your phone number"
            placeholderTextColor="#fff"
            style={styles.textInput}
            value={phone}
            onChangeText={value => setPhone(value)}
          />
          <Gap height={40} />
          <Button
            onPress={onSubmit}
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
