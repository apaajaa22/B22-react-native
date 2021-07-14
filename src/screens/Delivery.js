import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RadioButton} from 'react-native-paper';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Header from '../components/Header';

const Delivery = ({navigation, route}) => {
  const {profile} = useSelector(state => state.photoReducer);
  const [checked, setChecked] = React.useState('Door delivery');
  const {amount, itemTotal, tax, totalPrice, deliveryCharge} = route.params;

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header secondary label="Checkout" />
        <View style={styles.container}>
          <Text style={styles.title}>Delivery</Text>
          <View style={styles.wrapperInfo}>
            <Text style={styles.subTitle}>Address details</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}>
              <Text>change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperContentUser}>
            <Text style={styles.name}>{profile[0]?.name}</Text>
            <Text style={styles.contact}>{profile[0]?.address}</Text>
            <Text style={styles.contact}>{profile[0]?.phone_number}</Text>
          </View>
          <Gap height={30} />
          <Text style={styles.deliveryTitle}>Delivery methods</Text>
          <Gap height={20} />
          <View style={styles.wrapperDelivery}>
            <View style={styles.wrapperRadio}>
              <RadioButton
                color="#6A4029"
                value="Door delivery"
                status={checked === 'Door delivery' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Door delivery')}
              />
              <Gap width={15} />
              <Text style={styles.deliveryInput}>Door delivery</Text>
            </View>
            <View style={styles.wrapperRadio}>
              <RadioButton
                color="#6A4029"
                value="Pick up at store"
                status={
                  checked === 'Pick up at store' ? 'checked' : 'unchecked'
                }
                onPress={() => setChecked('Pick up at store')}
              />
              <Gap width={15} />
              <Text style={styles.deliveryInput}>Pick up at store</Text>
            </View>
            <View style={styles.wrapperRadio}>
              <RadioButton
                color="#6A4029"
                value="Dine in"
                status={checked === 'Dine in' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Dine in')}
              />
              <Gap width={15} />
              <Text style={styles.deliveryInput}>Dine in</Text>
            </View>
          </View>
          <Gap height={20} />
          <View style={styles.wrapperInfo}>
            <Text style={styles.subTitle}>Total</Text>
            <Text style={styles.subTitle}>
              IDR {totalPrice.toLocaleString('en')}
            </Text>
          </View>
        </View>
        <Gap height={20} />
        <Button
          label="Proceed to payment"
          textColorButton="#FFF"
          colorButton="#6A4029"
          onPress={() =>
            navigation.navigate('Payment', {
              checked: checked,
              amount: amount,
              itemTotal: itemTotal,
              tax: tax,
              totalPrice: totalPrice,
              deliveryCharge: deliveryCharge,
            })
          }
        />
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 31,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  wrapperInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitle: {fontWeight: 'bold', fontSize: 18, marginBottom: 10},
  wrapperContentUser: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
  },
  name: {
    fontWeight: '500',
    fontSize: 17,
    borderBottomColor: '#6A4029',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 8,
  },
  contact: {
    color: '#6A4029',
    borderBottomColor: '#6A4029',
    borderBottomWidth: 1,
    fontSize: 15,
    paddingBottom: 5,
    marginBottom: 8,
  },
  deliveryTitle: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  wrapperDelivery: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
  },
  wrapperRadio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryInput: {
    borderBottomColor: '#6A4029',
    borderBottomWidth: 1,
    color: '#6A4029',
    flex: 1,
    fontSize: 17,
    marginBottom: 20,
    paddingBottom: 10,
  },
});
