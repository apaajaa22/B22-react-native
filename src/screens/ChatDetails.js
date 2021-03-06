/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useState} from 'react';
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Gap from '../components/Gap';
import HeaderChat from '../components/HeaderChat';
import ItemChat from '../components/ItemChat';
import IconCamera from 'react-native-vector-icons/FontAwesome5';
import IconSubmit from 'react-native-vector-icons/Feather';
import {useEffect} from 'react';
import {deleteChat, getChat, sendChat} from '../redux/action/chat';
import {getData} from '../utils/storage';
import {useDispatch, useSelector} from 'react-redux';
import {io} from 'socket.io-client';
import {ILUserDefault} from '../assets';

const socket = io('http://localhost:8080');

const ChatDetails = ({navigation, route}) => {
  const {recipient, sender, name, picture} = route.params;
  const {profile} = useSelector(state => state.photoReducer);
  const dispatch = useDispatch();
  const {chat} = useSelector(state => state.chat);
  const [input, setInput] = useState('');
  useEffect(() => {
    getData('token').then(res => {
      dispatch(
        getChat(res, profile[0]?.phone_number === sender ? recipient : sender),
      );
      socket.on(profile[0]?.phone_number, data => {
        dispatch(
          getChat(
            res,
            profile[0]?.phone_number === sender ? recipient : sender,
          ),
        );
      });
    });
    console.log(route.params);
  }, []);

  const onSend = () => {
    console.log(input);
    const form = {
      message: input,
      recipient: profile[0]?.phone_number === sender ? recipient : sender,
    };
    getData('token').then(res => {
      dispatch(sendChat(res, form));
    });
    setInput('');
  };
  const onDelete = e => {
    console.log(e);
    Alert.alert(
      'Are you sure delete this chat?',
      "You won't be able to revert this!",
      [
        {
          text: 'Yes',
          onPress: () =>
            getData('token').then(res => {
              dispatch(
                deleteChat(
                  res,
                  e.id,
                  profile[0]?.phone_number === sender ? recipient : sender,
                ),
              );
            }),
        },
        {text: 'No', onPress: () => console.log('button tidak')},
      ],
    );
  };

  const scrollViewRef = useRef();

  return (
    <View style={styles.container}>
      <HeaderChat
        pic={picture !== null ? {uri: picture} : ILUserDefault}
        name={name}
        email={profile[0]?.phone_number === sender ? recipient : sender}
      />
      <Gap height={10} />
      <ScrollView
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}>
        {chat.message?.map(res => {
          const isMe = profile[0]?.phone_number === res.sender;
          return (
            <ItemChat
              onPress={() => onDelete(res)}
              isMe={isMe}
              pic={
                res.picture !== null
                  ? {uri: isMe ? chat.sender.picture : chat.recipient.picture}
                  : ILUserDefault
              }
              msg={res.message}
            />
          );
        })}
      </ScrollView>
      <View style={styles.wrapperInput}>
        <TextInput
          value={input}
          onChangeText={e => setInput(e)}
          placeholder="Type a message..."
        />
        <View style={styles.wrapperIcon}>
          <TouchableOpacity activeOpacity={0.7}>
            <IconCamera name="camera" size={20} />
          </TouchableOpacity>
          <Gap width={20} />
          <TouchableOpacity onPress={onSend} activeOpacity={0.7}>
            <IconSubmit name="send" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatDetails;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  wrapperInput: {
    marginHorizontal: 31,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperIcon: {
    flexDirection: 'row',
  },
});
