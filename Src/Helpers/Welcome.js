import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const Welcome = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar hidden />

            <View style={styles.titleContainer}>
                <Text style={styles.welcomeText}>Welcome to ChatVibe</Text>
            </View>

            <View style={styles.animationContainer}>
                <LottieView
                    source={require('../assets/Lottyfile/Animation1.json')}
                    loop
                    style={styles.animation}
                />
            </View>
            <View style={styles.titleContainer}>

                <Text style={styles.subheading}>Let’s you in</Text>
            </View>

            <View style={styles.centeredButtonsContainer}>
                <View style={styles.centeredButtons}>
                    <TouchableOpacity style={styles.signInButton} onPress={() => { }}>
                        <Text style={styles.buttonText}>I am a Visitor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signInButton} onPress={() => { }}>
                        <Text style={styles.buttonText}>Sign In with Password</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.separatorContainer}>
                <View style={styles.separator}></View>
                <Text style={styles.separatorText}>or</Text>
                <View style={styles.separator}></View>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.continueWithButton} onPress={() => { }}>
                    <Text style={styles.buttonText}>Continue with Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.continueWithButton} onPress={() => { }}>
                    <Text style={styles.buttonText}>Continue with Google</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>
                    Don’t have an account?{' '}
                    <Text style={styles.signupText}>Sign up</Text>
                </Text>
                <Text style={styles.bottomText}>
                    By continuing, you agree to ChatVibe{'\''}s{' '}
                    <Text style={styles.redText}>Terms of Service</Text> and{' '}
                    <Text style={styles.redText}>Privacy Policy</Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingTop: height * 0.03,
        paddingBottom: height * 0.1,
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: height * 0.02,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    
    welcomeText: {
        fontSize: width > 400 ? 24 : 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textShadowColor: '#FF4D67',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 5,
    },

    subheading: {
        fontSize: width > 400 ? 28 : 24,
        color: 'white',
        textAlign: 'center',
        marginTop: 10, 
        textShadowColor: '#FF4D67',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 5,
      },

    animationContainer: {
        width: width,
        height: height * 0.3,
    },
    animation: {
        flex: 1,
    },
    centeredButtonsContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    centeredButtons: {
        alignItems: 'center',
    },
    signInButton: {
        backgroundColor: '#FF4D67',
        width: width * 0.8,
        paddingVertical: height * 0.02,
        marginVertical: height * 0.01,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    continueWithButton: {
        backgroundColor: '#35383F',
        width: width * 0.8,
        paddingVertical: height * 0.02,
        marginVertical: height * 0.01,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: width > 400 ? 16 : 14,
        fontWeight: '900',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 5,
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: height * 0.02,
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: 'white',
        marginHorizontal: 10,
    },

    separatorText: {
        color: 'white',
        fontSize: width > 400 ? 18 : 16,
        fontWeight: '900',
        textShadowColor: '#FF4D67',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 5,
    },
    buttonsContainer: {
        marginBottom: height * 0.02,
    },
    bottomTextContainer: {
        alignItems: 'center',
    },

    bottomText: {
        color: 'white',
        fontSize: width > 400 ? 14 : 12,
        textAlign: 'center',
        margin: 5,
        textShadowColor: '#FF4D67',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },

    signupText: {
        color: '#FF4D67',
        fontWeight: 'bold',
    },
    redText: {
        color: '#FF4D67',
        fontWeight: 'bold',
    },
});

export default Welcome;
