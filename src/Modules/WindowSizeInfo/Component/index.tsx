import React from 'react';
import Text from 'UI/Text'
import { useWindowSizeInfo } from '../hook/useWindowSizeInfo'

export const WindowSizeInfo: React.FC = () => {
    const { state } = useWindowSizeInfo();
    console.log(state)
    return <Text text={`Window size: ${state.width} × ${state.height}`}/>
}
