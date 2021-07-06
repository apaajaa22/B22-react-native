import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import {ILForgotPassword} from '../assets';
import Button from '../components/Button';
import Gap from '../components/Gap';

const ForgotPassword = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Gap height={80} />
      <View style={styles.wrapperContent}>
        <Text style={styles.title}>Don't Worry</Text>
        <Text style={styles.subTitle}>
          Enter your email adress to get reset password link
        </Text>
        <Image source={ILForgotPassword} />
      </View>
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
        />
        <Text style={styles.subText}>Haven’t received any link?</Text>
      </View>
      <Button
        label="Resend Link"
        colorButton="#6A4029"
        textColorButton="#fff"
      />
      <Gap height={80} />
    </ScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {fontSize: 65, fontWeight: 'bold', width: 231, textAlign: 'center'},
  subTitle: {fontSize: 16, width: 242, textAlign: 'center'},
  wrapperContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperInput: {
    marginHorizontal: 31,
    marginBottom: 20,
  },
  input: {borderBottomWidth: 1, borderBottomColor: '#9F9F9F', marginBottom: 26},
  subText: {
    textAlign: 'center',
  },
});
