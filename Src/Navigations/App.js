
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Onboarding from '../Helpers/Onbording';
import Onboarding2 from '../Helpers/Onbording2';
import Onboarding3 from '../Helpers/Onbording3';
import Welcome from '../Helpers/Welcome';
import Welcomes from '../login/Welcomes';
import Signupscreen from '../login/Signupscreen';
import Loginscreen from '../login/Loginscreen';
import Icon, { Icons } from '../assets/constant/Icons';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { TouchableOpacity } from 'react-native';
import Splashscreen from '../Helpers/Splashscreen';
import Bottomnavigation from './Bottomnavigation';
import { ToastProvider } from 'react-native-toast-notifications';
import VoiceCallPage from '../Helpers/Videocall';


const Stack = createStackNavigator();

const App = ({navigation}) => {
  return (
    <ToastProvider 
      offsetBottom={60}
      swipeEnabled={true}
      warningIcon={<Icon type={Icons.MaterialCommunityIcons} name="network-strength-off"/>}
    >
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen component={Welcomestack} name='welcomestack' options={{headerShown:false}}/>
          <Stack.Screen component={Bottomnavigation} name="bottomnavigation" options={{headerShown:false}} />        
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
  );
};


// Onboarding + login + signup
const Welcomestack = ({navigation}) =>{
  return(
    <Stack.Navigator 
      initialRouteName="splashscreen"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS, 
      }}>
        <Stack.Screen
          name="splashscreen"
          component={Splashscreen}
          options={{
            title: 'splashscreen', 
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: 'Onboarding', 
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Onboarding2"
          component={Onboarding2}
          options={{
            title: 'Onboarding 2', 
            headerShown: false,
          }}
        />
          <Stack.Screen
           name="Onboarding3"
           component={Onboarding3}
           options={{
            headerShown: false,
            title: 'Onboarding 3', 
          }}
        />
          <Stack.Screen
           name="welcome"
           component={Welcomes}
           options={{
            title: 'Welcome', 
            headerShown: false,
          }}
        />
        <Stack.Screen
           name="voicecall"
           component={VoiceCallPage}
           options={{
            title: 'Welcome', 
            headerShown: false,
          }}
        />
        <Stack.Screen
           name="signup"
           component={Signupscreen}
           options={{
            title: 'Sign Up', 
            headerTransparent : true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => {navigation.replace('welcome')}}>
                <Icon type={Icons.Ionicons} name="arrow-back-outline" color="white" size={responsiveFontSize(6)} style={{marginLeft:responsiveWidth(3)}} />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
           name="login"
           component={Loginscreen}
           options={{
            title: 'Login',
            headerTransparent:true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => {navigation.replace('welcome')}}>
                <Icon type={Icons.Ionicons} name="arrow-back-outline" color="white" size={responsiveFontSize(6)} style={{marginLeft:responsiveWidth(3)}}/>
              </TouchableOpacity>
            ) 
          }}
        />
    </Stack.Navigator>
  )
}

// Bottomnavigation = Video + chat + profile



export default App;
