import { useContext } from "react";
import { ThemeContext } from '../Context'
import { ThemeContextType } from '../Context/@types'

export const useTheme = () => useContext(ThemeContext) as ThemeContextType;
