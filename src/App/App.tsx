import React from 'react';
import { WindowSizeProvider, WindowSizeInfo} from "../Modules/WindowSizeInfo";
import { DeviceTypeInfo } from "../Modules/DeviceTypeInfo";
import { ThemeToggle } from "../Modules/ThemeToggle";
import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.container}>
      <WindowSizeProvider>
        <WindowSizeInfo />
      </WindowSizeProvider>
      <DeviceTypeInfo />
      <ThemeToggle />
    </div>
  );
}

export default App;
