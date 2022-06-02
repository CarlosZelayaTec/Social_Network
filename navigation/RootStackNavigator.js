import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    ProfileScreen,
    FriendsScreen,
    SettingsScreen,
    PublisherScreen
} from '../Screens/index'

const FriendStack = createNativeStackNavigator();
const PublisherStack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();

 export function FriendStackScreen (){
  return (
      <FriendStack.Navigator
        screenOptions={{
            headerShown: false
        }}
      >
          <FriendStack.Screen name='Friends' component={FriendsScreen} />
          <FriendStack.Screen name='Profile' component={ProfileScreen} />
      </FriendStack.Navigator>
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
            <PublisherStack.Screen name='profileStack' component={ProfileScreen} />
        </PublisherStack.Navigator>
    )
}
