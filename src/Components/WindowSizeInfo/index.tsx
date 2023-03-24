import React from 'react';
import Text from 'UI/Text'

type WindowSizeInfoProps = {
    text: string,
}

const WindowSizeInfo: React.FC<WindowSizeInfoProps> = ({ text }) => {
    return <Text text={"Window size: " + text}/>
}

export default WindowSizeInfo;
