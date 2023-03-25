import { useContext } from "react";
import { WindowSizeContext } from "../Context";
import { WindowSizeContextType } from "../Context/@types";

export const useWindowSizeInfo = () => useContext(WindowSizeContext) as WindowSizeContextType
