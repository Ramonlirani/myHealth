import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { Login } from './app/screens/Login'
import { NativeBaseProvider } from 'native-base'
import { Register } from './app/screens/Register'


import { createDrawerNavigator } from '@react-navigation/drawer'
import { Home } from './app/screens/Home'
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NativeBaseProvider>
      <>
        <Home />
        <StatusBar style="auto" />
      </>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24253C',
  },
})
