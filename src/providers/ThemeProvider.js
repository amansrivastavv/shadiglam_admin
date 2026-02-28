'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { FESTIVAL_THEMES } from '@/constants/themes';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    // Apply theme class to document body
    const themeClass = FESTIVAL_THEMES[currentTheme]?.themeClass || '';
    
    // Remote all previous theme classes
    Object.values(FESTIVAL_THEMES).forEach(theme => {
      if (theme.themeClass) {
        document.body.classList.remove(theme.themeClass);
      }
    });

    if (themeClass) {
      document.body.classList.add(themeClass);
    }
  }, [currentTheme]);

  const value = {
    currentTheme,
    setTheme: setCurrentTheme,
    themeData: FESTIVAL_THEMES[currentTheme],
    allThemes: FESTIVAL_THEMES
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
