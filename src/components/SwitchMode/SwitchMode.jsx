import React, { useContext } from "react";
import "./SwitchMode.css"
import "../../App.css"
import ThemeContext from "../../Context/ThemeContext/ThemeContext";

const SwitchMode = ({ checked, onChange }) => {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext)

    const DarkLightMode = () => { 
        return isDarkMode ? 'dark' : 'light'
     }
  return (
    <label className="switch">
      <input onClick={toggleTheme} type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider"></span>
    </label>
  );
};
export default SwitchMode;
