import React from 'react';
import { WindowSizeProvider } from "../Contexts/WindowSize";
import ThemeToggle from "../Components/ThemeToggle";
import WindowSizeInfo from "../Components/WindowSizeInfo";
import DeviceTypeInfo from "../Components/DeviceTypeInfo";
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
