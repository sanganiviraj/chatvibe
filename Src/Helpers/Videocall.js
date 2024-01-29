import AgoraUIKit from 'agora-rn-uikit';
import React, { Component, useEffect, useState } from 'react';
import { PermissionsAndroid, StyleSheet, Text, View  } from 'react-native';
import RNCallKeep from 'react-native-callkeep';


export default function VoiceCallPage() {
    const [videoCall, setVideoCall] = useState(true);

    const connectionData = {
        appId: 'e2f11f0a061f41158a32e5b4b461b60a',
        channel: 'logicwave',
        token: '007eJxTYLiu+z8yVyb44QHjuQFb4t2uiTlqOCZJtx7+vneuTtWycAcFhlSjNEPDNINEAzPDNBNDQ1OLRGOjVNMkkyQTM8MkM4PEp1O3pDYEMjLsWWHEzMgAgSA+J0NOfnpmcnliWSoDAwDDqyEy', // enter your channel token as a string 
    };

    const rtcCallbacks = {
        EndCall: () => setVideoCall(false),
    };

  

     

      useEffect(()=>{
        RNCallKeep.setup({
            ios: {
              appName: 'CallKeepDemo',
            },
            android: {
               alertTitle: 'Permissions required',
              alertDescription: 'This application needs to access your phone accounts',
              cancelButton: 'Cancel',
              okButton: 'ok',
            //   additionalPermissions: [PermissionsAndroid.BIND_TELECOM_CONNECTION_SERVICE],
            //   // Required to get audio in background when using Android 11
            //   foregroundService: {
            //     channelId: 'com.company.my',
            //     channelName: 'Foreground service for my app',
            //     notificationTitle: 'My app is running on background',
            //     notificationIcon: 'Path to the resource icon of the notification',
            //   }, 
            },
          });

        RNCallKeep.startCall("uuid", "12332432432", "vs");
      },[])

    return (
        <View style={styles.container}>

           { videoCall ? (
                    <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
                ) : (
                    <Text onPress={()=>setVideoCall(true)}>Start Call</Text>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})