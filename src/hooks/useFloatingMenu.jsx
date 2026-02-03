import { useEffect, useLayoutEffect, useRef, useState } from "react";

function useFloatingMenu() {
  const containerRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [style, setStyle] = useState({});

  const open = (e) => {
    if (anchorEl || activeId) return close();

    const el = e.currentTarget;
    setAnchorEl(el);
    setActiveId(el.dataset.controlId);
  };

  const close = () => {
    setAnchorEl(null);
    setActiveId(null);
  };

  useLayoutEffect(() => {
    if (!anchorEl || !containerRef.current) return;

    const c = containerRef.current.getBoundingClientRect();
    const a = anchorEl.getBoundingClientRect();

    setStyle({
      top: `${a.bottom - c.top - 25}px`,
      left: `${67 + a.left - c.left}px`
    });
  }, [anchorEl]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return {
    containerRef,
    activeId,
    style,
    open,
    close
  };
}

export default useFloatingMenu;
