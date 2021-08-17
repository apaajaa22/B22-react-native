/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {ILUserDefault} from '../assets';
import CardChat from '../components/CardChat';
import Gap from '../components/Gap';
import Header from '../components/Header';
import {getAllUser, getUserChat} from '../redux/action/chat';
import {getData} from '../utils/storage';

const Chat = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.chat);
  const {allUser} = useSelector(state => state.chat);
  const {profile} = useSelector(state => state.photoReducer);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getData('token').then(res => {
      dispatch(getUserChat(res));
      dispatch(getAllUser(res, search));
    });
    console.log(user);
  }, [navigation]);

  const onSearch = () => {
    getData('token').then(res => {
      dispatch(getAllUser(res, search));
    });
  };

  return (
    <View style={styles.container}>
      <Header secondary />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.chatContent}>Chat</Text>
        <View style={styles.searchWrapper}>
          <Gap width={10} />
          <TouchableOpacity onPress={onSearch}>
            <View style={styles.wrapperIcon}>
              <Icon name="search" size={25} color="#000" />
            </View>
          </TouchableOpacity>
          <Gap width={10} />
          <TextInput
            placeholderTextColor="grey"
            style={styles.searchInput}
            placeholder="Search"
            value={search}
            onChangeText={e => setSearch(e)}
          />
          <TouchableOpacity
            style={styles.wrapperCloseBtn}
            onPress={() => setSearch('')}>
            <Text style={styles.closeBtn}>X</Text>
          </TouchableOpacity>
        </View>
        <Gap height={10} />
        {search.length <= 0
          ? user.message?.map(res => {
              const isMe = profile[0]?.id === res.id_users;
              return (
                <CardChat
                  isMe={isMe}
                  onPress={() => navigation.navigate('ChatDetails', res)}
                  pic={{uri: res.picture}}
                  name={res.name}
                  msg={res.message}
                />
              );
            })
          : allUser?.map(res => {
              const isMe = profile[0]?.id === res.id_users;
              return (
                <CardChat
                  isMe={isMe}
                  onPress={() => navigation.navigate('ChatDetailsSec', res)}
                  pic={
                    res.picture !== null ? {uri: res.picture} : ILUserDefault
                  }
                  name={res.name}
                  msg={res.message}
                />
              );
            })}
      </ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  chatContent: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 31,
  },
  searchWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEEEE',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
  },
  wrapperIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    fontSize: 16,
    color: 'black',
    flex: 1,
  },
  wrapperCloseBtn: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingHorizontal: 7,
  },
  closeBtn: {
    fontSize: 20,
    color: 'white',
  },
});
