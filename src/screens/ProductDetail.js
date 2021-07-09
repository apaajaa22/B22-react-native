import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILForgotPassword} from '../assets';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Header from '../components/Header';

const ProductDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header third />
      <View style={styles.wrapperPicture}>
        <Image source={ILForgotPassword} style={styles.picture} />
      </View>
      <View style={styles.wrapperName}>
        <Text style={styles.name}>Cold Brew</Text>
        <Text style={styles.price}>IDR 30.000</Text>
      </View>
      <View style={styles.wrapperDelivery}>
        <Text style={styles.title}>Delivery info</Text>
        <Text style={styles.subTitle}>
          Delivered only on monday until friday from 1 pm to 7 pm
        </Text>
      </View>
      <View style={styles.wrapperInfo}>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.subTitle}>
          Cold brewing is a method of brewing that combines ground coffee and
          cool water and uses time instead of heat to extract the flavor. It is
          brewed in small batches and steeped for as long as 48 hours.
        </Text>
      </View>
      <Button
        label="Add to cart"
        colorButton="#6A4029"
        textColorButton="#fff"
        onPress={() => navigation.navigate('Cart')}
      />
      <Gap height={40} />
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {backgroundColor: '#F2F2F2', flex: 1},
  wrapperPicture: {alignItems: 'center'},
  picture: {
    width: 240,
    height: 240,
    borderRadius: 240 / 2,
  },
  wrapperName: {
    alignItems: 'center',
    marginVertical: 30,
  },
  wrapperDelivery: {paddingHorizontal: 31, marginBottom: 20},
  wrapperInfo: {
    paddingHorizontal: 31,
    flex: 1,
  },
  name: {fontSize: 28, fontWeight: 'bold'},
  price: {fontSize: 22, color: '#6A4029', fontWeight: 'bold'},
  title: {fontWeight: 'bold', fontSize: 17},
  subTitle: {fontSize: 15, color: '#000000'},
});
