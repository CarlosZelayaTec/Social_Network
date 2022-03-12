import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ProfileTabNavigator from './navigation/ProfileTabNavigator';

export default function App() {
  return (
    <NavigationContainer>

      <ProfileTabNavigator />

    </NavigationContainer>
  );
}