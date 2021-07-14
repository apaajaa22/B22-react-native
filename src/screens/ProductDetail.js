import React, {useEffect} from 'react';
import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {ILForgotPassword} from '../assets';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Header from '../components/Header';
import {addProducts, updateProducts} from '../redux/action/cart';
import {getFoodDetail} from '../redux/action/home';

const ProductDetail = ({navigation, route}) => {
  const {id, name, price, picture, delivery_on, description} = route.params;
  const [priceProduct, setPriceProduct] = useState(price);
  const {detailProduct} = useSelector(state => state.homeReducer);
  const [selectVariant, setSelectVariant] = useState('');
  const [press, setPress] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodDetail(id));
  }, [dispatch, id, navigation, products, selectVariant]);

  const pressVariant = idx => {
    setPress(true);
    console.log(press);
    const getPrice = detailProduct.variants[idx].price;
    const getVariant = detailProduct.variants[idx];
    setPriceProduct(getPrice);
    setSelectVariant(getVariant);
  };
  const {products} = useSelector(state => state.carts);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header third />
        <View style={styles.wrapperPicture}>
          <Image source={{uri: picture}} style={styles.picture} />
        </View>
        <View style={styles.wrapperName}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>
            IDR {priceProduct.toLocaleString('en')}
          </Text>
        </View>
        <View style={styles.containerVariant}>
          {detailProduct.variants?.map((data, idx) => {
            return (
              <TouchableOpacity
                onPress={() => pressVariant(idx)}
                activeOpacity={0.7}
                key={data.price}
                style={styles.wrapperVariant(press)}>
                <Text style={styles.textVariant}>{data.code}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.wrapperDelivery}>
          <Text style={styles.title}>Delivery info</Text>
          <Text style={styles.subTitle}>{delivery_on}</Text>
        </View>
        <View style={styles.wrapperInfo}>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.subTitle}>{description}</Text>
        </View>
        <Gap height={40} />
        <Button
          label="Add to cart"
          colorButton="#6A4029"
          textColorButton="#fff"
          // onPress={() => navigation.navigate('Cart')}
          onPress={() => dispatch(addProducts(selectVariant))}
        />
        <Gap height={40} />
      </ScrollView>
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
  containerVariant: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  wrapperVariant: press => ({
    width: 70,
    height: 70,
    backgroundColor: press ? '#FFBA33' : '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70 / 2,
    marginHorizontal: 20,
  }),
  textVariant: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
