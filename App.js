import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View, Text, StyleSheet, Pressable,StatusBar,useColorScheme } from 'react-native'
import { Provider } from 'react-redux';
import { Store } from './reduxstore/store';
import ScreenA from './src/screens/ScreenA';
import ScreenB from './src/screens/ScreenB';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeStack from './src/routes/HomeStack';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const Taba = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const Drawer = createDrawerNavigator();





export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <Provider store={Store}>
   <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} hidden={true}/>
<HomeStack/>
   </SafeAreaView>
  
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