import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AuthScreen } from './app/screen';
import { store } from "./app/redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
        <AuthScreen/>
    </Provider>

  )
}

export default App

const styles = StyleSheet.create({})
