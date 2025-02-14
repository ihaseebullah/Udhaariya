// Define tint colors for light and dark themes
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
};

const DarkThemeColors: ThemeColors = {
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
  TintColorLight: '#0a7ea4',
  TintColorDark: '#fff',
};

const LightThemeColors: ThemeColors = {
  Secondary: '#151311',
  Primary: '#FFFFFF',
  Blue: '#EC2426',
  CardBackground: '#E5E5E5',
  CardBorder: '#A5A5A5',
  TextPrimary: '#2b2b2b',
  TextSecondary: '#383838',
  Success: '#4CAF50',
  Error: '#FF4C4C',
  PT: '#E5E5E5',
  ST: '#FFFFFF',
  TintColorLight: '#fff',
  TintColorDark: '#0a7ea4',
};

export const getColors = (isDarkMode: boolean): ThemeColors =>
  isDarkMode ? DarkThemeColors : LightThemeColors;
