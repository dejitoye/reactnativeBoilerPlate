import React from 'react'
import { View, Text,StyleSheet, Pressable } from 'react-native'

function ScreenB({navigation}){

    return(
        <View style={styles.body}>
        <Text style={styles.text}> testing abc 123456 </Text>
  
        <Pressable onPress= {()=>navigation.navigate("Screen-B")}> 
          
          <Text> go to A</Text> 
          
          </Pressable>
      </View> 
    )
  }
  export default ScreenB

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