import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const IntervalInputs = (props) => {
  if (props.showIntervalInputs) {
    return (
      <View>
        <View style={styles.inputContainer}>
          <Text>Work Interval: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={number => props.setWorkIntervalInput(number)}
            placeholder='0'
            defaultValue={props.workInterval}
            keyboardType={'numeric'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Break Interval: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={number => props.setBreakIntervalInput(number)}
            placeholder='0'
            defaultValue={props.breakInterval}
            keyboardType={'numeric'}
          />
        </View>
      </View>
    );
  };
  return (
    <View>
      <Text>Work Interval: {props.workInterval}</Text>
      <Text>Break Interval: {props.breakInterval}</Text>
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

export default IntervalInputs;