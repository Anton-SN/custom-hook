import React, {createContext, useReducer} from "react";
import { ChildrenPropsType } from "@types.common";
import { WindowSizeContextType, ActionType, StateType, ActionPoints } from "./@types";
import { useWindowResize } from '../hooks/useWindowResize';

const WindowSizeContext = createContext<WindowSizeContextType | null>(null);

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case ActionPoints.CHANGE_WIDTH: {
            return { height: state.height, width: action.value };
        }
        case ActionPoints.CHANGE_HEIGHT: {
            return { height: action.value, width: state.width };
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

    useWindowResize(state, dispatch);

    const value = { state }

    return (
        <WindowSizeContext.Provider value={value}>
            {children}
        </WindowSizeContext.Provider>
    );
};

export { WindowSizeContext, WindowSizeContextProvider };
