import React from 'react';
import styles from './styles.module.css';

interface ToggleProps {
    text: string,
    callback: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ text, callback }) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        callback();
    };

    return <button className={styles.toggle} onClick={handleClick}>{text}</button>
}

export default Toggle;
