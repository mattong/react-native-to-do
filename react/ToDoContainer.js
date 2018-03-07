import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  FlatList,
  Dimensions
} from 'react-native';

const ToDoContainer = ({handleTextChange, handleSubmit, text, tasks}) => {
  width = Dimensions.get('window').width - 100
  return (
    <KeyboardAvoidingView behavior="padding">
      <FlatList
        data={tasks}
        renderItem={({item}) => <Text> &#9654; {item.text}</Text>}
      />
      <TextInput
        style={{backgroundColor: '#ededed', height: 30 , width: width}}
        editable={true}
        onSubmitEditing={handleSubmit}
        onChangeText={handleTextChange}
        maxLength={40}
        placeholder="To do mo 'to"
        returnKeyType="done"
        returnKeyLabel="Add To Do"
        value={text}
      />
    </KeyboardAvoidingView>
  )
}

export default ToDoContainer

