import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Provider } from 'react-redux';
import { Store } from './reduxstore/store';
// import { Store } from './reduxstore/store';
export default function App() {
  return (
    <Provider store={Store}>
    <View style={styles.body}>
      <Text style={styles.text}> testing abc 123 </Text>
    </View>
    </Provider>

  )
}
const styles = StyleSheet.create({
  body:{
marginTop:40,
flex:1,
justifyContent:"center",
alignItems:"center"

  },

  text:{
fontFamily:'Nunito-ExtraBold',

fontSize:40


  }
})