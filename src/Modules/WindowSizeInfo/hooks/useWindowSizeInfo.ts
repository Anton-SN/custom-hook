import { useContext } from 'react';
import { WindowSizeContext } from '../Context';
import { type WindowSizeContextType } from '../Context/@types';

export const useWindowSizeInfo = (): WindowSizeContextType => useContext(WindowSizeContext) as WindowSizeContextType
