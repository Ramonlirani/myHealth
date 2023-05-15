import React from 'react';

const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { ForgotPassword } from '../screens/ForgotPassword';
import { MyDrawer } from './MyDrawer';
import { NewVaccine } from '../screens/NewVaccine';
import { EditVaccine } from '../screens/EditVaccine';

const MyStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="NewVaccine" component={NewVaccine} options={{ headerShown: false }} />
        <Stack.Screen name="EditVaccine" component={EditVaccine} options={{ headerShown: false }} />        
      </Stack.Navigator>
    </>
  );
};

export default MyStack;
