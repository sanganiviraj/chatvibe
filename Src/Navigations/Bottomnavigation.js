import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Chatscreen from '../Screens/Chatscreen';
import Videocallscreen from '../Screens/Videocallscreen';
import Profilescreen from '../Screens/Profilescreen';
import Icon, { Icons } from '../assets/constant/Icons';
import * as Animatable from 'react-native-animatable';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { COLORS } from '../assets/constant/Colors';

const Tab = createBottomTabNavigator();

const Tabarr = [
    {route : 'videocallscreen' , label : 'Videocall' ,  type: Icons.Ionicons, activeIcon: 'videocam', inActiveIcon: 'videocam-outline', component: Videocallscreen , header:false , backgroundcolor:COLORS.primaryvioletfulllight },
    {route : 'chatscreen' , label : 'Chat' ,  type: Icons.Ionicons, activeIcon: 'chatbubble-ellipses-sharp', inActiveIcon: 'chatbubble-ellipses-outline', component: Chatscreen , header:false ,backgroundcolor:COLORS.primaryvioletfulllight},
    {route : 'profilescreen' , label : 'Profile' ,  type: Icons.Ionicons, activeIcon: 'people-sharp', inActiveIcon: 'people-outline', component: Profilescreen , header:false , backgroundcolor:COLORS.primaryvioletfulllight },
]

const TabButton = (props) => {
    const {item,onPress,accessibilityState } = props;
    const focused  = accessibilityState.selected;
    const viewRef = useRef(null);
    const textViewRef = useRef(null)
    
    useEffect (() => {
        if (focused) { // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
            viewRef.current.animate({ 0: { scale: 0.5 }, 1: { scale: 1 } });
            textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
          } else {
            viewRef.current.animate({ 0: { scale: 1, }, 1: { scale: 0.5, } });
            textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
          }

    },[focused])


    return(
        <TouchableOpacity style={[styles.container,{flex: focused ? 1 : 0.80}]} onPress={onPress} activeOpacity={1} >
            <Animatable.View style={styles.container} duration={1000} ref={viewRef}>
                <View style={[styles.btn,{backgroundColor:focused ? item.backgroundcolor : COLORS.primaryvioletfulllight}]}>
                    <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? COLORS.primaryvioletdark : COLORS.primaryvioletmedium}/>
                    <Animatable.View
                        ref={textViewRef}>
                        {focused && <Text style={styles.txt}>{item.label}</Text>}
                    </Animatable.View>
                </View>
            </Animatable.View>
        </TouchableOpacity>
    )   

}

const Bottomnavigation = ({navigation}) => {
  return (
    <Tab.Navigator 
          screenOptions={{
              tabBarStyle: {
                  height: 60,
                  position: 'absolute',
                  bottom: 16,
                  right: 16,
                  left: 16,
                  borderRadius: 16
            }
        }}
    >
        {
            Tabarr.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            headerShown: item.header,
                            tabBarButton: (props) => <TabButton {...props} item={item} />,
                        }}
                    />
                )
            })
        }
    </Tab.Navigator>
  )
} 

export default Bottomnavigation

const styles = StyleSheet.create({
    container:{
        
        justifyContent:'center',
        alignItems:'center',
        
    },
    btn:{
        flexDirection:"row",
        borderRadius:16,
        padding:8,
        alignItems:'center',
    },
    txt:{
        fontSize:responsiveFontSize(2),
        fontFamily:"Outfit-Bold",
        color:"black",
        paddingHorizontal:8
    }
})