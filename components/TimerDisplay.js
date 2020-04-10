import React from 'react';
import { Text } from 'react-native';

const renderCountdown = counter => {
  if (counter.minutes != null) {
    if (counter.seconds < 10) return `${counter.minutes}:0${counter.seconds}`
    return `${counter.minutes}:${counter.seconds}`
  }
  if (counter.seconds < 10) return `0:0${counter.seconds}`
  return `0:${counter.seconds}`
};

const TimerDisplay = (props) => {
  return (
    <Text>{props.counter.minutes || props.counter.seconds ? renderCountdown(props.counter) : null}</Text>
  );
};

export default TimerDisplay;