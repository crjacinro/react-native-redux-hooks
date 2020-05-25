/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *

 */

import React, {Component} from 'react';
import Controls from './Controls';
import Styles from './Styles';
import Input from './Input';
import {View, Text, Button, SafeAreaView} from 'react-native';

export default class App extends Component {
  state = {
    count: 12,
  };

  onClear = () => {
    this.setState({count: 0});
  };

  onMinus = () => {
    this.setState({count: this.state.count - 1});
  };

  onPlus = () => {
    this.setState({count: this.state.count + 1});
  };

  onChanged = countValue => {
    this.setState({count: countValue});
  };

  render() {
    return (
      <SafeAreaView style={Styles.viewContainer}>
        <View style={Styles.headlineContainer}>
          <Text>Counter Application</Text>
        </View>
        <View style={Styles.contentContainer}>
          <Input
            value={this.state.count.toString()}
            onChanged={this.onChanged}
          />
          <Controls
            value={this.state.count}
            onMinus={this.onMinus}
            onPlus={this.onPlus}
          />
          <Button title="Clear" onPress={this.onClear} />
        </View>
      </SafeAreaView>
    );
  }
}
