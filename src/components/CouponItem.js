import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILCoupon} from '../assets';
import Gap from './Gap';

const CouponItem = () => {
  return (
    <View style={styles.coupon}>
      <Gap width={15} />
      <Image source={ILCoupon} style={styles.picture} />
      <Gap width={8} />
      <View style={styles.wrapperText}>
        <Text style={styles.textTitle}>
          Get a cup of coffee for free on sunday morning
        </Text>
        <Text>Only at 7 to 9 AM</Text>
      </View>
    </View>
  );
};

export default CouponItem;

const styles = StyleSheet.create({
  coupon: {
    width: 335,
    height: 109,
    backgroundColor: '#F5C361',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  picture: {
    width: 83,
    height: 92,
  },
  wrapperText: {
    width: 195,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
