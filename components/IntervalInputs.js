import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import formatTimeDisplay from './formatTimeDisplay'

const IntervalInputs = props => {
  if (props.showInputs) {
    return (
      <View>
        <Text style={styles.header}>Work Time: </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.text}> Minutes: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={number =>
              props.setWorkInterval({
                ...props.workInterval,
                minutes: number,
              })
            }
            placeholder='0'
            value={props.workInterval.minutes || ''}
            keyboardType={'numeric'}
            maxLength={2}
          />
          <Text style={styles.text}> Seconds: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={number =>
              props.setWorkInterval({
                ...props.workInterval,
                seconds: number,
              })
            }
            placeholder='0'
            value={props.workInterval.seconds || ''}
            keyboardType={'numeric'}
            maxLength={2}
          />
        </View>
        <Text style={styles.header}>Break Time: </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.text}> Minutes: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={number =>
              props.setBreakInterval({
                ...props.breakInterval,
                minutes: number,
              })
            }
            placeholder='0'
            value={props.breakInterval.minutes || ''}
            keyboardType={'numeric'}
            maxLength={2}
          />
          <Text style={styles.text}> Seconds: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={number =>
              props.setBreakInterval({
                ...props.breakInterval,
                seconds: number,
              })
            }
            placeholder='0'
            value={props.breakInterval.seconds || ''}
            keyboardType={'numeric'}
            maxLength={2}
          />
        </View>
      </View>
    )
  }
  return (
    <View>
      <Text style={styles.text}>
        Work Interval: {formatTimeDisplay(props.workInterval)}
      </Text>
      <Text style={styles.text}>
        Break Interval: {formatTimeDisplay(props.breakInterval)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
  },
  header: {
    color: '#66ff99',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 32,
  },
  text: {
    color: '#66ff99',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  textInput: {
    color: '#66ff99',
    height: 36,
    width: 72,
    borderColor: '#66ff99',
    fontSize: 24,
    borderWidth: 1,
    margin: 12,
  },
})

IntervalInputs.propTypes = {
  workInterval: PropTypes.objectOf(PropTypes.string),
  setWorkInterval: PropTypes.func.isRequired,
  breakInterval: PropTypes.objectOf(PropTypes.string),
  setBreakInterval: PropTypes.func.isRequired,
  showInputs: PropTypes.bool.isRequired,
}

export default IntervalInputs
