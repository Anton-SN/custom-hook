import { ActionType } from './Contexts/WindowSize'

export type ThemeContextType = {
    theme: string,
    setTheme: (theme: string) => void,
    toggleTheme: () => void
}

export type WindowSizeType = {
    state: {
        width: number,
        height: number,
    }
    dispatch: (action: ActionType) => void,
}

export type ChildrenPropsType = {
    children: JSX.Element | JSX.Element[]
}

