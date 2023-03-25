import { useEffect } from "react";
import {StateType, DispatchType, ActionPoints} from '../Context/@types';

export const useWindowResize = (state: StateType, dispatch: DispatchType) => {
    useEffect(() => {
        const onResize = () =>{
            const width = window.innerWidth;
            const height = window.innerHeight;
            console.log(width, height, state)

            if (state.height === height && state.width !== width) {
                console.log(1)
                dispatch({ type: ActionPoints.CHANGE_WIDTH, value: window.innerWidth })
            }
            if (state.height !== height && state.width === width) {
                console.log(2)
                dispatch({ type: ActionPoints.CHANGE_HEIGHT, value: window.innerHeight })}
            if (state.height !== height && state.width !== width) {
                console.log(3)
                dispatch({ type: ActionPoints.CHANGE_SIZE, value: { width: window.innerWidth, height: window.innerHeight} })
            }
        }


        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])
}
