import {View, Text} from 'react-native';
import React from 'react';
import Root from './src/(app)/Root';
import {ThemeProvider} from './src/Theme/Context/Theme';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
