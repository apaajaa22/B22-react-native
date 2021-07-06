import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {BGLogin} from '../assets';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Link from '../components/Link';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.picture} source={BGLogin}>
        <View style={styles.wrapperContent}>
          <Text style={styles.text}>Login</Text>
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
          <View style={styles.wrapperLink}>
            <Link
              onPress={() => navigation.navigate('ForgotPassword')}
              label="Forgot password ?"
            />
          </View>
          <Gap height={20} />
          <Button
            label="Login"
            onPress={() => navigation.navigate('MainApp')}
          />
          <Gap height={17} />
          <Text style={styles.orLogin}>Or Login in with</Text>
          <Gap height={17} />
          <Button
            google
            label="Login"
            textColorButton="#000"
            colorButton="#fff"
          />
          <Gap height={54} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

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
  wrapperLink: {
    marginLeft: 31,
  },
  orLogin: {color: '#fff', textAlign: 'center', fontWeight: 'bold'},
});
