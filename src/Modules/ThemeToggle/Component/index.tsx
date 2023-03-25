import React, { useContext } from 'react';
import Toggle from 'UI/Toggle'
import { ThemeContext, LightTheme } from "../Context";
import { ThemeContextType } from "../Context/@types";

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextType;
    const toggleText  = () => theme === LightTheme ? 'light-theme' : 'dark-theme';

    return <Toggle callback={toggleTheme} text={toggleText()}/>
}
