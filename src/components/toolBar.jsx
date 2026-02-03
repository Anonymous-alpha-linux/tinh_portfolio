import { useCallback, useLayoutEffect, useState } from "react";
import { GoSun } from "react-icons/go";
import { FaEllipsisH, FaGlobe } from "react-icons/fa";
import { MdOutlineNightlight } from "react-icons/md";
import { useAppContext } from "../context/useAppContext";
import "./toolBar.scss";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { useToolBarContext } from "../context/useToolBarContext";

const KEY_THEME_MODE = "themeMode";
const languages = [
  {
    code: "EN",
    text: "toolbar.language.en-text"
  },
  {
    code: "VI",
    text: "toolbar.language.vi-text"
  }
];

const MenuItem = ({ className }) => {
  const [themeMode, setThemeMode] = useState("dark");
  const { lang, changeLanguage } = useAppContext();
  const { open, activeId, style } = useToolBarContext();
  const { t } = useTranslation();

  const onClickDarkMode = useCallback(() => {
    setThemeMode((mode) => {
      const newMode = mode === "light" ? "dark" : "light";
      document.body.setAttribute("data-theme", newMode);
      localStorage.setItem(KEY_THEME_MODE, newMode);
      return newMode;
    });
  }, []);
  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem(KEY_THEME_MODE) || "dark";
    setThemeMode(storedTheme);
    document.body.setAttribute("data-theme", storedTheme);
  }, []);

  return (
    <>
      <div className={clsx("menu-btn-group", className)}>
        <div className="menu-btn-item theme-icon" onClick={onClickDarkMode}>
          {themeMode === "light" ? (
            <GoSun className="text-[26px]" />
          ) : (
            <MdOutlineNightlight className="text-[26px]" />
          )}
        </div>

        <div
          className="menu-btn-item theme-icon"
          data-control-id="tabLang"
          onPointerDown={open}
        >
          <FaGlobe className="text-[20px]" />
          <span className="menu-btn-span theme-text-span">{lang}</span>
        </div>

        <div className="menu-btn-item theme-icon">
          <FaEllipsisH className="text-[20px]" />
        </div>
      </div>
      <div
        className={clsx("menu-btn-select", className, !activeId && "hidden")}
        style={style}
      >
        <ul
          className={clsx(
            "menu-btn-options",
            activeId !== "tabLang" && "hidden"
          )}
          data-controlled-id="tabLang"
        >
          {languages.map(({ code, text }) => (
            <li
              className="menu-btn-opt"
              key={code}
              onClick={() => changeLanguage(code)}
            >
              {t(text)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

function ToolBar({ onTriggerMenu }) {
  const { containerRef, close } = useToolBarContext();

  const [expanded, setExpanded] = useState(false);

  const handlePointerLeave = (e) => {
    const next = e.relatedTarget;

    if (next instanceof Window || containerRef.current?.contains(next)) return;

    close();
  };

  const handleTriggerMenu = useCallback(() => {
    setExpanded((prev) => {
      if (onTriggerMenu) {
        onTriggerMenu(!prev);
      }
      return !prev;
    });
    close();
  }, [close, onTriggerMenu]);

  return (
    <>
      <div
        className={clsx(
          "menu-btn text-center text-xs rounded-sm",
          !expanded && "closed"
        )}
        ref={containerRef}
        onPointerLeave={handlePointerLeave}
      >
        <div
          className={clsx("hamburger", expanded && "expanded")}
          onClick={handleTriggerMenu}
        >
          <span />
        </div>
        <MenuItem />
      </div>

      <MenuItem className={clsx("mobile", !expanded && "closed")} />
    </>
  );
}

export default ToolBar;
