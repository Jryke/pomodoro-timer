import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const App = () => {
  const [workInterval, setWorkInterval] = useState();
  const [breakInterval, setBreakInterval] = useState();

  const startTimer = () => console.log('start timer clicked');

  return (
    <View style={styles.container}>
      <Text>Current: working</Text>
      <Text>Timer: 0</Text>
      <View style={styles.inputContainer}>
        <Text>Work Interval: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={number => setWorkInterval(number)}
          placeholder='0'
          defaultValue={workInterval}
          keyboardType={'numeric'}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Break Interval: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={number => setBreakInterval(number)}
          placeholder='0'
          defaultValue={breakInterval}
          keyboardType={'numeric'}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={startTimer}
      >
        <Text>Start Timer</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row'
  },
  textInput: {
    height: 20,
    width: 40,
    borderColor: 'gray', 
    borderWidth: 1
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default App;