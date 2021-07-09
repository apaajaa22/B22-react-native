import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILCard} from '../assets';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Header from '../components/Header';

const Payment = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header secondary />
        <View style={styles.container}>
          <Text style={styles.title}>Payment Methods</Text>
          <View style={styles.wrapperCard}>
            <Image source={ILCard} style={styles.picture} />
          </View>
          <View style={styles.wrapperContentList}>
            <View style={styles.wrapperItemList}>
              <View>
                <Text style={styles.product}>1 Hazelnut Latte</Text>
                <Gap height={5} />
                <Text>Regular</Text>
              </View>
              <Text style={styles.product}>IDR 20.000</Text>
            </View>
            <View style={styles.wrapperItemList}>
              <View>
                <Text style={styles.product}>1 Hazelnut Latte</Text>
                <Gap height={5} />
                <Text>Regular</Text>
              </View>
              <Text style={styles.product}>IDR 20.000</Text>
            </View>
            <View style={styles.wrapperItemList}>
              <View>
                <Text style={styles.product}>1 Hazelnut Latte</Text>
                <Gap height={5} />
                <Text>Regular</Text>
              </View>
              <Text style={styles.product}>IDR 20.000</Text>
            </View>
          </View>
          <View style={styles.price}>
            <Text>Subtotal</Text>
            <Text>IDR 105.000</Text>
          </View>
          <View style={styles.price}>
            <Text>Tax</Text>
            <Text>IDR 12.000</Text>
          </View>
          <Gap height={20} />
          <View style={styles.price}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>IDR 117.000</Text>
          </View>
        </View>
        <Gap height={50} />
        <Button label="Pay Now" colorButton="#6A4029" textColorButton="#fff" />
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 31,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingBottom: 10,
  },
  wrapperCard: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingVertical: 20,
    alignItems: 'center',
  },
  picture: {
    width: 329,
    height: 202,
  },
  wrapperContentList: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  wrapperItemList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  product: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  total: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
