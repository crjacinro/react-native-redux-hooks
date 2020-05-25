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
import {connect} from 'react-redux';
import {
  counterIncrement,
  counterDecrement,
  counterClear,
  counterUpdate,
} from './actions';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={Styles.viewContainer}>
        <View style={Styles.headlineContainer}>
          <Text>Counter Application</Text>
        </View>
        <View style={Styles.contentContainer}>
          <Input
            value={this.props.count.toString()}
            onChanged={this.props.counterUpdate}
          />
          <Controls
            value={this.props.count}
            onMinus={this.props.counterDecrement}
            onPlus={this.props.counterIncrement}
          />
          <Button title="Clear" onPress={this.props.counterClear} />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state,
  };
};

export default connect(
  mapStateToProps,
  {counterIncrement, counterDecrement, counterClear, counterUpdate},
)(App);
