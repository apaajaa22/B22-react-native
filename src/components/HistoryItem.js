import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/Feather';
import {LogBox} from 'react-native';
import {ILForgotPassword} from '../assets';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {getData} from '../utils/storage';
import {useDispatch} from 'react-redux';
import {getDetailHistory} from '../redux/action/history';
import Gap from './Gap';

const HistoryItem = ({onOpen, onClose, onPress, name, price, idHistory}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {details} = useSelector(state => state.historyReducer);
  const [token, setToken] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getDetailHistory(token, idHistory));
    getData('token').then(res => {
      setToken(res);
    });
    LogBox.ignoreAllLogs();
  }, [dispatch, idHistory, token, modalVisible]);

  return (
    <>
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Transaction</Text>
              {details?.results?.map(data => {
                return (
                  <View key={data.name} style={styles.wrapperDetails}>
                    <Text style={styles.modalText}>{data.name}</Text>
                    <Gap width={40} />
                    <View>
                      <Text style={styles.modalText}>
                        IDR {data.price.toLocaleString('en')}
                      </Text>
                      <Gap width={10} />
                      <Text style={styles.modalText}>
                        {data.amount} x {data.variants}
                      </Text>
                    </View>
                  </View>
                );
              })}
              {details?.invoice?.map(data => {
                const totalPrice = data.total + data.tax + data.shipping_cost;
                return (
                  <View key={data.id} style={styles.containerDetail}>
                    <View style={styles.detailUserTransaction}>
                      <Text style={styles.label}>Id Transaction</Text>
                      <Text style={styles.label}>{data.id}</Text>
                    </View>
                    <View style={styles.detailUserTransaction}>
                      <Text style={styles.label}>Payment Method</Text>
                      <Text style={styles.label}>{data.payment_method}</Text>
                    </View>
                    <View style={styles.detailUserTransaction}>
                      <Text style={styles.label}>Shipping Address</Text>
                      <Text style={styles.label}>{data.shipping_address}</Text>
                    </View>
                    <View style={styles.detailUserTransaction}>
                      <Text style={styles.label}>Shipping Cost</Text>
                      <Text style={styles.label}>
                        IDR {data.shipping_cost.toLocaleString('en')}
                      </Text>
                    </View>
                    <View style={styles.detailUserTransaction}>
                      <Text style={styles.label}>Tax</Text>
                      <Text style={styles.label}>
                        IDR {data.tax.toLocaleString('en')}
                      </Text>
                    </View>
                    <View style={styles.detailUserTransaction}>
                      <Text style={styles.totalPrice}>Total</Text>
                      <Text style={styles.totalPrice}>
                        IDR {totalPrice.toLocaleString('en')}
                      </Text>
                    </View>
                  </View>
                );
              })}
              <Gap height={10} />
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close detail history</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Swipeable
            rightButtons={[
              <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.7}
                style={[styles.rightSwipeItem, styles.rightAdd]}>
                <Icon name="trash-2" color="#fff" size={30} />
              </TouchableOpacity>,
            ]}
            onRightButtonsOpenRelease={onOpen}
            onRightButtonsCloseRelease={onClose}>
            <View style={[styles.listItem, styles.listItemAdd]}>
              <Image source={ILForgotPassword} style={styles.picture} />
              <View style={styles.wrapperContent}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.price}>IDR {price}</Text>
                <Text style={styles.delivery}>
                  Waiting for delivery [will arrive at 3 PM]
                </Text>
              </View>
            </View>
          </Swipeable>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  listItem: {
    height: 102,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    flexDirection: 'row',
  },
  rightSwipeItem: {
    width: 60,
    height: 60,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60 / 2,
  },
  rightAdd: {backgroundColor: '#6A4029'},
  listItemAdd: {
    backgroundColor: '#fff',
    marginHorizontal: 31,
    marginBottom: 20,
  },
  picture: {
    width: 69,
    height: 69,
    borderRadius: 69 / 2,
    marginRight: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    marginBottom: 5,
    color: '#6A4029',
  },
  delivery: {
    color: '#6A4029',
  },
  centeredView: {
    justifyContent: 'center',
    backgroundColor: '#000000a0',
    height: '100%',
    width: '100%',
  },
  modalView: {
    margin: 31,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: '#6A4029',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 17,
  },
  wrapperDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  detailUserTransaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 6,
  },
  containerDetail: {
    justifyContent: 'center',
    width: '100%',
  },
  label: {
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
