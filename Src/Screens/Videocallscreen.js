import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

const Videocallscreen = ({navigation}) => {
  const [name,setname]= useState('');

  return (
    <View style={styles.screen}>
      <TextInput 
      style={styles.box}
      onChangeText={(text) => setname(text)}
      value={name}
      />

      <Button
      title='press'
      onPress={() => {navigation.navigate("welcomestack",{screen:"voicecall", params : { nm : name}})}}
      />

    </View>
  )
}

export default Videocallscreen

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  box:{
    borderWidth:1,
    borderColor:'black',
    marginTop:100,
    width:300,
    height:50,
    alignItems:'center',
    alignSelf:'center',
    color:'black'
  }
})