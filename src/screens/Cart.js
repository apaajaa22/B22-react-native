import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ILNoOrder} from '../assets';
import Button from '../components/Button';
import ButtonInfo from '../components/ButtonInfo';
import CartItem from '../components/CartItem';
import Gap from '../components/Gap';
import Header from '../components/Header';

const Cart = ({navigation, route}) => {
  const [total, setTotal] = useState(1);
  const {products} = useSelector(state => state.carts);
  const [finalData, setFinalData] = useState(null);
  console.log('products', products);

  useEffect(() => {
    console.log('products ini', products);
    if (products) {
      const data = products.map(res => {
        return {
          ...res,
          amount: total,
        };
      });
      setFinalData(data);
      console.log('final data', finalData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  const onCouter = e => {
    console.log(e);
  };

  const tax = 10 / 100;
  const deliveryCharge = 10000;

  const onOrder = () => {
    navigation.navigate('Delivery', {amount: finalData});
  };
  return (
    <View style={styles.mainContainer}>
      {products.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header secondary label="My Cart" />
          <View style={styles.content}>
            <Gap height={40} />
            {products.map((data, idx) => {
              return (
                <CartItem
                  key={data.id}
                  name={data.product}
                  price={data.price.toLocaleString('en')}
                  img={{uri: data.picture}}
                  onValueChange={onCouter}
                  productId={data.id}
                />
              );
            })}
            <ButtonInfo
              label="Apply Delivery Coupons"
              buttonColor="#FFBA33"
              onPress={() => navigation.navigate('Coupon')}
            />
            <Gap height={20} />
            <View style={styles.wrapperMainPrice}>
              <View style={styles.wrapperPrice}>
                <Text style={styles.titlePrice}>Item Total</Text>
                <Text>IDR 10000</Text>
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
                <Text style={styles.total}>IDR 10000</Text>
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
      ) : (
        <View>
          <Header secondary label="My Cart" />
          <View style={styles.containerNoHistory}>
            <View style={styles.wrapperNoHistory}>
              <Image source={ILNoOrder} style={styles.pictureNoHistory} />
              <Text style={styles.noHistoryTitle}>No orders yet</Text>
              <Text style={styles.noHistorySubTitle}>
                Hit the brown button down below to Create an order
              </Text>
            </View>
            <Button
              colorButton="#6A4029"
              textColorButton="#fff"
              label="Start Ordering"
              onPress={() => navigation.navigate('MainApp')}
            />
          </View>
        </View>
      )}
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
  containerNoHistory: {justifyContent: 'center'},
  wrapperNoHistory: {
    alignItems: 'center',
    marginVertical: 120,
    justifyContent: 'center',
  },
  noHistoryTitle: {fontWeight: 'bold', fontSize: 28, marginTop: 10},
  noHistorySubTitle: {
    fontSize: 17,
    fontWeight: '400',
    width: 234,
    textAlign: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  pictureNoHistory: {
    marginLeft: -20,
    marginBottom: 20,
  },
});
