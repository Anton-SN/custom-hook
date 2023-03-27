import React from 'react';
import Text from 'UI/Text'
import { useWindowSizeInfo } from '../../hooks/useWindowSizeInfo'

export const HeightInfo: React.FC = () => {
    const { state } = useWindowSizeInfo();
    return <Text text={`Window height: ${state.height} px`}/>
}
