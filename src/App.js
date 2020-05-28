/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *

 */

import React from 'react';
import Controls from './Controls';
import Styles from './Styles';
import Input from './Input';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {counterClear} from './actions';

export default (App = () => {
  const count = useSelector(state => state);
  const dispatch = useDispatch();
  const onCounterCleared = () => dispatch(counterClear());

  return (
    <SafeAreaView style={Styles.viewContainer}>
      <View style={Styles.headlineContainer}>
        <Text>Counter Application</Text>
      </View>
      <View style={Styles.contentContainer}>
        <Input />
        <Controls />
        <Button title="Clear" onPress={onCounterCleared} />
      </View>
    </SafeAreaView>
  );
});
