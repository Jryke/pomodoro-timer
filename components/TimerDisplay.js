import React from 'react';
import { Text } from 'react-native';

const renderCountdown = (counter) => {
  if (counter.seconds < 10) {
    if (counter.minutes) return `${counter.minutes}:0${counter.seconds}`
    return `0:0${counter.seconds}`
  }
  return `${counter.minutes}:${counter.seconds}`
}

const TimerDisplay = (props) => {
  return (
    <Text>Timer: {props.counter.minutes || props.counter.seconds ? renderCountdown(props.counter) : null}</Text>
  );
};

export default TimerDisplay;