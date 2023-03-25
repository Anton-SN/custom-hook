import React, { createContext, useReducer } from "react";
import { ChildrenPropsType } from "@types.common";
import { WindowSizeContextType, ActionType, SizeType, ActionPoints } from "./@types";

const WindowSizeContext = createContext<WindowSizeContextType | null>(null);

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

const WindowSizeContextProvider: React.FC<ChildrenPropsType> = ({ children }) => {
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

export { WindowSizeContext, WindowSizeContextProvider };
