import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Chat = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.chatContent}>This is Chat Page</Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatContent: {
    fontSize: 20,
  },
});
