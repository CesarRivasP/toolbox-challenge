import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Details from '../screens/details';

const { Screen, Navigator } = createNativeStackNavigator();
const screenOptions = { headerShown: false };

function LoggedInStack() {
  return (
    <Navigator initialRouteName='Home'>
      <Screen name='Home' component={Home} options={screenOptions} />
      <Screen name='Details' component={Details} options={screenOptions} />
    </Navigator>
  );
}

export default LoggedInStack;
