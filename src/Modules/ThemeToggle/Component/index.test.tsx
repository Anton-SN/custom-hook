import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from './index';
import {ThemeProvider, LightTheme, DarkTheme} from '../Context';

describe('Theme toggle', () => {
    test('Toggle exist', () => {
        render(<ThemeProvider><ThemeToggle /></ThemeProvider>)
        const toggle = screen.getByRole('button')
        expect(toggle.innerHTML).toBe(LightTheme);
    })

    test('should toggle theme', () => {
        render(<ThemeProvider><ThemeToggle /></ThemeProvider>)
        const toggle = screen.getByRole('button')

        fireEvent.click(toggle)
        expect(toggle.innerHTML).toBe(DarkTheme);

        fireEvent.click(toggle)
        fireEvent.click(toggle)
        expect(toggle.innerHTML).toBe(DarkTheme);

        fireEvent.click(toggle)
        fireEvent.click(toggle)
        fireEvent.click(toggle)
        expect(toggle.innerHTML).toBe(LightTheme);
    })
})
