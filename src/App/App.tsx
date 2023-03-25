import React from 'react';
import { WindowSizeContextProvider, WindowSizeInfo} from "../Modules/WindowSizeInfo";
import { DeviceTypeInfo } from "../Modules/DeviceTypeInfo";
import { ThemeToggle, useTheme } from "../Modules/ThemeToggle";
import styles from './styles.module.css';
import './theme.css';

function App() {
    const { theme } = useTheme();

  return (
    <div className={`App ${theme} ${styles.container}`}>
      <WindowSizeContextProvider>
        <WindowSizeInfo />
      </WindowSizeContextProvider>
      <DeviceTypeInfo />
      <ThemeToggle />
    </div>
  );
}

export default App;
