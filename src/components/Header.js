import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const Header = ({secondary, label, third}) => {
  const navigation = useNavigation();
  return (
    <View>
      {!secondary ? (
        <View style={styles.headerContainer}>
          {!third ? (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon name="ios-menu-outline" size={32} color="#6A4029" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconFeather name="chevron-left" size={32} color="#6A4029" />
            </TouchableOpacity>
          )}
          <TouchableOpacity>
            <Icon
              name="cart-outline"
              size={32}
              color="#6A4029"
              onPress={() => navigation.navigate('Cart')}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.pictureWrapper}
            onPress={() => navigation.goBack()}>
            <IconFeather name="chevron-left" size={32} color="#6A4029" />
          </TouchableOpacity>
          <Text style={styles.secondaryText}>{label}</Text>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 31,
    paddingVertical: 30,
    alignItems: 'center',
  },
  secondaryText: {
    flex: 1,
    textAlign: 'center',
    marginRight: 25,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  pictureWrapper: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
