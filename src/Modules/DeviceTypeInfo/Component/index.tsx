import React, { useContext } from 'react';
import Text from 'UI/Text'
import { DeviceTypeContext } from '../Context';
import styles from './styles.module.css';

export const DeviceTypeInfo: React.FC = () => {
    const userAgent = useContext(DeviceTypeContext)
    return <div data-testid="device_type" className={styles.container}><Text text={'Device type: ' + userAgent}/></div>
}
