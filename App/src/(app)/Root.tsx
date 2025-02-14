import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './(main)/(home)/Home';
import {useTheme} from '../Theme/Context/Theme';
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
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default Root;
