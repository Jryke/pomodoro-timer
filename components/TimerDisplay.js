import React from 'react';
import { Text } from 'react-native';
import formatTimeDisplay from './formatTimeDisplay';

const TimerDisplay = (props) => {
  return (
    <Text>{props.counter.minutes || props.counter.seconds ? formatTimeDisplay(props.counter) : null}</Text>
  );
};

export default TimerDisplay;