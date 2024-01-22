import { StyleSheet, Text, View,TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import Icon, { Icons } from '../assets/constant/Icons'
import auth  from '@react-native-firebase/auth';
import { create } from 'react-test-renderer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast, useToast } from 'react-native-toast-notifications';
// import { TextInput } from 'react-native-gesture-handler'

const Signupscreen = ({navigation}) => {
    const [emailpress,setemailpress] = useState(false);
    const [passwordpress , setpasswordpress] = useState(false)
    const [namepress , setnamepress] = useState(false)
    const [eyefocus , seteyefocus] = useState(true);

    const [email,setemail] = useState('');
    const [name,setname] = useState('')
    const [password,setpassword] = useState('');
    const toast = useToast();

    //check validation and Signup in firebase
    const createuser = () => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (reg.test(email) === false || email === '') {

            toast.show("Please Enter Valid Email", {
                type: "danger",
                placement: "bottom",
                duration: 4000,
                offset: 30,
                animationType: "slide-in",
                offsetBottom: 70
            });

            toast.hideAll()

        } else if (password === '' || password.length < 8 || password.length > 12) {

            toast.show("Password must be 8 to 12 character", {
                type: "danger",
                placement: "bottom",
                duration: 4000,
                offset: 30,
                animationType: "slide-in",
                offsetBottom: 70
            });

            toast.hideAll()
        }
        else{

            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    AsyncStorage.setItem("email",email)
                    console.log('User account created & signed in!');
                    navigation.push("bottomnavigation")
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        toast.show("The email address is already in use", {
                            type: "danger",
                            placement: "bottom",
                            duration: 4000,
                            offset: 30,
                            animationType: "slide-in",
                            offsetBottom:70
                        });
                        toast.hideAll()
                    }

                    if (error.code === 'auth/invalid-email') {
                        toast.show("Email address Invalid Formate", {
                            type: "danger",
                            placement: "bottom",
                            duration: 4000,
                            offset: 30,
                            animationType: "slide-in",
                            offsetBottom:70
                        });
                    }

                    if (error.code === 'auth/network-request-failed') {
                        toast.show("Network Error", {
                            type: "warning",
                            placement: "bottom",
                            duration: 4000,
                            offset: 30,
                            animationType: "slide-in",
                            offsetBottom:70
                        });
                    }

                    console.error(error);
                });
        }
    }

  return (
    <KeyboardAvoidingView behavior="height" style={styles.screen} enabled >
       
        <Text style={styles.title}>Create Your Account</Text>

        <TouchableOpacity style={[styles.box,{backgroundColor: emailpress ? "rgba(224,186,244,0.2)" : "#35383F" , borderColor :  emailpress ? "#9D4EDD" : "#35383F",marginTop:responsiveScreenHeight(10) }]} onPress={() => {}}>
            <Icon type={Icons.MaterialCommunityIcons} name="email" color={emailpress ? "#9D4EDD" : "#9E9E9E"} size={responsiveFontSize(4)} style={{marginHorizontal:responsiveScreenWidth(5)}}/>
            <TextInput 
                style={styles.inputstyle}
                onFocus={() => {setemailpress(true)}}
                onBlur={() => {setemailpress(false)}}
                placeholder='Email'
                maxLength={50}
                onChangeText={(text) => setemail(text)}
                value={email}
            />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.box,{backgroundColor: passwordpress ? "rgba(224,186,244,0.2)" : "#35383F" , borderColor :  passwordpress ? "#9D4EDD" : "#35383F", marginTop:responsiveScreenHeight(3) }]} onPress={() => {}}>

            <Icon type={Icons.MaterialIcons} name="password" color={passwordpress ? "#9D4EDD" : "#9E9E9E"} size={responsiveFontSize(4)} style={{marginHorizontal:responsiveScreenWidth(5)}}/>

            <TextInput 
                style={[styles.inputstyle,{width:responsiveScreenWidth(60)}]}
                onFocus={() => {setpasswordpress(true) }}
                onBlur={() => {setpasswordpress(false) }}
                secureTextEntry={eyefocus}
                keyboardType='number-pad'
                placeholder='Password'
                maxLength={10}
                onChangeText={(text) => setpassword(text) }
                value={password}
            />

            <TouchableOpacity onPress={() => {seteyefocus(!eyefocus)}}>
                <Icon type={Icons.AntDesign} name={eyefocus ? "eye" : "eyeo"} color={passwordpress ? "#9D4EDD" : "#9E9E9E"} size={responsiveFontSize(4)} style={{marginHorizontal:responsiveScreenWidth(1)}} />
            </TouchableOpacity>

        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => {createuser()}}>
            <Text style={styles.btntitle}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={[styles.btntitle,{marginTop:responsiveScreenHeight(3),alignSelf:'center'}]}>Already have an account?<Text style={{fontSize:responsiveFontSize(2.5),color:"#9D4EDD",fontFamily:'Outfit-Medium'}} onPress={() => {navigation.push("login")}}> Sign in </Text></Text>
        
    </KeyboardAvoidingView>
  )
}

export default Signupscreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"#181A20"
    },
    title:{
        fontSize:responsiveFontSize(6),
        color:"white",
        fontFamily:"Outfit-Medium",
        marginTop:responsiveScreenHeight(10),
        marginLeft:responsiveScreenWidth(5) 
    },
    box:{
        width:responsiveScreenWidth(90),
        height:responsiveScreenHeight(7.5),
        borderRadius:responsiveScreenHeight(2),
        backgroundColor:"#35383F",
        alignSelf:'center',
        flexDirection:"row",
        marginTop:responsiveScreenHeight(3),
        alignItems:"center",
        borderWidth:2,
    },
    inputstyle:{
        width:responsiveScreenWidth(70),
        height:responsiveScreenHeight(7.5),
        color:"white",
        fontFamily:"Outfit-Regular",
    },
    btn:{
        width:responsiveScreenWidth(90),
        height:responsiveScreenHeight(7),
        borderRadius:responsiveScreenHeight(7),
        backgroundColor:"#9D4EDD",
        alignSelf:"center",
        alignItems:'center',
        justifyContent:'center',
        marginTop:responsiveScreenHeight(4)
    },
    btntitle:{
        fontSize:responsiveFontSize(2),
        color:"white",
        fontFamily:'Outfit-Regular',
    },
})