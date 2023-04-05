import { useContext } from 'react';
import { ThemeContext } from '../Context'
import { type ThemeContextType } from '../Context/@types'

export const useTheme = (): ThemeContextType => useContext(ThemeContext) as ThemeContextType;
