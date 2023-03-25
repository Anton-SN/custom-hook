export enum ActionPoints {
    CHANGE_WIDTH = "CHANGE_WIDTH",
    CHANGE_HEIGHT = "CHANGE_HEIGHT",
    CHANGE_SIZE = "CHANGE_SIZE"
}

export type SizeType = { height: number, width: number }

export type ActionType = {
    type: ActionPoints.CHANGE_WIDTH | ActionPoints.CHANGE_HEIGHT;
    value: number;
} | {
    type: ActionPoints.CHANGE_SIZE;
    value: SizeType;
};

export type WindowSizeContextType = {
    state: {
        width: number,
        height: number,
    }
    dispatch: (action: ActionType) => void,
}
