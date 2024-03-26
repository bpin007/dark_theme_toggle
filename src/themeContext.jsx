import React, { createContext, useContext, useEffect, useState } from "react";

export const Theme = createContext();

export const useTheme = () => {
  return useContext(Theme);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };
  const theme = isDarkMode ? "dark" : "light";
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode]);
  return (
    <Theme.Provider value={{ toggleTheme, theme }}>{children}</Theme.Provider>
  );
};
