import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Provider } from 'react-redux';
import { Store } from './reduxstore/store';
// import { Store } from './reduxstore/store';

const Stack = createStackNavigator()

function ScreenA({navigation}){

  return(
      <View style={styles.body}>
      <Text style={styles.text}> testing abc 123 </Text>

      <Pressable onPress= {()=>navigation.navigate("Screen-B")}> 
        
        <Text> go to B</Text> 
        
        </Pressable>
    </View> 
  )
}
function ScreenB(){

  return(
      <View style={styles.body}>
      <Text style={styles.text}> testing abc 123 </Text>
      <Pressable> 
        
        <Text> go to A</Text> 
        
        </Pressable>
    </View> 
  )
}
export default function App() {
  return (
    <Provider store={Store}>

      <NavigationContainer>
      <Stack.Navigator>
    
<Stack.Screen 
name="Screen-A"

component={ScreenA}
/>
<Stack.Screen 
name="Screen-B"

component={ScreenB}
/>
    </Stack.Navigator>
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