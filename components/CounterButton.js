import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CounterButton = (props) => {
  if (props.showInputs) {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={props.onSetCounterClick}
      >
        <Text>Set Counter</Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={props.setShowInputs}
      >
        <Text>Reset Counter</Text>
      </TouchableOpacity>
    )
  }
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default CounterButton;