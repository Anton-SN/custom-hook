import React, { createContext, useReducer } from "react";
import { WindowSizeType, ChildrenPropsType } from "@types";

const WindowSizeContext = createContext<WindowSizeType | null>(null);

export enum ActionPoints {
    CHANGE_WIDTH = "CHANGE_WIDTH",
    CHANGE_HEIGHT = "CHANGE_HEIGHT",
    CHANGE_SIZE = "CHANGE_SIZE"
}

export type SizeType = { height: number, width: number }

export type ActionType = {
    type: ActionPoints.CHANGE_WIDTH | ActionPoints.CHANGE_HEIGHT;
    value: number;
} | {
    type: ActionPoints.CHANGE_SIZE;
    value: SizeType;
};

const reducer = (state: SizeType, action: ActionType) => {
    switch (action.type) {
        case ActionPoints.CHANGE_WIDTH: {
            state.width = action.value
            return state;
        }
        case ActionPoints.CHANGE_HEIGHT: {
            state.height = action.value
            return state;
        }
        case ActionPoints.CHANGE_SIZE: {
            return action.value;
        }
        default:
            return state
    }
}

const WindowSizeProvider: React.FC<ChildrenPropsType> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { height: window.innerHeight, width: window.innerWidth });

    const value = {
        state,
        dispatch,
    }

    return (
        <WindowSizeContext.Provider value={value}>
            {children}
        </WindowSizeContext.Provider>
    );
};

export { WindowSizeContext, WindowSizeProvider };
