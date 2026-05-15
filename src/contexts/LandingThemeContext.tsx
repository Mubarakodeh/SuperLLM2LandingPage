import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
export type LangCode = 'en' | 'us' | 'es' | 'fr' | 'de';

interface LandingThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  activeLang: LangCode;
  setActiveLang: (lang: LangCode) => void;
}

const LandingThemeContext = createContext<LandingThemeContextValue>({
  theme: 'dark',
  toggleTheme: () => {},
  activeLang: 'en',
  setActiveLang: () => {},
});

export const useLandingTheme = () => useContext(LandingThemeContext);

export const LandingThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [activeLang, setActiveLang] = useState<LangCode>('en');

  useEffect(() => {
    localStorage.setItem('landing-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <LandingThemeContext.Provider value={{ theme, toggleTheme, activeLang, setActiveLang }}>
      {children}
    </LandingThemeContext.Provider>
  );
};
