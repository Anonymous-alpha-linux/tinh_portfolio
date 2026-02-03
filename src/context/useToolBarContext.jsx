import { useContext } from "react";
import { ToolBarContext } from "./ToolBarContext";

export const useToolBarContext = () => {
  return useContext(ToolBarContext);
};
