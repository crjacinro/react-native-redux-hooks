import React from 'react';
import styles from './Styles';
import {View, Text, Button} from 'react-native';
import {counterIncrement, counterDecrement} from './actions';
import {useSelector, useDispatch} from 'react-redux';

export default function Controls() {
  const count = useSelector(state => state);
  const dispatch = useDispatch();

  const onCounterIncrement = () => dispatch(counterIncrement());
  const onCounterDecrement = () => dispatch(counterDecrement());

  return (
    <View style={styles.controlsContainer}>
      <Button title="-" onPress={onCounterDecrement} />
      <Text style={{margin: 10}}>{count}</Text>
      <Button title="+" onPress={onCounterIncrement} />
    </View>
  );
}
