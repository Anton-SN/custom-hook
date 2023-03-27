import React from 'react';
import Text from 'UI/Text'
import { useWindowSizeInfo } from '../../hooks/useWindowSizeInfo'

export const WidthInfo: React.FC = () => {
    const { state } = useWindowSizeInfo();
    return <Text text={`Window width: ${state.width} px`}/>
}
