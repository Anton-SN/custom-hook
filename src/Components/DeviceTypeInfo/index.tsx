import React, { useContext } from 'react';
import Text from 'UI/Text'
import { DeviceTypeContext } from "Contexts/DeviceType";
import styles from './styles.module.css';

const DeviceTypeInfo: React.FC = () => {
    const userAgent = useContext(DeviceTypeContext)

    return <div className={styles.container}><Text text={"Device type: " + userAgent}/></div>
}

export default DeviceTypeInfo;
