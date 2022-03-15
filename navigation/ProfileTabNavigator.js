import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
    HomeStackScreen,
    PublisherStackScreen,
    SettingStackScreen
  } from './RootStackNavigator';

const Tab = createBottomTabNavigator();

const ProfileTabNavigator = () => {
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconNameTwo = route.name === 'Publisher' ? 'public': null

            if (route.name === 'Amigos') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'list-circle-sharp' : 'list-circle-outline';
            }

            // You can return any component that you like here!
            return (
              <View style={ styles.centrar }>
                <Ionicons name={iconName} size={size} color={color} />
                <MaterialIcons name={iconNameTwo} size={size} color={color} />
              </View>
            )
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Publisher" component={PublisherStackScreen} options={{ tabBarBadge: 45, headerTitle: 'Publicaciones' }} />
        <Tab.Screen name="Amigos" component={HomeStackScreen} options={{ tabBarBadge: 10, headerTitle: 'Social Network' }} />
        <Tab.Screen name="Settings" component={SettingStackScreen} />
      </Tab.Navigator>
    );
}

export default ProfileTabNavigator;

const styles = StyleSheet.create({
  centrar: {
    flexDirection: 'row',
  }
})