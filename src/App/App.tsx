import React from 'react';
import { WindowSizeInfo} from '../Modules/WindowSizeInfo';
import { DeviceTypeInfo } from '../Modules/DeviceTypeInfo';
import { ThemeToggle, useTheme } from '../Modules/ThemeToggle';
import styles from './styles.module.css';
import './theme.css';

const App: React.FC = () => {
    const { theme } = useTheme();

  return (
    <div className={`App ${theme} ${styles.container}`}>
      <WindowSizeInfo />
      <DeviceTypeInfo />
      <ThemeToggle />
    </div>
  );
};

export default App;
