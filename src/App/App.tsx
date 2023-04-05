import React from 'react';
import { WindowSizeInfo} from '../Modules/WindowSizeInfo';
import { DeviceTypeInfo } from '../Modules/DeviceTypeInfo';
import { ThemeToggle } from '../Modules/Theme';
import styles from './styles.module.css';

const App: React.FC = () => (
    <div className={`App ${styles.container}`}>
      <WindowSizeInfo />
      <DeviceTypeInfo />
      <ThemeToggle />
    </div>
)

export default App;
