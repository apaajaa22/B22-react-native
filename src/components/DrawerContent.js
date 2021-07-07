import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILForgotPassword} from '../assets';
import Button from './Button';
import Icon from 'react-native-vector-icons/EvilIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconIon from 'react-native-vector-icons/Ionicons';

const DrawerContent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperProfile}>
        <Image style={styles.pictureDrawer} source={ILForgotPassword} />
        <Text style={styles.title}>Zulaikha</Text>
        <Text style={[styles.title, styles.subTitle]}>
          zulaikha17@gmail.com
        </Text>
      </View>
      <View style={styles.wrapperContent}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {}}
          style={styles.wrapperDrawer}>
          <Icon
            name="user"
            size={35}
            color="#6A4029"
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {}}
          style={styles.wrapperDrawer}>
          <Icon
            name="cart"
            size={35}
            color="#6A4029"
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {}}
          style={styles.wrapperDrawer}>
          <IconIon
            name="newspaper-outline"
            size={35}
            color="#6A4029"
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>All menu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {}}
          style={styles.wrapperDrawer}>
          <IconIon
            name="md-newspaper"
            size={35}
            color="#6A4029"
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>Privacy policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {}}
          style={styles.wrapperDrawer}>
          <IconMaterial
            name="security"
            size={35}
            color="#6A4029"
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerText}>Security</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {}}
        style={styles.wrapperDrawerSignout}>
        <Text style={styles.drawerTextSignout}>Sign-Out</Text>
        <IconMaterial
          name="arrow-right-alt"
          size={35}
          color="#6A4029"
          style={styles.drawerIconSignout}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {borderTopRightRadius: 30},
  wrapperProfile: {
    backgroundColor: '#6A4029',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    height: 288,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictureDrawer: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    marginBottom: 10,
    resizeMode: 'cover',
    backgroundColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontWeight: '500',
  },
  wrapperDrawer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 40,
    marginVertical: 10,
  },
  drawerText: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    flex: 1,
    fontSize: 17,
    fontWeight: '700',
    paddingBottom: 10,
    color: '#6A4029',
  },
  drawerIcon: {paddingBottom: 10, marginRight: 10},
  wrapperContent: {marginTop: 30},
  wrapperDrawerSignout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    marginLeft: 25,
  },
  drawerTextSignout: {
    fontSize: 17,
    color: '#6A4029',
    fontWeight: '700',
  },
});
