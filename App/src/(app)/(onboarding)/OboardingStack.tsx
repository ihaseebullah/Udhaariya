import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingOne from './OnboardingOne';
import {useTheme} from '../../Theme/Context/Theme';
import OnboardingTwo from './OnboardingTwo';
import OnboardingThree from './OnboardingThree';
import Splash from './Splash';
const Onboarding = createNativeStackNavigator();
const OboardingStack = () => {
  const {Colors, isDarkMode} = useTheme();
  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.Primary}
        animated={true}
      />
      <Onboarding.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animation: 'slide_from_right',
        }}
        initialRouteName="Splash">
        <Onboarding.Screen name="Splash" component={Splash} />
        <Onboarding.Screen name="OnboardingOne" component={OnboardingOne} />
        <Onboarding.Screen name="OnboardingTwo" component={OnboardingTwo} />
        <Onboarding.Screen name="OnboardingThree" component={OnboardingThree} />
      </Onboarding.Navigator>
    </>
  );
};

export default OboardingStack;
