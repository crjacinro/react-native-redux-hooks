/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.headlineContainer}>
        <Text style={styles.textCounter}>Counter Application</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.textCounter}>2</Text>
      </View>
    </View>
  );
};

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
  textCounter: {},
});

export default App;
