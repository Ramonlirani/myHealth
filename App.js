import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'


import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from './app/screens/Login'
import { Register } from './app/screens/Register'
import { Home } from './app/screens/Home'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator >
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>

    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24253C',
  },
})
