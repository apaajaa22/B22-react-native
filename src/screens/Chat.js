import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
const Chat = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  console.log(date);
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View>
      <Picker
        style={{width: 120}}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="sortir" value="" />
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <View>
        <Button
          onPress={showDatepicker}
          title="Show date picker!"
          style={{backgroundColor: '#fff', color: '#000'}}
        />
        <Text>{date.toString()}</Text>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={false}
          display="calendar"
          onChange={onChange}
          dayOfWeekFormat={'{dayofweek.abbreviated(2)}'}
        />
      )}
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
