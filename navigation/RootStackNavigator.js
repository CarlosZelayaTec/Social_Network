import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    ProfileScreen,
    HomeScreen,
    SettingsScreen,
    PublisherScreen
} from '../Screens/index'

const HomeStack = createNativeStackNavigator();
const PublisherStack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();

 export function HomeStackScreen (){
  return (
      <HomeStack.Navigator
        screenOptions={{
            headerShown: false
        }}
      >
          <HomeStack.Screen name='Principal' component={HomeScreen} />
          <HomeStack.Screen name='Profile' component={ProfileScreen} />
      </HomeStack.Navigator>
  )
}

export function SettingStackScreen() {
    return(
    <SettingStack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <SettingStack.Screen name='SettingsStack' component={SettingsScreen} />
    </SettingStack.Navigator>
    )
}

export function PublisherStackScreen() {
    return(
        <PublisherStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <PublisherStack.Screen name='PublisherStack' component={PublisherScreen} />
        </PublisherStack.Navigator>
    )
}

const styles = StyleSheet.create({})