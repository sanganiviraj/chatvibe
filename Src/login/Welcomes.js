import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'

const Welcomes = ({navigation}) => {
  return (
    <View style={styles.screen}>

      <Image 
        style={styles.img}
        source={require('../assets/images/bg.png')}/>

      <Text style={styles.title}>Let's You in</Text>

      {/* Sign with password */}
      <TouchableOpacity style={styles.btn} onPress={() => {navigation.push('login')}}>
        <Text style={styles.btntitle}>Sign in with password</Text>
      </TouchableOpacity>

      <View style={styles.lineview}>
        <View style={styles.line} />
            <Text style={styles.btntitle}>or</Text>
        <View style={styles.line} />
      </View>

      {/* sign with google */}
      <TouchableOpacity style={styles.googlebutton} onPress={() => {}}>
        <Image style={styles.logo} source={require('../assets/images/gl.png')}/>
        <Text style={styles.btntitle}>Continue with Google</Text>
      </TouchableOpacity>

      <Text style={[styles.btntitle,{marginTop:responsiveScreenHeight(3),alignSelf:'center'}]}>Don't Have an account? <Text style={{fontSize:responsiveScreenFontSize(2.5),color:"#9D4EDD",fontFamily:'Outfit-Medium'}} onPress={() => {navigation.push("signup")}}> Sign up </Text></Text>

    </View>
  )
}

export default Welcomes

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"#181A20"
    },
    img:{
        width:responsiveScreenWidth(80),
        height:responsiveHeight(30),
        marginTop:responsiveScreenHeight(5),
        alignSelf:'center'
    },
    title:{
        fontSize:responsiveFontSize(6),
        color:'white',
        fontFamily:"Outfit-Bold",
        alignSelf:"center",
        marginVertical:responsiveScreenHeight(2)
    },
    btn:{
        width:responsiveScreenWidth(90),
        height:responsiveScreenHeight(7),
        borderRadius:responsiveScreenHeight(7),
        backgroundColor:"#9D4EDD",
        alignSelf:"center",
        alignItems:'center',
        justifyContent:'center'
    },
    btntitle:{
        fontSize:responsiveFontSize(2),
        color:"white",
        fontFamily:'Outfit-Regular'
    },
    lineview:{
        width:responsiveScreenWidth(90),
        height:responsiveScreenHeight(3),
        alignItems:"center",
        justifyContent:'center',
        alignSelf:'center',
        flexDirection:'row',
        marginHorizontal:responsiveScreenWidth(10),
        marginVertical:responsiveScreenHeight(2)
    },
    line:{
        height:1,
        backgroundColor:"white",
        width:responsiveScreenWidth(40),
        marginHorizontal:responsiveScreenWidth(5),   
    },
    googlebutton:{
        width:responsiveScreenWidth(90),
        height:responsiveScreenHeight(7.5),
        borderRadius:responsiveScreenHeight(2),
        backgroundColor:"#35383F",
        borderWidth:1,
        borderColor:"#4f5154",
        alignSelf:'center',
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        width:responsiveScreenWidth(10),
        height:responsiveScreenHeight(5),
        marginRight:responsiveScreenWidth(5)
    }
})