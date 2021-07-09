import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Header from '../components/Header';
import {RadioButton} from 'react-native-paper';

const Checkout = ({navigation}) => {
  const [checked, setChecked] = React.useState('Door Delivery');

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header secondary label="Checkout" />
        <View style={styles.wrapper}>
          <Text style={styles.title}>Delivery</Text>
          <View style={styles.wrapperSub}>
            <Text style={styles.subText}>Address details</Text>
            <Text style={styles.subTextChange}>change</Text>
          </View>
          <View style={styles.wrapperContent}>
            <View style={styles.wrapperAddress}>
              <Text style={styles.textAddress}>Iskandar Street</Text>
              <Text style={styles.textAddress}>
                Km 5 refinery road oppsite re public road, effurun, Jakarta
              </Text>
              <Text>+62 81348287878</Text>
            </View>
          </View>
          <View style={styles.wrapperSub}>
            <Text style={styles.subText}>Delivery methods</Text>
          </View>
          <View style={styles.wrapperContent}>
            <View style={styles.wrapperAddress}>
              <View style={styles.wrapperRadio}>
                <RadioButton
                  value="Door Delivery"
                  status={checked === 'Door Delivery' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('Door Delivery')}
                />
                <Text>Door Delivery</Text>
              </View>
              <View style={styles.wrapperRadio}>
                <RadioButton
                  value="store"
                  status={checked === 'store' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('store')}
                />
                <Text>Pick up at store</Text>
              </View>
              <View style={styles.wrapperRadio}>
                <RadioButton
                  value="Dine in"
                  status={checked === 'Dine in' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('Dine in')}
                />
                <Text>Dine in</Text>
              </View>
            </View>
          </View>
          <View style={styles.wrapperSub}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.totalPrice}>IDR 123.000</Text>
          </View>
        </View>
        <Gap height={30} />
        <Button
          label="Proceed to payment"
          colorButton="#6A4029"
          textColorButton="#fff"
          onPress={() => navigation.navigate('Payment')}
        />
        <Gap height={40} />
      </ScrollView>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 31,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 34,
  },
  wrapperSub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
  },
  subText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTextChange: {
    fontSize: 15,
  },
  wrapperAddress: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: '100%',
  },
  wrapperContent: {
    alignItems: 'center',
  },
  textAddress: {
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    paddingBottom: 10,
    marginBottom: 10,
  },
  total: {fontSize: 17},
  totalPrice: {fontSize: 22, fontWeight: 'bold'},
  wrapperRadio: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    paddingBottom: 10,
    marginBottom: 10,
  },
});
