import React from 'react';
import { WindowSizeContextProvider } from '../Context';
import {HeightInfo} from './HeightInfo';
import {WidthInfo} from './WidthInfo';

export const WindowSizeInfo: React.FC = () => {
    return <WindowSizeContextProvider>
            <WidthInfo/>
            <HeightInfo/>
        </WindowSizeContextProvider>
}
