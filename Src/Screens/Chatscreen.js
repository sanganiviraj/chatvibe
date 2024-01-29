import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import getAuth from '@react-native-firebase/auth'

const Chatscreen = () => {
  const [datas,setdatas] = useState();

  useEffect(() => {
    getAuth().onAuthStateChanged((currentuser) => {
      console.log("currentuser => " , currentuser);
     })
  },[])   

  return (
    <View>
      <Text>Chatscreen</Text>
    </View>
  )
}

export default Chatscreen

const styles = StyleSheet.create({})