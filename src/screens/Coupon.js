import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CouponItem from '../components/CouponItem';
import Header from '../components/Header';

const Coupon = () => {
  return (
    <View>
      <Header secondary label="My Coupons" />
      <View style={styles.wrapperContent}>
        <Text style={styles.title}>Claim coupons by clicking it</Text>
        <CouponItem />
        <CouponItem />
        <CouponItem />
      </View>
    </View>
  );
};

export default Coupon;

const styles = StyleSheet.create({
  wrapperContent: {
    paddingHorizontal: 31,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
});
