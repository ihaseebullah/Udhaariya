import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  TextInput,
} from 'react-native';
import {useTheme} from '../../../Theme/Context/Theme';
import Text from '../../../components/shared/Text';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const {Colors, isDarkMode, toggleTheme} = useTheme();
  const [selectedColor, setSelectedColor] =
    useState<keyof typeof Colors>('Primary');
  const [textInputValue, setTextInputValue] = useState('');
  const [switchValue, setSwitchValue] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.Primary,
      padding: 20,
    },
    colorSelector: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 20,
      justifyContent: 'center',
    },
    colorButton: {
      padding: 8,
      margin: 4,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: Colors.CardBorder,
      backgroundColor: Colors.CardBackground,
      minWidth: 80,
      alignItems: 'center',
    },
    selectedColorButton: {
      borderWidth: 2,
      borderColor: Colors.Blue,
    },
    colorText: {
      color: Colors.TextPrimary,
      fontSize: 12,
    },
    section: {
      flex: 1,
      marginBottom: 20,
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: Colors.TextPrimary,
      marginBottom: 15,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 20,
      color: Colors.TextSecondary,
      marginBottom: 10,
      textAlign: 'center',
    },
    text: {
      fontSize: 18,
      color: Colors.TextPrimary,
      textAlign: 'center',
    },
    btnPrimary: {
      backgroundColor: Colors.Blue,
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 15,
    },
    btnSecondary: {
      borderColor: Colors.Secondary,
      borderWidth: 1,
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 15,
    },
    btnText: {
      color: Colors.TextPrimary,
      fontSize: 18,
    },
    card: {
      width: '95%',
      backgroundColor: Colors.CardBackground,
      borderRadius: 12,
      padding: 20,
      borderWidth: 1,
      borderColor: Colors.CardBorder,
      marginBottom: 15,
      alignItems: 'center',
    },
    switchThemeBtn: {
      borderColor: Colors.Secondary,
      padding: 10,
      borderWidth: 1,
      borderRadius: 20,
      marginTop: 15,
      marginBottom: 20,
    },
    input: {
      backgroundColor: Colors.CardBackground,
      color: Colors.TextPrimary,
      padding: 15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Colors.CardBorder,
      marginTop: 15,
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 15,
    },
    switchLabel: {
      color: Colors.TextPrimary,
      marginLeft: 10,
      fontSize: 16,
      marginBottom: 90,
    },
    colorDisplay: {
      width: 50,
      height: 50,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Colors.CardBorder,
      marginTop: 15,
    },
  });

  const allColors = Object.keys(Colors) as (keyof typeof Colors)[];

  return (
    <ScrollView style={styles.container}>
      {/* Color Selector */}
      <View style={styles.colorSelector}>
        {allColors.map(colorName => (
          <TouchableOpacity
            key={colorName}
            style={[
              styles.colorButton,
              selectedColor === colorName && styles.selectedColorButton,
              {backgroundColor: Colors.CardBackground},
            ]}
            onPress={() => setSelectedColor(colorName)}>
            <Text style={styles.colorText}>{colorName}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Theme Toggle Button */}
      <TouchableOpacity onPress={toggleTheme} style={styles.switchThemeBtn}>
        <Text style={styles.text}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </Text>
      </TouchableOpacity>

      {/* Color Display Box - Shows the currently selected color */}
      <View
        style={[styles.colorDisplay, {backgroundColor: Colors[selectedColor]}]}
      />

      {/* Sections and Elements (using selectedColor for dynamic styling) */}
      <View style={styles.section}>
        <Text style={[styles.title, {color: Colors[selectedColor]}]}>
          Heading Title
        </Text>
        <Text style={[styles.subtitle, {color: Colors[selectedColor]}]}>
          This is a subtitle
        </Text>
      </View>

      <View
        style={[
          styles.card,
          {flexDirection: 'row', flex: 1, justifyContent: 'center'},
        ]}>
        <Text style={[styles.text, {color: Colors[selectedColor]}]}>
          This is a card
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.btnPrimary,
          {backgroundColor: Colors[selectedColor]},
          {flexDirection: 'row', flex: 1, justifyContent: 'center'},
        ]}>
        <Text style={styles.btnText}>Primary Button</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btnSecondary, {borderColor: Colors[selectedColor]}]}>
        <Text style={styles.btnText}>Secondary Button</Text>
      </TouchableOpacity>

      {/* Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter Text Here"
        placeholderTextColor={Colors.TextSecondary}
        value={textInputValue}
        onChangeText={setTextInputValue}
      />

      {/* Switch */}
      <View style={styles.switchContainer}>
        <Switch
          value={switchValue}
          onValueChange={setSwitchValue}
          trackColor={{false: Colors.CardBorder, true: Colors.Blue}} // Customize track colors
          thumbColor={isDarkMode ? Colors.TintColorDark : Colors.TintColorLight} // Customize thumb colors
        />
        <Text style={styles.switchLabel}>Switch Label</Text>
      </View>

      {/* Add more interactive elements as needed */}
    </ScrollView>
  );
};

export default Home;
