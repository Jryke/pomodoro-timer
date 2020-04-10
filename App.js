import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TimerDisplay from './components/TimerDisplay';
import IntervalInputs from './components/IntervalInputs';
import CounterButton from './components/CounterButton';
import TimerButton from './components/TimerButton';

const App = () => {
  const [intervalType, setintervalType] = useState('work')
  const [showInputs, setShowInputs] = useState(true);
  const [workInterval, setWorkInterval] = useState({
    minutes: null,
    seconds: null
  });
  const [breakInterval, setBreakInterval] = useState({
    minutes: null,
    seconds: null
  });
  const [counter, setCounter] = useState({
    minutes: null,
    seconds: null
  });
  const [isActive, setIsActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')

  const onSetCounterClick = () => {
    if((workInterval.minutes || workInterval.seconds) && (breakInterval.minutes || breakInterval.seconds)) {
      setIsActive(false);
      setintervalType('work');
      setErrorMessage('');
      setCounter(workInterval);
      setShowInputs(prevState => !prevState);
    } else {
      console.log('intervals need to be set')
      setErrorMessage('**please insert work and break time values**');
    }
  };
  
  const onResetCounterClick = () => {
    setIsActive(false);
    setWorkInterval({
      minutes: null,
      seconds: null
    });
    setBreakInterval({
      minutes: null,
      seconds: null
    });
    setShowInputs(true)
    setCounter({
      minutes: null,
      seconds: null
    })
  }

  useEffect(() => {
    let interval = null;
    // when timer hits 0 - toggle work/break & reset counter
    if ((counter.minutes === 0 || counter.minutes === null) && counter.seconds === 0) {
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
        if (counter.seconds === 0) {
          setCounter({
            minutes: counter.minutes - 1,
            seconds: counter.seconds + 59
          })
        } else {
          setCounter({
            ...counter,
            seconds: counter.seconds - 1
          })
        }
      }, 1000);
    } else if (!isActive && counter !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, counter]);

  return (
    <View style={styles.container}>
      <Text>Current: {intervalType}</Text>
      <TimerDisplay counter={counter} />
      <IntervalInputs workInterval={workInterval} setWorkInterval={setWorkInterval} breakInterval={breakInterval} setBreakInterval={setBreakInterval} showInputs={showInputs} />
      <CounterButton showInputs={showInputs} onSetCounterClick={onSetCounterClick} onResetCounterClick={onResetCounterClick} />
      <Text style={styles.errorText}>{errorMessage}</Text>
      <TimerButton isActive={isActive} setIsActive={setIsActive} />
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
  errorText: {
    color: 'red'
  }
});

export default App;