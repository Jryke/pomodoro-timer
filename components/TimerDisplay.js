import React from 'react';
import { Text } from 'react-native';

const renderSeconds = (seconds) => {
  if (seconds < 10) return `0${seconds}`
  return seconds
}

const TimerDisplay = (props) => {
  return (
    <Text>Timer: {props.counter.minutes}:{renderSeconds(props.counter.seconds)}</Text>
  );
};

export default TimerDisplay;