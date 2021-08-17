import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import {ILUserDefault} from '../assets';
import Gap from '../components/Gap';
import {useNavigation} from '@react-navigation/native';

const HeaderChat = ({pic, name, email}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerHeader}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <IconFeather name="chevron-left" size={32} color="#6A4029" />
      </TouchableOpacity>
      <View style={styles.containerInfo}>
        <Image source={pic} style={styles.picture} />
        <Gap height={8} />
        <Text style={styles.name}>{name}</Text>
        <Gap height={5} />
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

export default HeaderChat;

const styles = StyleSheet.create({
  picture: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    justifyContent: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: 31,
    borderBottomColor: '#9F9F9F',
    backgroundColor: '#fff',
  },
  containerInfo: {
    alignItems: 'center',
    flex: 1,
    marginLeft: -40,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    color: 'grey',
    fontSize: 14,
  },
});
