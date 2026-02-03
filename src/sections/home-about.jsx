import React from "react";
import "./home-about.scss";

import { FaHtml5 } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import HighlightText from "../components/highlightText";

const ABOUT_INFORS = [
  {
    labelKey: "about.info.age.label",
    valueKey: "about.info.age.value"
  },
  {
    labelKey: "about.info.residence.label",
    valueKey: "about.info.residence.value"
  },
  {
    labelKey: "about.info.freelance.label",
    valueKey: "about.info.freelance.value"
  },
  {
    labelKey: "about.info.address.label",
    valueKey: "about.info.address.value"
  }
];

const SERVICE_INFORS = [
  {
    icon: <FaHtml5 />,
    titleKey: "services.frontend.title",
    contentKey: "services.frontend.content"
  },
  {
    icon: <SiDotnet />,
    titleKey: "services.backend.title",
    contentKey: "services.backend.content"
  },
  {
    icon: <FaFlutter />,
    titleKey: "services.mobile.title",
    contentKey: "services.mobile.content"
  },
  {
    icon: <FaFacebook />,
    titleKey: "services.advertising.title",
    contentKey: "services.advertising.content"
  }
];

function HomeAbout() {
  const { t } = useTranslation();
  return (
    <section>
      <main className="content-box">
        <HighlightText text={t("about.title")} />

        <aside className="my-5">
          <h1 className="intro-title mb-3">{t("about.hello")}</h1>
          <p className="intro-msg mb-3">{t("about.description")}</p>
        </aside>

        <aside className="intro-infos">
          {ABOUT_INFORS.map(({ labelKey, valueKey }, id) => (
            <div
              key={id}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 65px auto",
                marginBottom: "25px"
              }}
            >
              <p className="about-title" style={{ textTransform: "uppercase" }}>
                {t(labelKey)}
              </p>
              . . . .<p className="about-value">{t(valueKey)}</p>
            </div>
          ))}
        </aside>
      </main>

      <main className="content-box">
        <HighlightText text={t("services.title")} />

        <nav className="service-items">
          {SERVICE_INFORS.map(({ icon, titleKey, contentKey }, id) => (
            <main className="service-item" key={id}>
              <div className="service-item-box">
                <span className="mb-3 service-item-icon">{icon}</span>
                <p className="service-item-title">{t(titleKey)}</p>
              </div>
              <p className="service-item-content">{t(contentKey)}</p>
            </main>
          ))}
        </nav>
      </main>
    </section>
  );
}

export default HomeAbout;
