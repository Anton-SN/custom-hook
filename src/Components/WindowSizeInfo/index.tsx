import React, {useContext} from 'react';
import Text from 'UI/Text'
import { WindowSizeContext } from "Contexts/WindowSize";
import {WindowSizeType} from "../../@types";

const WindowSizeInfo: React.FC = () => {
    const { state } = useContext(WindowSizeContext) as WindowSizeType
    console.log(state)
    return <Text text={`Window size: ${state.width} × ${state.height}`}/>
}

export default WindowSizeInfo;
