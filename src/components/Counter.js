import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateProducts} from '../redux/action/cart';

const Counter = ({onValueChange, productId}) => {
  const [value, setValue] = useState(1);
  const [total, setTotal] = useState(1);
  const {products} = useSelector(state => state.carts);
  const [finalData, setFinalData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('id', productId);
    if (products) {
      const data = products.map(res => {
        return {
          ...res,
          amount: total,
        };
      });
      setFinalData(data);
    }
    onValueChange(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, value, onValueChange]);

  // useEffect(() => {
  //   onValueChange(value);
  // }, [onValueChange, value]);

  const onCount = type => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }
    const idx = products.findIndex(obj => obj.id === productId);
    products[idx].amount = result;
    onValueChange(result);
    dispatch(updateProducts(products));
    setValue(result);
    // console.log(finalData);
  };
  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.gap} onPress={() => onCount('minus')}>
        <Text style={styles.wrapperIcon}>-</Text>
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity style={styles.gap} onPress={() => onCount('plus')}>
        <Text style={styles.wrapperIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 135,
    justifyContent: 'space-between',
  },
  gap: {
    width: 31,
    height: 31,
    backgroundColor: '#E7AA36',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 31 / 2,
  },
  value: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  wrapperIcon: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
