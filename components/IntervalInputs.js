import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import formatTimeDisplay from './formatTimeDisplay';

const IntervalInputs = (props) => {
  if (props.showInputs) {
    return (
      <View>
        <Text style={styles.text}>Work Time: </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.text}> Minutes: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={number => props.setWorkInterval({
              ...props.workInterval,
              minutes: number
            })}
            placeholder='0'
            value={props.workInterval.minutes || ''}
            keyboardType={'numeric'}
          />
          <Text style={styles.text}> Seconds: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={number => props.setWorkInterval({
              ...props.workInterval,
              seconds: number
            })}
            placeholder='0'
            value={props.workInterval.seconds || ''}
            keyboardType={'numeric'}
          />
        </View>
        <Text style={styles.text}>Break Time: </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.text}> Minutes: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={number => props.setBreakInterval({
              ...props.breakInterval,
              minutes: number
            })}
            placeholder='0'
            value={props.breakInterval.minutes || ''}
            keyboardType={'numeric'}
          />
          <Text style={styles.text}> Seconds: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={number => props.setBreakInterval({
              ...props.breakInterval,
              seconds: number
            })}
            placeholder='0'
            value={props.breakInterval.seconds || ''}
            keyboardType={'numeric'}
          />
        </View>
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.text}>Work Interval: {formatTimeDisplay(props.workInterval)}</Text>
      <Text style={styles.text}>Break Interval: {formatTimeDisplay(props.breakInterval)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row'
  },
  text: {
    fontFamily: 'sans-serif',
    color: '#66ff99',
    fontSize: '1.2rem',
    textAlign: 'center',
    marginTop: '1rem',
  },
  textInput: {
    color: '#66ff99',
    height: '1.75rem',
    width: '4rem',
    borderColor: '#66ff99', 
    fontSize: '1.25rem',
    borderWidth: 1,
    margin: '.5rem',
  },
})

IntervalInputs.propTypes = {
  workInterval: PropTypes.objectOf(PropTypes.number),
  setWorkInterval: PropTypes.func.isRequired,
  breakInterval: PropTypes.objectOf(PropTypes.number),
  setBreakInterval: PropTypes.func.isRequired,
  showInputs: PropTypes.bool.isRequired
}

export default IntervalInputs;