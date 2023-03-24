import React, { useState } from 'react';
import Toggle from 'UI/Toggle'

const LightTheme = 'light';
const DarkTheme = 'dark';

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState(LightTheme)

    const toggleTheme = () => theme === LightTheme ? setTheme(DarkTheme) : setTheme(LightTheme);
    const toggleText  = () => theme === LightTheme ? 'light-theme' : 'dark-theme';

    return <Toggle callback={toggleTheme} text={toggleText()}/>
}

export default ThemeToggle;
