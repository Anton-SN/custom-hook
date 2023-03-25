import { useEffect } from "react";
import { useThrottle } from "hook/useThrottle";
import { StateType, DispatchType, ActionPoints } from '../Context/@types';

export const useWindowResize = (state: StateType, dispatch: DispatchType) => {
    const onResize = () =>{
        const width = window.innerWidth;
        const height = window.innerHeight;
        console.log(width, height, state)

        if (state.height === height && state.width !== width) {
            dispatch({ type: ActionPoints.CHANGE_WIDTH, value: window.innerWidth })
        }

        if (state.height !== height && state.width === width) {
            dispatch({ type: ActionPoints.CHANGE_HEIGHT, value: window.innerHeight })
        }

        if (state.height !== height && state.width !== width) {
            dispatch({ type: ActionPoints.CHANGE_SIZE, value: { width: window.innerWidth, height: window.innerHeight} })
        }
    }

    const onResizeThrottled = useThrottle(onResize, 500)

    useEffect(() => {
        window.addEventListener('resize', onResizeThrottled)

        return () => {
            window.removeEventListener('resize', onResizeThrottled)
        }
    }, [])
}
