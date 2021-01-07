import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import LandingScreen from './screens/LandingScreen';

import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const BottomTab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="Home">
        <BottomTab.Screen name="Home" component={HomeScreen} />
        <BottomTab.Screen name="Login" component={LoginScreen} />
        <BottomTab.Screen name="Landing" component={LandingScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default App;