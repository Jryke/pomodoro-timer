import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const App = () => {
  const [workInterval, setWorkInterval] = useState();
  const [breakInterval, setBreakInterval] = useState();
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  const renderButtonText = () => isActive ? 'Stop Timer' : 'Start Timer'

  const onPress = () => {
    setIsActive(isActive => !isActive)
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setCounter(counter => counter + 1)
      }, 1000);
    } else if (!isActive && counter !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, counter]);

  return (
    <View style={styles.container}>
      <Text>Current: working</Text>
      <Text>Timer: {counter}</Text>
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
        onPress={onPress}
      >
        <Text>{renderButtonText()}</Text>
      </TouchableOpacity>

    </View>
  );
};

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