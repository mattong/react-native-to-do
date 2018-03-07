import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoContainer from './react/ToDoContainer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ToDoContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
});
