import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens/Home';
import { NextVaccine } from '../screens/NextVaccine';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <>
        <Drawer.Navigator >
            <Drawer.Screen name="Minhas Vacinas" component={Home} options={{ headerShown: false }}/>
            <Drawer.Screen name="Próximas Vacinas" component={NextVaccine} />
        </Drawer.Navigator>
    </>  
    )
}

