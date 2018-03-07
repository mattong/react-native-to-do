import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import ToDoContainer from './react/ToDoContainer';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: [],
      text: ''
    }
  }

  handleTextChange = (text) => {
    this.setState({text: text})
  }

  handleSubmit = () => {
    const {tasks, text} = this.state
    this.setState({
      tasks: tasks.concat({key: tasks.length, text: text}),
      text: ''
    })
  }

  render() {
    const { handleTextChange, handleSubmit } = this
    return (
      <View style={styles.container}>
        <ToDoContainer
          handleTextChange={handleTextChange}
          handleSubmit={handleSubmit}
          text={this.state.text}
          tasks={this.state.tasks}
        />
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
    paddingTop: 24
  },
});
