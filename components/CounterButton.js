import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const CounterButton = props => {
  if (props.showInputs) {
    return (
      <TouchableOpacity style={styles.button} onPress={props.onSetCounterClick}>
        <Text style={styles.text}>Set Counter</Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={props.onResetCounterClick}
      >
        <Text style={styles.text}>Reset Counter</Text>
      </TouchableOpacity>
    )
  }
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

CounterButton.propTypes = {
  showInputs: PropTypes.bool.isRequired,
  onSetCounterClick: PropTypes.func.isRequired,
}

export default CounterButton
