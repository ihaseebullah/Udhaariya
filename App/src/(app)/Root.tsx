import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './(main)/(home)/Home';
import {useTheme} from '../Theme/Context/Theme';
import Auth from './(auth)/Auth';
import OboardingStack from './(onboarding)/OboardingStack';
const Stack = createNativeStackNavigator();
const Root = () => {
  const {Colors, isDarkMode} = useTheme();
  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.Primary}
        animated={true}
      />
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OboardingStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default Root;
