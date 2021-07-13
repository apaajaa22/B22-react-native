import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ILCard} from '../assets';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Header from '../components/Header';
import {createTransaction} from '../redux/action/cart';
import {getData} from '../utils/storage';

const Payment = ({route, navigation}) => {
  const {products} = useSelector(state => state.carts);
  const {checked, amount} = route.params;
  const [token, setToken] = useState('');

  useEffect(() => {
    getData('token').then(res => {
      setToken(res);
    });
  }, []);
  console.log(checked);
  console.log(amount);
  const dispatch = useDispatch();

  const onPay = () => {
    dispatch(createTransaction(amount, checked, token, navigation));
  };

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
            {amount.map(data => {
              return (
                <View style={styles.wrapperItemList}>
                  <View>
                    <Text style={styles.product}>
                      {data.amount} {data.product}
                    </Text>
                    <Gap height={5} />
                    <Text>{data.name}</Text>
                  </View>
                  <Text style={styles.product}>
                    IDR {data.price.toLocaleString('en')}
                  </Text>
                </View>
              );
            })}
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
        <Button
          label="Pay Now"
          colorButton="#6A4029"
          textColorButton="#fff"
          onPress={onPay}
        />
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
