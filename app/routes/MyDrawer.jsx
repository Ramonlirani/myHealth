import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens/Home';
import { NextVaccine } from '../screens/NextVaccine';
import { Image } from 'native-base';


const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <>
      <Drawer.Navigator screenOptions={{ drawerActiveTintColor: '#5ab3ec',drawerStyle: {backgroundColor: '#ADD4D0'}, 
      drawerLabelStyle: {color: '#419ED7', fontSize:15}, headerStyle: {backgroundColor: '#C1E7E3'}, headerTitleStyle: {fontSize:25},
      headerTintColor: '#419ED7',
      sceneContainerStyle: {backgroundColor: "#ADD4D0"}
    }}>
        <Drawer.Screen name="Minhas Vacinas" component={Home} options={{title: 'Minhas vacinas', drawerIcon: ()=> (<Image style={{width:20, height: 20, marginRight: -25}} alt='Logo vacina' source={require('../../assets/images/icon-vaccine.png')}/>)}}/>
        <Drawer.Screen name="Próximas Vacinas" component={NextVaccine}  options={{title: 'Próximas Vacinas', drawerIcon: ()=> (<Image style={{width:20, height: 20, marginRight: -25}} alt='Logo calendar' source={require('../../assets/images/calendar.png')}/>)}} />
      </Drawer.Navigator>
    </>
  );
};
