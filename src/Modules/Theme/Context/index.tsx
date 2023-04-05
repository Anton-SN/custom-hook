import React, { createContext, useState } from 'react';
import { type ChildrenPropsType } from '@types.common';
import { type ThemeContextType } from './@types';
import './theme.css';

const LightTheme = 'light-theme';
const DarkTheme = 'dark-theme';

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<ChildrenPropsType> = ({ children }) => {
    const [theme, setTheme] = useState(LightTheme);

    function toggleTheme(): void {
        if (theme === DarkTheme) {
            setTheme(LightTheme);
        } else {
            setTheme(DarkTheme);
        }
    }

    const value = { theme, toggleTheme }

    return (
        <ThemeContext.Provider value={value}>
            <div className={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider, LightTheme, DarkTheme };
