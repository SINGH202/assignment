import React, { useState } from "react";

const ThemeContext = React.createContext();
console.log(ThemeContext); //provider ,consumer
const themeData = {
  light: {
    textcolor: "black",
    backgroundColor:"#f5f5f5"
  },
  dark: {
    textcolor: "white",
    backgroundColor: "#424242"
  }
};

ThemeContext.displayName = "Theme_Context";
const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");
  // console.log(children);
  const toggleTheme = () => {
    setCurrentTheme(currentTheme == "light" ? "dark" : "light");
  };
  const value = {currentTheme,toggleTheme,theme:themeData[currentTheme]} //theme : themData["darak"]
  return <ThemeContext.Provider value={value}> {children}</ThemeContext.Provider>;
};
export { ThemeContext, ThemeContextProvider };

// const contextcreate  = React.crateConetxt()
