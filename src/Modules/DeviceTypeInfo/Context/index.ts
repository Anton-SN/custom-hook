import { createContext } from 'react';

export const DeviceTypeContext = createContext(window.navigator.userAgent)
