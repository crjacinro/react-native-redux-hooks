import React from 'react';
import styles from './Styles';
import {View, Text, Button} from 'react-native';
import {actionIncrementCount, actionDecrementCount} from './actions';
import {useSelector, useDispatch} from 'react-redux';

export default function Controls() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const onCounterIncrement = () => dispatch(actionIncrementCount());
  const onCounterDecrement = () => dispatch(actionDecrementCount());

  return (
    <View style={styles.controlsContainer}>
      <Button title="-" onPress={onCounterDecrement} />
      <Text style={{margin: 10}}>{count}</Text>
      <Button title="+" onPress={onCounterIncrement} />
    </View>
  );
}
