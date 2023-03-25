import React, { createContext, useState } from "react";
import { ThemeContextType, ChildrenPropsType } from "@types";

const LightTheme = 'light';
const DarkTheme = 'dark';

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<ChildrenPropsType> = ({ children }) => {
    const [theme, setTheme] = useState(LightTheme);

    function toggleTheme() {
        if (theme === DarkTheme) {
            setTheme(LightTheme);
        } else {
            setTheme(DarkTheme);
        }
    }

    const value = {
        theme,
        setTheme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider, LightTheme };
