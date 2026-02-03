import React from "react";
import useFloatingMenu from "../hooks/useFloatingMenu";

export const ToolBarContext = React.createContext(null);

export default function ToolBarContextProvider({ children }) {
  const { containerRef, activeId, open, close, style } = useFloatingMenu();

  const toolBarContext = {
    containerRef,
    activeId,
    open,
    close,
    style
  };

  return (
    <ToolBarContext.Provider value={toolBarContext}>
      {children}
    </ToolBarContext.Provider>
  );
}
