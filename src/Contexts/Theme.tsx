import React, { createContext, useState } from "react";
import { ThemeContextType } from "@types.theme";

const LightTheme = 'light';
const DarkTheme = 'dark';

const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
    children: JSX.Element | JSX.Element[]
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
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
