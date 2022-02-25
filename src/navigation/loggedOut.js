import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';

const { Screen, Navigator } = createNativeStackNavigator();
const screenOptions = { headerShown: false };

function LoggedOutStack() {
  return (
    <Navigator initialRouteName='Login'>
      <Screen name='Login' component={Login} options={screenOptions} />
    </Navigator>
  );
}

export default LoggedOutStack;
