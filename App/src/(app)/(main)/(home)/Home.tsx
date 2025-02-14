import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '../../../Theme/Context/Theme';
interface HomeProps {}
const Home: React.FC<HomeProps> = ({}) => {
  const {Colors, isDarkMode, toggleTheme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.Primary,
    },
    btn: {
      borderColor: Colors.Secondary,
      padding: 8,
      borderWidth: 0.5,
      borderRadius: 16,
      marginTop: 10,
    },
    text: {
      color: Colors.Secondary,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Current Theme: {isDarkMode ? 'Dark' : 'Light'}
      </Text>
      <TouchableOpacity onPress={toggleTheme} style={styles.btn}>
        <Text style={styles.text}>{!isDarkMode ? 'Dark' : 'Light'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
