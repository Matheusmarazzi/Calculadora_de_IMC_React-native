/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';


const calculadora = () => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={backgroundStyle}>
      <text style={style.input}> calculadora de imc</text>
      <TextInput
      style={style.input}
      onChangeText={onChangenumber}
      value={number}
      placeholder="inira sua altura"
      keyboardType="numeric"/>
      <TextInput
      style={style.input}
      placeholder="insira seu peso"
      keyboardType="numeric"/>

      <button title="calcular"/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input:{
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
  },
  titulo:{
    fontSize: 32,
    textAlign: 'center',
  },
});

export default App;
