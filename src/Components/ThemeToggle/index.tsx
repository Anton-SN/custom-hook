import React, { useContext } from 'react';
import Toggle from 'UI/Toggle'
import { ThemeContext, LightTheme } from "Contexts/Theme";
import { ThemeContextType } from "@types";

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextType;
    const toggleText  = () => theme === LightTheme ? 'light-theme' : 'dark-theme';

    return <Toggle callback={toggleTheme} text={toggleText()}/>
}

export default ThemeToggle;
