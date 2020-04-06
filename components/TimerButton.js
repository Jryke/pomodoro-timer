import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TimerButton = (props) => {
  const renderButtonText = props.isActive ? 'Stop Timer' : 'Start Timer';
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.toggleTimer}
    >
      <Text>{renderButtonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default TimerButton;