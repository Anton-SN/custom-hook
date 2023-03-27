import React from 'react';
import Toggle from 'UI/Toggle'
import { useTheme } from '../hook/useTheme';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return <Toggle callback={toggleTheme} text={theme}/>
}
