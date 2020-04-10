import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const TimerButton = (props) => {
  const renderButtonText = props.isActive ? 'Stop Timer' : 'Start Timer';
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.setIsActive(isActive => !isActive)}
    >
      <Text>{renderButtonText}</Text>
    </TouchableOpacity>
  );
};

TimerButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggleTimer: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default TimerButton;