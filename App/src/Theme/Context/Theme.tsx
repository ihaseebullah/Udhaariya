import {getColors} from '../../constants/Colors';
import React, {createContext, useContext, useState, ReactNode} from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  Colors: ReturnType<typeof getColors>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
type ThemeProviderProps = {
  children: ReactNode;
};
export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const toggleTheme = () => setIsDarkMode(prev => !prev);
  const colors = getColors(isDarkMode);

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme, Colors: colors}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
