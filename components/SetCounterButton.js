import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const SetCounterButton = (props) => {
  if (!props.isCounterSet) {
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
        onPress={props.resetCounterValues}
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

export default SetCounterButton;