import React from 'react';
import {TextInput} from 'react-native';

export default function Controls(props) {
  return (
    <TextInput
      style={{width: 80, height: 40, borderWidth: 1}}
      value={props.value}
      textAlign={'center'}
      onChangeText={props.onChanged}
    />
  );
}
