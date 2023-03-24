import React from 'react';
import ThemeToggle from "../Components/ThemeToggle";
import WindowSizeInfo from "../Components/WindowSizeInfo";
import DeviceTypeInfo from "../Components/DeviceTypeInfo";
import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.container}>
      <WindowSizeInfo text="200x200" />
      <DeviceTypeInfo text="apple" />
      <ThemeToggle />
    </div>
  );
}

export default App;
