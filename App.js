import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Vibration } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import TimerDisplay from './components/TimerDisplay'
import IntervalInputs from './components/IntervalInputs'
import CounterButton from './components/CounterButton'
import TimerButton from './components/TimerButton'

const fetchFonts = () => {
  return Font.loadAsync({
    'alarm-clock': require('./assets/fonts/alarm-clock.ttf'),
  })
}

const WORKING_INTERVAL = 'Working'
const BREAK_INTERVAL = 'On Break'

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false)
  const [intervalType, setintervalType] = useState(WORKING_INTERVAL)
  const [showInputs, setShowInputs] = useState(true)
  const [workInterval, setWorkInterval] = useState({
    minutes: null,
    seconds: null,
  })
  const [breakInterval, setBreakInterval] = useState({
    minutes: null,
    seconds: null,
  })
  const [counter, setCounter] = useState({
    minutes: null,
    seconds: null,
  })
  const [isActive, setIsActive] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    let interval = null
    // when timer hits 0 - toggle work/break & reset counter
    if (
      (counter.minutes == 0 || counter.minutes === null) &&
      counter.seconds === 0
    ) {
      Vibration.vibrate([500, 500, 500])
      if (intervalType === WORKING_INTERVAL) {
        setintervalType(BREAK_INTERVAL)
        setCounter(breakInterval)
      } else if (intervalType === BREAK_INTERVAL) {
        setintervalType(WORKING_INTERVAL)
        setCounter(workInterval)
      }
    }
    // interval to update counter each second, stop when timer not active
    if (isActive) {
      interval = setInterval(() => {
        if (counter.seconds === 0) {
          setCounter({
            minutes: counter.minutes - 1,
            seconds: counter.seconds + 59,
          })
        } else {
          setCounter({
            ...counter,
            seconds: counter.seconds - 1,
          })
        }
      }, 1000)
    } else if (!isActive && counter !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, counter])

  const onSetCounterClick = () => {
    if (
      (workInterval.minutes || workInterval.seconds) &&
      (breakInterval.minutes || breakInterval.seconds)
    ) {
      setIsActive(false)
      setintervalType(WORKING_INTERVAL)
      setErrorMessage('')
      setCounter(workInterval)
      setShowInputs(prevState => !prevState)
    } else {
      setErrorMessage('**please insert work and break time values**')
    }
  }

  const onResetCounterClick = () => {
    setIsActive(false)
    setWorkInterval({
      minutes: null,
      seconds: null,
    })
    setBreakInterval({
      minutes: null,
      seconds: null,
    })
    setShowInputs(true)
    setCounter({
      minutes: null,
      seconds: null,
    })
  }

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{intervalType}</Text>
      <TimerDisplay counter={counter} />
      <IntervalInputs
        workInterval={workInterval}
        setWorkInterval={setWorkInterval}
        breakInterval={breakInterval}
        setBreakInterval={setBreakInterval}
        showInputs={showInputs}
      />
      <CounterButton
        showInputs={showInputs}
        onSetCounterClick={onSetCounterClick}
        onResetCounterClick={onResetCounterClick}
      />
      <Text style={styles.errorText}>{errorMessage}</Text>
      <TimerButton isActive={isActive} setIsActive={setIsActive} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#66ff99',
    fontSize: 48,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
  },
})

export default App
