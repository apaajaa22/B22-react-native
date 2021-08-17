import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILUserDefault} from '../assets';
import Gap from './Gap';
import ItemChatMe from './ItemChatMe';
import ItemChatOthers from './ItemChatOthers';

const ItemChat = ({isMe, pic, msg, onPress}) => {
  if (isMe) {
    return <ItemChatMe onPress={onPress} pic={pic} msg={msg} />;
  } else {
    return <ItemChatOthers pic={pic} msg={msg} />;
  }
};

export default ItemChat;
