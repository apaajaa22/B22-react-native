import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/Feather';
import {LogBox} from 'react-native';
import {ILForgotPassword} from '../assets';
import {useNavigation} from '@react-navigation/native';

const HistoryItem = ({onOpen, onClose, onPress, name, price}) => {
  const navigation = useNavigation();
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, [navigation]);

  return (
    <Swipeable
      rightButtons={[
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.7}
          style={[styles.rightSwipeItem, styles.rightAdd]}>
          <Icon name="trash-2" color="#fff" size={30} />
        </TouchableOpacity>,
      ]}
      onRightButtonsOpenRelease={onOpen}
      onRightButtonsCloseRelease={onClose}>
      <View style={[styles.listItem, styles.listItemAdd]}>
        <Image source={ILForgotPassword} style={styles.picture} />
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.price}>IDR {price}</Text>
          <Text style={styles.delivery}>
            Waiting for delivery [will arrive at 3 PM]
          </Text>
        </View>
      </View>
    </Swipeable>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  listItem: {
    height: 102,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    flexDirection: 'row',
  },
  rightSwipeItem: {
    width: 60,
    height: 60,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60 / 2,
  },
  rightAdd: {backgroundColor: '#6A4029'},
  listItemAdd: {
    backgroundColor: '#fff',
    marginHorizontal: 31,
    marginBottom: 20,
  },
  picture: {
    width: 69,
    height: 69,
    borderRadius: 69 / 2,
    marginRight: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    marginBottom: 5,
    color: '#6A4029',
  },
  delivery: {
    color: '#6A4029',
  },
});
