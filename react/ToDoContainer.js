import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

class ToDoContainer extends React.Component {
  render() {
    return (
    <View>
      <Text> HUHUBELLS </Text>
      <TextInput style={{backgroundColor: '#ededed', height: 60 }} editable={true} maxLength={40}/>
    </View>
    )
  }
}

export default ToDoContainer

