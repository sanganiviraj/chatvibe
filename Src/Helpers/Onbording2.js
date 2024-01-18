import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import { COLORS } from '../assets/constant/Colors';

const { width, height } = Dimensions.get('window');

const Onboarding2 = ({navigation}) => {
  const [activeDot, setActiveDot] = useState(1);


  const handleNextPress = () => {

        navigation.push('Onboarding3');
      
  };
  

  return (
    <View style={styles.container}>
      <StatusBar hidden /> 

      <View style={styles.animationContainer}>
        <LottieView
          source={require('../assets/Lottyfile/Animation - 2.json')}
          loop
          style={styles.animation}
          autoPlay
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleLine}>Watch interesting</Text>
        <Text style={styles.titleLine}> videos from </Text>
        <Text style={styles.titleLine}>around the world Next</Text>
      </View>

      <View style={styles.dotContainer}>
        {[0, 1, 2].map((index) => (
          <View
            key={index}
            style={[styles.dot, index === activeDot && styles.activeDot]}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: 40,
    paddingBottom: 20,
  },
  animationContainer: {
    width: width,
    height: height * 0.4,
  },
  animation: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleLine: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  dotContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    width: 25,
    height: 7,
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: COLORS.primaryvioletmedium,
  },
  nextButton: {
    backgroundColor: COLORS.primaryvioletmedium,
    width: 200,
    paddingVertical: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
  },
});
