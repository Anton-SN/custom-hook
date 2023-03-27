import React from 'react';
import styles from './styles.module.css';

interface TextProps {
    text: string,
}

const Text: React.FC<TextProps> = ({ text }) => {
    return <p className={styles.text}>{text}</p>
}

export default Text;
