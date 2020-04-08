import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const IntervalInputs = (props) => {
  if (props.showInputs) {
    return (
      <View>
        <View style={styles.inputContainer}>
          <Text>Work Interval: </Text>
          <Text> Minutes: </Text>
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
          <Text> Seconds: </Text>
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
        <View style={styles.inputContainer}>
          <Text>Break Interval: </Text>
          <Text> Minutes: </Text>
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
          <Text> Seconds: </Text>
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
      <Text>Work Interval: {props.workInterval.minutes}:{props.workInterval.seconds}</Text>
      <Text>Break Interval: {props.breakInterval.minutes}:{props.breakInterval.seconds}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row'
  },
  textInput: {
    height: 20,
    width: 40,
    borderColor: 'gray', 
    borderWidth: 1
  }
})

IntervalInputs.propTypes = {
  workInterval: PropTypes.objectOf(PropTypes.number),
  setWorkInterval: PropTypes.func.isRequired,
  breakInterval: PropTypes.objectOf(PropTypes.number),
  setBreakInterval: PropTypes.func.isRequired,
  showInputs: PropTypes.bool.isRequired
}

export default IntervalInputs;