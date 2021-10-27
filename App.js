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
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const Taba = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const Drawer = createDrawerNavigator();





export default function App() {
  return (
    <Provider store={Store}>

      <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen 
      name="Screen-A"
      component={ScreenA}
      />


      <Drawer.Screen
      name="Screen-B"
      component={ScreenB}
      />
    </Drawer.Navigator>
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