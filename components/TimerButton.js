import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const TimerButton = props => {
  const renderButtonText = props.isActive ? 'Stop Timer' : 'Start Timer'
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.setIsActive(isActive => !isActive)}
    >
      <Text style={styles.text}>{renderButtonText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#565656',
    borderWidth: 1,
    borderColor: '#66ff99',
    borderRadius: 5,
    padding: 24,
    margin: 24,
  },
  text: {
    color: '#66ff99',
    fontSize: 24,
    textAlign: 'center',
  },
})

TimerButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
}

export default TimerButton
