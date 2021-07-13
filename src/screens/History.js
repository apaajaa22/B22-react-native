import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IcHand, ILNoHistory, ILUserDefault} from '../assets';
import Button from '../components/Button';
import Header from '../components/Header';
import HistoryItem from '../components/HistoryItem';
import {getDetailHistory, getHistory} from '../redux/action/history';
import {getData} from '../utils/storage';

const History = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const {history} = useSelector(state => state.historyReducer);

  useEffect(() => {
    getData('token').then(res => {
      console.log(res);
      setToken(res);
    });
    dispatch(getHistory(token));
  }, [dispatch, token]);

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header secondary />
        <View style={styles.container}>
          <Text style={styles.title}>Order History</Text>
          <View style={styles.wrapperSubTitle}>
            <Image source={IcHand} />
            <Text style={styles.subTitle}>Swipe on an item to delete</Text>
          </View>
        </View>
        {history.length < 1 ? (
          <View style={styles.containerNoHistory}>
            <View style={styles.wrapperNoHistory}>
              <Image source={ILNoHistory} />
              <Text style={styles.noHistoryTitle}>No history yet</Text>
              <Text style={styles.noHistorySubTitle}>
                Hit the orange button down below to Create an order
              </Text>
            </View>
            <Button
              colorButton="#6A4029"
              textColorButton="#fff"
              label="Start Ordering"
            />
          </View>
        ) : (
          history.map(data => {
            const totalPrice = data.total + data.tax + data.shipping_cost;
            return (
              <HistoryItem
                key={data.id}
                name={data.code}
                price={totalPrice.toLocaleString('en')}
                idHistory={data.id}
              />
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: '#F5F5F8', flex: 1},
  container: {
    paddingHorizontal: 31,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  wrapperSubTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  subTitle: {
    marginLeft: 10,
    marginBottom: 30,
  },
  containerNoHistory: {justifyContent: 'center'},
  wrapperNoHistory: {
    alignItems: 'center',
    marginVertical: 120,
  },
  noHistoryTitle: {fontWeight: 'bold', fontSize: 28, marginTop: 10},
  noHistorySubTitle: {
    fontSize: 17,
    fontWeight: '400',
    width: 234,
    textAlign: 'center',
    marginTop: 10,
  },
});
