import React, {useContext} from 'react';
import Text from 'UI/Text'
import { WindowSizeContext } from "../Context";
import { WindowSizeContextType } from "../Context/@types";

export const WindowSizeInfo: React.FC = () => {
    const { state } = useContext(WindowSizeContext) as WindowSizeContextType
    console.log(state)
    return <Text text={`Window size: ${state.width} × ${state.height}`}/>
}
