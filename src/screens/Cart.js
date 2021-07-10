import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ButtonInfo from '../components/ButtonInfo';
import CartItem from '../components/CartItem';
import Gap from '../components/Gap';
import Header from '../components/Header';

const Cart = ({navigation, route}) => {
  const {name, price, picture} = route.params;
  return (
    <View style={styles.mainContainer}>
      <Header secondary label="My Cart" />
      <ScrollView style={styles.content}>
        <Gap height={40} />
        <CartItem name={name} price={price} img={{uri: picture}} />
        <CartItem name={name} price={price} img={{uri: picture}} />
        <CartItem name={name} price={price} img={{uri: picture}} />
        <ButtonInfo
          label="Apply Delivery Coupons"
          buttonColor="#FFBA33"
          onPress={() => navigation.navigate('Coupon')}
        />
        <Gap height={20} />
        <View style={styles.wrapperMainPrice}>
          <View style={styles.wrapperPrice}>
            <Text style={styles.titlePrice}>Item Total</Text>
            <Text>IDR 150.000</Text>
          </View>
          <Gap height={20} />
          <View style={styles.wrapperPrice}>
            <Text style={styles.titlePrice}>Delivery Charge</Text>
            <Text>IDR 0</Text>
          </View>
          <Gap height={20} />
          <View style={styles.wrapperPrice}>
            <Text style={styles.titlePrice}>Tax</Text>
            <Text>IDR 10.000</Text>
          </View>
          <Gap height={30} />
          <View style={styles.wrapperPrice}>
            <Text style={styles.total}>Total </Text>
            <Text style={styles.total}>IDR 160.000</Text>
          </View>
        </View>
        <ButtonInfo
          label="CHECKOUT"
          buttonColor="#FFBA33"
          onPress={() => navigation.navigate('Checkout')}
        />
        <Gap height={50} />
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  content: {paddingHorizontal: 31, paddingVertical: 20},
  wrapperMainPrice: {borderTopWidth: 1, paddingTop: 30, marginBottom: 40},
  wrapperPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titlePrice: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#ADADAF',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
