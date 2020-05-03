import React from 'react'
import { StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'
import formatTimeDisplay from './formatTimeDisplay'

const TimerDisplay = props => {
  return (
    <Text style={styles.text}>
      {props.counter.minutes || props.counter.seconds
        ? formatTimeDisplay(props.counter)
        : '0:00'}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#66ff99',
    fontSize: 48,
    textAlign: 'center',
    fontFamily: 'alarm-clock',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#66ff99',
    borderRadius: 7,
    paddingHorizontal: 12,
    marginTop: 14,
  },
})

TimerDisplay.propTypes = {
  counter: PropTypes.objectOf(PropTypes.number),
}

export default TimerDisplay
