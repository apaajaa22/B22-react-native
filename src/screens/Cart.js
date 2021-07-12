import React from 'react';
import {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ButtonInfo from '../components/ButtonInfo';
import CartItem from '../components/CartItem';
import Gap from '../components/Gap';
import Header from '../components/Header';

const Cart = ({navigation, route}) => {
  const {name, base_price, picture} = route.params;
  const [total, setTotal] = useState(1);

  const onCouter = e => {
    setTotal(e);
  };
  const itemTotal = total * base_price;
  const tax = 10000;
  const deliveryCharge = 10000;
  const totalPrice = itemTotal + tax + deliveryCharge;

  const onOrder = () => {
    const data = {
      product: {
        name: name,
        price: base_price,
        variant: 1,
        picture: picture,
      },
      transaction: {
        totalItem: total,
        totalPrice: totalPrice,
        tax: tax,
        deliveryCharge: deliveryCharge,
      },
    };
    console.log('data masuk', data);
    navigation.navigate('Payment');
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Header secondary label="My Cart" />
        <View style={styles.content}>
          <Gap height={40} />
          <CartItem
            name={name}
            price={base_price.toLocaleString('en')}
            img={{uri: picture}}
            onValueChange={onCouter}
          />
          <ButtonInfo
            label="Apply Delivery Coupons"
            buttonColor="#FFBA33"
            onPress={() => navigation.navigate('Coupon')}
          />
          <Gap height={20} />
          <View style={styles.wrapperMainPrice}>
            <View style={styles.wrapperPrice}>
              <Text style={styles.titlePrice}>Item Total</Text>
              <Text>IDR {itemTotal.toLocaleString('en')}</Text>
            </View>
            <Gap height={20} />
            <View style={styles.wrapperPrice}>
              <Text style={styles.titlePrice}>Delivery Charge</Text>
              <Text>IDR {deliveryCharge.toLocaleString('en')}</Text>
            </View>
            <Gap height={20} />
            <View style={styles.wrapperPrice}>
              <Text style={styles.titlePrice}>Tax</Text>
              <Text>IDR {tax.toLocaleString('en')}</Text>
            </View>
            <Gap height={30} />
            <View style={styles.wrapperPrice}>
              <Text style={styles.total}>Total </Text>
              <Text style={styles.total}>
                IDR {totalPrice.toLocaleString('en')}
              </Text>
            </View>
          </View>
          <ButtonInfo
            label="CHECKOUT"
            buttonColor="#FFBA33"
            onPress={onOrder}
          />
          <Gap height={50} />
        </View>
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
