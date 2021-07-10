import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ILForgotPassword, ILUserDefault} from '../assets';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Header from '../components/Header';
import {RadioButton} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import toastMessage from '../utils/showMessage';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

const EditProfile = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState('male');
  const [photo, setPhoto] = useState(ILUserDefault);

  const addPhoto = () => {
    launchImageLibrary(
      {quality: 0.5, maxHeight: 130, maxWidth: 130},
      response => {
        if (response.didCancel) {
          toastMessage('You dont choose any photo');
        } else {
          setPhoto({uri: response.assets[0].uri});
          const dataImage = {
            uri: response.assets[0].uri,
            type: response.assets[0].type,
            name: response.assets[0].fileName,
          };
          dispatch({type: 'SET_PHOTO', payload: dataImage});
          dispatch({type: 'SET_UPLOAD_STATUS', payload: true});
        }
      },
    );
  };
  const onSubmit = () => {
    console.log('data', checked);
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header secondary label="Edit Profile" />
      <View style={styles.wrapperPicture}>
        <TouchableOpacity onPress={addPhoto}>
          {photo ? (
            <Image source={photo} style={styles.picture} />
          ) : (
            <Image source={ILForgotPassword} style={styles.picture} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperContent}>
        <Text style={styles.label}>Name :</Text>
        <TextInput style={styles.input} />
        <View style={styles.containerRadio}>
          <View style={styles.wrapperRadio}>
            <RadioButton
              value="male"
              status={checked === 'male' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('male')}
            />
            <Text>Male</Text>
          </View>
          <Gap width={20} />
          <View style={styles.wrapperRadio}>
            <RadioButton
              value="female"
              status={checked === 'female' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('female')}
            />
            <Text>Female</Text>
          </View>
        </View>
        <Gap height={21} />
        <Text style={styles.label}>Email Address :</Text>
        <TextInput style={styles.input} />
        <Gap height={21} />
        <Text style={styles.label}>Phone Number :</Text>
        <TextInput style={styles.input} />
        <Gap height={21} />
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput style={styles.input} />
        <Gap height={21} />
        <Text style={styles.label}>Delivery Address :</Text>
        <TextInput style={styles.input} />
      </View>
      <Button
        label="Save and Update"
        colorButton="#6A4029"
        textColorButton="#fff"
        onPress={onSubmit}
      />
      <Gap height={59} />
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F8',
  },
  wrapperPicture: {alignItems: 'center'},
  picture: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
  },
  label: {fontWeight: '700', color: '#9F9F9F'},
  wrapperContent: {
    paddingHorizontal: 31,
    paddingVertical: 45,
  },
  input: {borderBottomWidth: 1, borderBottomColor: '#9F9F9F'},
  containerRadio: {flexDirection: 'row', paddingTop: 20, marginLeft: -10},
  wrapperRadio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
