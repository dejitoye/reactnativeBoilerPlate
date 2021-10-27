import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Provider } from 'react-redux';
import { Store } from './reduxstore/store';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const Taba = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();





export default function App() {
  return (
    <Provider store={Store}>

      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Screen-A') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Screen-B') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
<Tab.Screen 
name="Screen-A"

component={ScreenA}
/>
<Tab.Screen 
name="Screen-B"

component={ScreenB}
/>
    </Tab.Navigator>
    </NavigationContainer>

    </Provider>

  )
}
const styles = StyleSheet.create({
  body:{
marginTop:40,
flex:1,
justifyContent:"center",
alignItems:"center",
fontFamily:"DancingScript-Regular"

  },

  text:{
fontFamily:'Nunito-ExtraBold',

fontSize:40


  }
})