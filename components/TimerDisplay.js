import React from 'react';
import { StyleSheet, Text } from 'react-native';
import formatTimeDisplay from './formatTimeDisplay';

const TimerDisplay = (props) => {
  return (
    <Text style={styles.text}>{props.counter.minutes || props.counter.seconds ? formatTimeDisplay(props.counter) : '0:00'}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#66ff99',
    fontSize: 48,
    textAlign: 'center',
  },
})

export default TimerDisplay;