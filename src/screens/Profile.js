import React from 'react';
import {useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {ILUserDefault} from '../assets';
import ButtonInfo from '../components/ButtonInfo';
import Gap from '../components/Gap';
import Header from '../components/Header';

const Profile = ({navigation}) => {
  const {profile} = useSelector(state => state.photoReducer);

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header secondary />
        <View style={styles.container}>
          <Text style={styles.title}>My Profile</Text>
          <View style={styles.wrapperInfo}>
            <Text style={styles.subTitle}>Your Information</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}>
              <Text>edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperProfileInfo}>
            <Image
              style={styles.picture}
              source={
                profile[0].picture === null
                  ? ILUserDefault
                  : {uri: profile[0]?.picture}
              }
            />
            <View style={styles.information}>
              <Text style={styles.name}>{profile[0].name}</Text>
              <Gap height={10} />
              <Text style={styles.contact}>{profile[0].email}</Text>
              <Gap height={10} />
              <Text style={styles.contact}>{profile[0].phone_number}</Text>
              <Gap height={10} />
              <Text style={styles.address}>{profile[0].address}</Text>
            </View>
          </View>
          <Gap height={26} />
          <ButtonInfo
            label="Order History"
            onPress={() => navigation.navigate('History')}
          />
          <Gap height={26} />
          <ButtonInfo label="Edit Password" />
          <Gap height={26} />
          <ButtonInfo label="FAQ" />
          <Gap height={26} />
          <ButtonInfo label="Help" />
          <Gap height={26} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: '#F5F5F8', flex: 1},
  container: {
    paddingHorizontal: 31,
    flex: 1,
  },
  wrapperInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  subTitle: {fontWeight: 'bold', fontSize: 18, marginBottom: 10},
  wrapperProfileInfo: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 197,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  picture: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginTop: 21,
    marginLeft: 21,
  },
  information: {
    width: 170,
  },
  name: {fontWeight: 'bold', fontSize: 18, marginTop: 26},
  contact: {
    color: '#6A4029',
    borderBottomColor: '#6A4029',
    borderBottomWidth: 1,
    fontSize: 15,
    paddingBottom: 5,
  },
  address: {color: '#6A4029', fontSize: 15},
});
