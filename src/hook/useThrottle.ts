import {useRef} from 'react';

export const useThrottle = (callback: () => void, delay = 16): () => void => {
    const throttleInProgress = useRef(false);

    return () => {
        if (throttleInProgress.current) return;

        throttleInProgress.current = true;
        setTimeout(() => {
            callback();
            throttleInProgress.current = false;
        }, delay);
    }
}
