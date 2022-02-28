import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import VideoPlayer from '../screens/videoPlayer';

const { Screen, Navigator } = createNativeStackNavigator();
const screenOptions = { headerShown: false, };

function LoggedInStack() {
  return (
    <Navigator initialRouteName='Home'>
      <Screen
        name='Home'
        component={Home}
        options={screenOptions}
      />
      <Screen
        name='VideoPlayer'
        component={VideoPlayer}
        options={screenOptions}
      />
    </Navigator>
  );
}

export default LoggedInStack;
