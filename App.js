import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { NativeBaseProvider, extendTheme } from 'native-base'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from './app/screens/Login'
import { Register } from './app/screens/Register'
import { Home } from './app/screens/Home'
import { ForgotPassword } from './app/screens/ForgotPassword'
import { NewVaccine } from './app/screens/NewVaccine'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NextVaccine } from './app/screens/NextVaccine'

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator()

const theme = extendTheme({
  colors: {
    backgroundColor: {
      primary: '#ADD4D0',
      header: '#C1E7E3'

    },
    primary: {
      color: '#419ED7',
      button: {
        success: '#37BD6D',
        delete: '#FD7979',
        forgot: '#B0CCDE',
      }
    },
  },
})

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
      <Stack.Screen name="NewVaccine" component={NewVaccine} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home" >
      <Drawer.Screen name="Minhas Vacinas" component={Home} options={{ headerShown: false }} />
      <Drawer.Screen name="Próximas Vacinas" component={NextVaccine} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24253C',
  },
})
