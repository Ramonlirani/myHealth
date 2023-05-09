import { NativeBaseProvider, extendTheme } from 'native-base'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createDrawerNavigator } from '@react-navigation/drawer';

import MyStack from './app/routes/MyStack'
import { VaccineProvider } from './app/context/VaccineContext';

const Drawer = createDrawerNavigator();

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

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <VaccineProvider>
          <MyStack />
        </VaccineProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}