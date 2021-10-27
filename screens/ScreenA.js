import React from 'react'
import { View, Text,StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

function ScreenA({navigation}){

    return(
        <View style={styles.body}>
        <Text style={styles.text}> testing abc 123 </Text>
  
        <Pressable onPress= {()=>navigation.navigate("Screen-B")}> 
          
          <Text> go to B</Text> 
          <Icon.Button  
          name="facebook"

          backgroundColor="#3b5998"
          >


          </Icon.Button>
          </Pressable>
      </View> 
    )
  }
  export default ScreenA

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