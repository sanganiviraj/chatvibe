// App.js
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import ZegoUIKitPrebuiltCall , { ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn';

export default function VoiceCallPage({route}) {
    randomuserid = String(Math.floor(Math.random()*100000))
    // 
    // const {nm} = route.params;
    // console.log('route =>',nm);

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={645773714}
                appSign={"64bdea2e05ef9cf611a5b452df4f24907858da24854030f7b17cd91052c8c7be"}
                userID={randomuserid} // userID can be something like a phone number or the user id on your own user system. 
                userName={'use_'+randomuserid}
                callID={"testcallid"} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { props.navigation.navigate('HomePage') },
                    onHangUp: () => { props.navigation.navigate('HomePage') },
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})