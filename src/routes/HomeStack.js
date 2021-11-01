import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ScreenA from '../screens/ScreenA'
import ScreenB from '../screens/ScreenB'

const HomeStack = () => {
    const Stack = createStackNavigator()
    return (
       <NavigationContainer>
           <Stack.Navigator>
               <Stack.Screen name = "Screen-A" component={ScreenA}/>
               <Stack.Screen name = "Screen-B" component={ScreenB}/>
           </Stack.Navigator>
       </NavigationContainer>
    )
}

export default HomeStack

const styles = StyleSheet.create({})
