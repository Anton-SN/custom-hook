import React from 'react';
import Text from 'UI/Text'
import { useWindowSizeInfo } from '../hooks/useWindowSizeInfo'

export const WindowSizeInfo: React.FC = () => {
    const { state } = useWindowSizeInfo();
    console.log('———— render ————')
    return <Text text={`Window size: ${state.width} × ${state.height}`}/>
}
