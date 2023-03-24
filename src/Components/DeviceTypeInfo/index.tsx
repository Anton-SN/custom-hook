import React from 'react';
import Text from 'UI/Text'

type DeviceTypeInfoProps = {
    text: string,
}

const DeviceTypeInfo: React.FC<DeviceTypeInfoProps> = ({ text }) => {
    return <Text text={"Device type: " + text}/>
}

export default DeviceTypeInfo;
