import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Weather from './src/containers/Weather'

export default class HelloWorldApp extends Component {
  render() {
    return (
      // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      //   <Text>Hello, world!</Text>
      // </View>
      <Weather />
    );
  }
}