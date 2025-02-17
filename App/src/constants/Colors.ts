const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export type ThemeColors = {
  Secondary: string;
  Primary: string;
  Blue: string;
  CardBackground: string;
  CardBorder: string;
  TextPrimary: string;
  TextSecondary: string;
  Success: string;
  Error: string;
  PT: string;
  ST: string;
  TintColorLight: string;
  TintColorDark: string;
  Accent: string; // Added accent color
  FunYellow: string; // Added fun yellow
};

export const Colors: ThemeColors = {
  Secondary: '#FFFFFF',
  Primary: '#151311',
  Blue: '#EC2426',
  CardBackground: '#2b2b2b',
  CardBorder: '#383838',
  TextPrimary: '#E5E5E5',
  TextSecondary: '#A5A5A5',
  Success: '#4CAF50',
  Error: '#FF4C4C',
  PT: '#2b2b2b',
  ST: '#000000',
  TintColorLight: tintColorLight,
  TintColorDark: tintColorDark,
  Accent: '#FFB8DC', // A playful pink
  FunYellow: '#FFD700', // Gold for highlights
};

// 🔹 Fun Dark Theme
const DarkThemeColors: ThemeColors = {
  Secondary: '#282c34',
  Primary: '#181a1b',
  Blue: '#61dafb',
  CardBackground: '#21252b',
  CardBorder: '#30343b',
  TextPrimary: '#e0e0e0',
  TextSecondary: '#999999',
  Success: '#28a745',
  Error: '#dc3545',
  PT: '#21252b',
  ST: '#181a1b',
  TintColorLight: '#61dafb',
  TintColorDark: '#0a7ea4',
  Accent: '#FFB8DC', // Playful pink for highlights
  FunYellow: '#FFD700', // Gold for extra pop
};

// 🔹 Fun Light Theme
const LightThemeColors: ThemeColors = {
  Secondary: '#ffffff',
  Primary: '#f8f9fa',
  Blue: '#2196f3',
  CardBackground: '#ffffff',
  CardBorder: '#e9ecef',
  TextPrimary: '#212529',
  TextSecondary: '#6c757d',
  Success: '#28a745',
  Error: '#dc3545',
  PT: '#ffffff',
  ST: '#f8f9fa',
  TintColorLight: '#2196f3',
  TintColorDark: '#0a7ea4',
  Accent: '#FF69B4',
  FunYellow: '#FFD700', // Gold for highlights
};

// Function to switch themes
export const getColors = (isDarkMode: boolean): ThemeColors =>
  !isDarkMode ? DarkThemeColors : LightThemeColors;
