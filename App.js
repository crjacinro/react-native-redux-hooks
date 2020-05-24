/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *

 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  TextInput,
} from 'react-native';

export default class App extends Component {
  state = {
    count: 55,
  };

  onPlus = () => {
    this.setState({count: this.state.count + 1});
  };

  onMinus = () => {
    this.setState({count: this.state.count - 1});
  };
  onClear = () => {
    this.setState({count: 0});
  };

  render() {
    return (
      <SafeAreaView style={styles.viewContainer}>
        <View style={styles.headlineContainer}>
          <Text>Counter Application</Text>
        </View>
        <View style={styles.contentContainer}>
          <TextInput
            style={{width: 80, height: 40, borderWidth: 1}}
            value={this.state.count.toString()}
            textAlign={'center'}
          />
          <View style={styles.controlsContainer}>
            <Button title="-" onPress={this.onMinus} />
            <Text style={{margin: 10}}>{this.state.count}</Text>
            <Button title="+" onPress={this.onPlus} />
          </View>
          <Button title="Clear" onPress={this.onClear} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headlineContainer: {
    alignItems: 'center',
  },
  viewContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlsContainer: {
    flexDirection: 'row',
    margin: 30,
  },
});
