import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

const Splashscreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            checkout()
        },2000)
    },[])

    const checkout = async( ) => {
        let check = await AsyncStorage.getItem("email");
        console.log("check => " , check);

        if(check != null){
            navigation.replace("bottomnavigation")
        }else{
            navigation.replace("Onboarding")
        }
    }

  return (
    <View style={{flex:1,backgroundColor:'black'}}>
        <LottieView
          source={require('../assets/Lottyfile/Animation5.json')}
          loop
          style={styles.animation}
          autoPlay
        />
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
    animation:{
        flex:1
    }
})