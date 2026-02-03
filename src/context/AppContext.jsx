import React from "react";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { KEY_ACTIVE_LANG, KEY_ACTIVE_PAGE, MENU_LIST } from "../const";

export const AppContext = React.createContext(null);

export default function AppContextProvider({ children }) {
  const [lang, setLang] = useState();
  const [activePage, setActivePage] = useState(MENU_LIST[0].key);
  const { i18n } = useTranslation();

  const changeActivePage = useCallback((pageKey) => {
    setActivePage(pageKey);
    localStorage.setItem(KEY_ACTIVE_PAGE, pageKey);
  }, []);

  useLayoutEffect(() => {
    const storedPage = localStorage.getItem(KEY_ACTIVE_PAGE);

    if (storedPage) setActivePage(storedPage || "home");
  }, []);

  function changeLanguage(l) {
    setLang(l);

    localStorage.setItem(KEY_ACTIVE_LANG, l);
  }

  useLayoutEffect(() => {
    let storedLang = localStorage.getItem(KEY_ACTIVE_LANG);

    if (storedLang === "null" || !storedLang) storedLang = "EN";

    setLang(storedLang);
  }, []);

  useEffect(() => {
    i18n.changeLanguage(String(lang).toLowerCase());
  }, [i18n, lang]);

  const appContext = {
    lang,
    activePage,
    changeActivePage,
    changeLanguage
  };

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
}
