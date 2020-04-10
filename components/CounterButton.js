import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const CounterButton = (props) => {
  if (props.showInputs) {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={props.onSetCounterClick}
      >
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
};

CounterButton.propTypes = {
  showInputs: PropTypes.bool.isRequired,
  onSetCounterClick: PropTypes.func.isRequired,
  setShowInputs: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#565656',
    borderWidth: 1,
    borderColor: '#66ff99',
    borderRadius: 5,
    padding: '1rem',
    margin: '1rem'
  },
  text: {
    fontFamily: 'sans-serif',
    color: '#66ff99',
    fontSize: '1.2rem',
    textAlign: 'center',
  },
});

export default CounterButton;