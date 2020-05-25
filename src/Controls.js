import React, {Component} from 'react';
import styles from './Styles';
import {View, Text, Button} from 'react-native';

export default function Controls(props) {
  return (
    <View style={styles.controlsContainer}>
      <Button title="-" onPress={props.onMinus} />
      <Text style={{margin: 10}}>{props.value}</Text>
      <Button title="+" onPress={props.onPlus} />
    </View>
  );
}
