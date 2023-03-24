import React from 'react';
import styles from './styles.module.css';

type ToggleProps = {
    text: string,
    callback: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ text, callback }) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        callback();
    };

    return <button className={styles.toggle} onClick={handleClick}>{text}</button>
}

export default Toggle;
