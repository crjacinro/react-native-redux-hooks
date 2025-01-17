import React from 'react';
import {TextInput} from 'react-native';
import {actionUpdateCount} from './actions';
import {useSelector, useDispatch} from 'react-redux';

export default function Controls() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const onCounterChanged = countValue =>
    dispatch(actionUpdateCount(countValue));

  return (
    <TextInput
      style={{width: 80, height: 40, borderWidth: 1}}
      value={count.toString()}
      textAlign={'center'}
      onChangeText={onCounterChanged}
    />
  );
}
