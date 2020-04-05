import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const App = () => {
  const [intervalInfo, setIntervalInfo] = useState({
    type: 'work',
    length: workInterval
  })
  const [workIntervalInput, setWorkIntervalInput] = useState();
  const [breakIntervalInput, setBreakIntervalInput] = useState();
  const [workInterval, setWorkInterval] = useState();
  const [breakInterval, setBreakInterval] = useState();
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

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
  };

  const resetCounterValues = () => {
    setWorkInterval(null);
    setBreakInterval(null);
  }

  useEffect(() => {
    // set counter to work interval and count down

    // after count hits zero, change intervalInfo.type to !intervalInfo.type and intervalInfo.length to ${intervalInfo.type}Interval
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