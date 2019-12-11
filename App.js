import React, { createContext } from 'react';
import { Text, View } from 'react-native';
import Weather from './src/containers/Weather'
import Form from './src/containers/Form';

const weather = {

}

const weatherContext = createContext(weather)

export default function WeatherApp() {
  return (
    <View>
      <Form />
      <Weather />
    </View>
  );
}