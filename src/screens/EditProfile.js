import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {RadioButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {ILUserDefault} from '../assets';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Header from '../components/Header';
import {editProfile} from '../redux/action/profile';
import toastMessage from '../utils/showMessage';
import {getData} from '../utils/storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const {photoReducer} = useSelector(state => state);
  const {profile} = useSelector(state => state.photoReducer);

  const [name, setName] = useState(profile[0]?.name);
  const [email, setEmail] = useState(profile[0]?.email);
  const [phone, setPhone] = useState(profile[0]?.phone_number);
  const [birth, setBirth] = useState(profile[0]?.birth);
  const [address, setAddress] = useState(profile[0]?.address);

  const [checked, setChecked] = React.useState(profile[0]?.gender || 'male');
  const [photo, setPhoto] = useState(
    profile[0].picture === null ? ILUserDefault : {uri: profile[0]?.picture},
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [token, setToken] = useState('');
  useEffect(() => {
    console.log(profile[0]);
    getData('token').then(res => {
      setToken(res);
    });
  }, [profile]);

  const addPhoto = type => {
    setModalVisible(!modalVisible);
    if (type === 'galery') {
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
    } else {
      launchCamera({quality: 0.5, maxHeight: 130, maxWidth: 130}, response => {
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
      });
    }
  };

  const formData = {
    name: name,
    email: email,
    phone: phone,
    birth: birth,
    address: address,
    gender: checked,
  };

  const onSubmit = () => {
    dispatch(editProfile(token, formData, photoReducer, navigation));
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = e => {
    const newDate = new Date(e);
    const date = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    const finalDate = `${year}-${month + 1}-${date}`;
    setBirth(finalDate);
    hideDatePicker();
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.wrapperModal}>
            <TouchableOpacity onPress={() => addPhoto('galery')}>
              <Text>Choose photo from galery</Text>
            </TouchableOpacity>
            <Gap height={20} />
            <TouchableOpacity onPress={() => addPhoto('take')}>
              <Text>Take a photo</Text>
            </TouchableOpacity>
            <Gap height={20} />
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Header secondary label="Edit Profile" />
      <View style={styles.wrapperPicture}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={photo} style={styles.picture} />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperContent}>
        <Text style={styles.label}>Name :</Text>
        <TextInput
          value={name}
          onChangeText={e => setName(e)}
          style={styles.input}
        />
        <View style={styles.containerRadio}>
          <View style={styles.wrapperRadio}>
            <RadioButton
              color="#6A4029"
              value={checked}
              status={checked === 'male' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('male')}
            />
            <Text>Male</Text>
          </View>
          <Gap width={20} />
          <View style={styles.wrapperRadio}>
            <RadioButton
              color="#6A4029"
              value={checked}
              status={checked === 'female' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('female')}
            />
            <Text>Female</Text>
          </View>
        </View>
        <Gap height={21} />
        <Text style={styles.label}>Email Address :</Text>
        <TextInput
          value={email}
          onChangeText={e => setEmail(e)}
          style={styles.input}
        />
        <Gap height={21} />
        <Text style={styles.label}>Phone Number :</Text>
        <TextInput
          value={phone}
          onChangeText={e => setPhone(e)}
          style={styles.input}
        />
        <Gap height={21} />
        <Text style={styles.label}>Date of Birth</Text>
        <View style={styles.input}>
          <TextInput value={birth} onChangeText={e => setBirth(e)} />
          <TouchableOpacity onPress={showDatePicker}>
            <Icon name="date-range" size={25} />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <Gap height={21} />
        <Text style={styles.label}>Delivery Address :</Text>
        <TextInput
          value={address}
          onChangeText={e => setAddress(e)}
          style={styles.input}
        />
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
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#9F9F9F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerRadio: {flexDirection: 'row', paddingTop: 20, marginLeft: -10},
  wrapperRadio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000a0',
  },
  wrapperModal: {
    backgroundColor: '#fff',
    height: 130,
    justifyContent: 'center',
    paddingLeft: 30,
  },
});
