import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const App = () => {
  const [intervalType, setintervalType] = useState('work')
  const [workIntervalInput, setWorkIntervalInput] = useState();
  const [breakIntervalInput, setBreakIntervalInput] = useState();
  const [workInterval, setWorkInterval] = useState();
  const [breakInterval, setBreakInterval] = useState();
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState();

  const renderIntervalInputs = () => {
    if (!workInterval && !breakInterval) {
      return (
        <View>
          <View style={styles.inputContainer}>
            <Text>Work Interval: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={number => setWorkIntervalInput(number)}
              placeholder='0'
              defaultValue={workInterval}
              keyboardType={'numeric'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Break Interval: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={number => setBreakIntervalInput(number)}
              placeholder='0'
              defaultValue={breakInterval}
              keyboardType={'numeric'}
            />
          </View>
        </View>
      );
    };
  };

  const renderCounterButton = () => {
    if (!workInterval && !breakInterval) {
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={onSetCounterClick}
        >
          <Text>Set Counter</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={resetCounterValues}
        >
          <Text>Reset Counter</Text>
        </TouchableOpacity>
      )
    }
  }

  const renderTimerButtonText = () => isActive ? 'Stop Timer' : 'Start Timer';

  const toggleTimer = () => {
    setIsActive(isActive => !isActive)
  };

  const onSetCounterClick = () => {
    setWorkInterval(workIntervalInput);
    setBreakInterval(breakIntervalInput);
    setCounter(workIntervalInput);
  };

  const resetCounterValues = () => {
    setWorkInterval(null);
    setBreakInterval(null);
  }

  useEffect(() => {
    let interval = null;
    // when timer hits 0 - toggle work/break & reset counter
    if (counter === 0) {
      console.log('timer hit 0')
      // clearInterval(interval);
      if (intervalType === 'work') {
        setintervalType('break') 
        setCounter(breakInterval)
      } else if (intervalType === 'break') {
        setintervalType('work') 
        setCounter(workInterval)
      }
    }
    // interval to update counter each second, stop when timer not active
    if (isActive) {
      interval = setInterval(() => {
        setCounter(counter => counter - 1)
      }, 1000);
    } else if (!isActive && counter !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, counter]);

  return (
    <View style={styles.container}>
      <Text>Current: {intervalType}</Text>
      <Text>Timer: {counter}</Text>
      {renderIntervalInputs()}
      {renderCounterButton()}
      <TouchableOpacity
        style={styles.button}
        onPress={toggleTimer}
      >
        <Text>{renderTimerButtonText()}</Text>
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