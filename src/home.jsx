import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import "./home.scss";

import HomeAbout from "./sections/home-about";
import HomeProject from "./sections/home-project";
import HomeSkill from "./sections/home-skill";
import HomeContact from "./sections/home-contact";

import { FaPaperPlane, FaCloudDownloadAlt } from "react-icons/fa";

import TypeWriter from "./components/typeWriter";
import ToolBar from "./components/toolBar";
import LaserBackground from "./components/lazerBg";
import { useAppContext } from "./context/useAppContext";
import { AVATAR_LINK, MENU_LIST, SOCIAL_LINKS } from "./const";
import { downloadCV } from "./helpers";
import clsx from "clsx";

function Home() {
  const { t, i18n } = useTranslation();

  const { activePage, changeActivePage } = useAppContext();

  const onClickToActivePage = useCallback(
    (pageKey) => {
      changeActivePage(pageKey);
    },
    [changeActivePage]
  );

  return (
    <div className="page" data-lang={i18n.language}>
      <div className="background gradient">
        <LaserBackground />
      </div>

      <div className="layout-root">
        {/* HEADER */}
        <header className="layout-header">
          <div className="layout-header-inner">
            <div className="mobile-header">
              <div className="mobile-brand">
                <div className="mobile-brand-logo">
                  <img src={AVATAR_LINK} alt="logo" loading="lazy" />
                </div>
                <div className="mobile-brand-text">
                  {t("home.hero.name")}
                  <TypeWriter className={"mobile-brand-typewriter"} />
                </div>
              </div>
              <ToolBar />
            </div>
            <nav className={clsx("md:flex flex-col menu-nav rounded-sm")}>
              <ul>
                {MENU_LIST.map((item, index) => (
                  <li
                    key={item.key}
                    className={clsx(
                      "menu-nav-item",
                      index === MENU_LIST.length - 1 && "none-border"
                    )}
                  >
                    <a
                      className="menu-btn-item flex-col uppercase"
                      onClick={() => onClickToActivePage(item.key)}
                    >
                      <span className="menu-btn-icon text-[20px]">
                        {item.icon}
                      </span>
                      <span>{t(`home.menu.${item.key}`)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        {/* LEFT */}
        <div className="layout-left">
          <aside id="hero">
            <main className="hero-profile-bg">
              <div className="profile-cover-image">
                <img
                  src="https://bslthemes.com/html/ryan/images/bg.jpg"
                  alt="bg"
                  loading="lazy"
                />
              </div>

              <div className="profile">
                <div className="profile-info">
                  <div className="profile-avatar">
                    <div className="profile-avatar-img">
                      <img src={AVATAR_LINK} alt="profile" loading="lazy" />
                    </div>
                  </div>

                  <h1 className="text-center text-[34px] font-semibold">
                    {t("home.hero.name")}
                  </h1>

                  <h2 className="text-center text-base mb-3">
                    <TypeWriter />
                  </h2>

                  <div className="flex justify-center gap-3">
                    {SOCIAL_LINKS.map(({ key, icon }) => (
                      <span
                        key={key}
                        className="profile-icon"
                        title={t(`home.social.${key}`)}
                      >
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="profile-footer flex justify-center">
                <div className="profile-btn" onClick={() => downloadCV()}>
                  <span className="profile-btn-context">
                    {t("home.hero.buttons.downloadCv")}
                    <span className="profile-btn-context-icon text-[16px]">
                      <FaCloudDownloadAlt />
                    </span>
                  </span>
                </div>

                <div className="profile-btn-gap" />

                <div
                  className="profile-btn"
                  onClick={() => changeActivePage("contact")}
                >
                  <span className="profile-btn-context">
                    {t("home.hero.buttons.contactMe")}
                    <span className="profile-btn-context-icon">
                      <FaPaperPlane />
                    </span>
                  </span>
                </div>
              </div>
            </main>
          </aside>
        </div>

        {/* RIGHT */}
        <div className="layout-right">
          <div className="layout-align-center">
            {MENU_LIST.map(({ key }) => (
              <div
                key={key}
                className={`card-inner animated ${
                  activePage === key ? "fadeInLeft" : "fadeOutLeft hidden"
                }`}
              >
                {key === "about" && <HomeAbout />}
                {key === "projects" && <HomeProject />}
                {key === "skills" && <HomeSkill />}
                {key === "contact" && <HomeContact />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
