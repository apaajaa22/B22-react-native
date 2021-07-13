import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

const Counter = ({onValueChange, id}) => {
  const [value, setValue] = useState(1);
  const [total, setTotal] = useState(1);
  const {products} = useSelector(state => state.carts);
  const [finalData, setFinalData] = useState(null);
  console.log(products.id);
  useEffect(() => {
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

  useEffect(() => {
    onValueChange(value);
  }, [onValueChange, value]);

  const onCount = type => {
    let result = value;
    if (type === 'plus') {
      const idx = products.findIndex(obj => obj.id === products.id);
      products[idx].amount = setValue(result);
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
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
