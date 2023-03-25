export enum ActionPoints {
    CHANGE_WIDTH = "CHANGE_WIDTH",
    CHANGE_HEIGHT = "CHANGE_HEIGHT",
    CHANGE_SIZE = "CHANGE_SIZE"
}

export type StateType = { height: number, width: number }

export type ActionType = {
    type: ActionPoints.CHANGE_WIDTH | ActionPoints.CHANGE_HEIGHT;
    value: number;
} | {
    type: ActionPoints.CHANGE_SIZE;
    value: StateType;
};

export type DispatchType = (action: ActionType) => void

export type WindowSizeContextType = {
    state: StateType
}
