import React from 'react';
import styles from './styles.module.css';

interface ToggleProps {
    text: string,
    callback: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ text, callback }) =>
    <button className={styles.toggle} onClick={callback}>{text}</button>

export default Toggle;
