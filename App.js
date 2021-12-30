import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import  store  from "./redux/store";
import { Provider } from "react-redux";
import { Profile } from './screen';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Profile/>
      </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
