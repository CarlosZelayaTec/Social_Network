import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ProfileTabNavigator from './navigation/ProfileTabNavigator';
import RootStackNavigator from './navigation/RootStackNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>

      <ProfileTabNavigator />

      <StatusBar />

    </NavigationContainer>
  );
}