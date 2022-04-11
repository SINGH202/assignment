import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

const ThemeButton = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={toggleTheme}>
        Switch Theme to {currentTheme == "light" ? "Dark" : "Light"}
      </button>
    </>
  );
};
export { ThemeButton };
