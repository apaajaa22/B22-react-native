import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {IcHand} from '../assets';
import Header from '../components/Header';
import HistoryItem from '../components/HistoryItem';

const History = () => {
  return (
    <View style={styles.mainContainer}>
      <Header secondary />
      <View style={styles.container}>
        <Text style={styles.title}>Order History</Text>
        <View style={styles.wrapperSubTitle}>
          <Image source={IcHand} />
          <Text style={styles.subTitle}>Swipe on an item to delete</Text>
        </View>
      </View>
      <ScrollView
        style={styles.wrapperItem}
        showsVerticalScrollIndicator={false}>
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
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
  wrapperItem: {},
});
