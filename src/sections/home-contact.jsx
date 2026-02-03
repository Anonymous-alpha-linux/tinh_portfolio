import React from "react";
import "./home-contact.scss";
import { FaAngleRight } from "react-icons/fa";
import HighlightText from "../components/highlightText";
import { useTranslation } from "react-i18next";

/** Hello Tinh, 
 My name is Quang, from the LAK Comanny Co,LTA. 
 I'm interesting with your portfolio. 
 We're having the project of UK Nationality. 
 We're finding the talents like you to make it right things. 
 Also, if you're getting available for free, can you get try to contact me with the following contacts.  
 */
const aboutInfors = [
  {
    titleKey: "contact.info.address.label",
    valueKey: "contact.info.address.value"
  },
  {
    titleKey: "contact.info.email.label",
    valueKey: "contact.info.email.value"
  },
  {
    titleKey: "contact.info.phone.label",
    valueKey: "contact.info.phone.value"
  },
  {
    titleKey: "contact.info.freelance.label",
    valueKey: "contact.info.freelance.value"
  }
];

function HomeContact() {
  const { t } = useTranslation();

  return (
    <section style={{ paddingBottom: "40px" }}>
      <main style={{ paddingBottom: "40px" }}>
        <HighlightText text={t("contact.title")} />

        <aside className="contact-infos-container">
          {aboutInfors.map(({ titleKey, valueKey }, id) => {
            return (
              <div key={id} className="contact-infos-item">
                <p
                  className="about-title"
                  style={{ textTransform: "uppercase" }}
                >
                  {t(titleKey)}
                </p>
                . . . .<p className="about-value">{t(valueKey)}</p>
              </div>
            );
          })}
        </aside>
      </main>

      <main>
        <HighlightText text={t("contact.form.title")} />

        <aside style={{ padding: "20px" }}>
          <form>
            <div className="contact-input-group">
              <input
                placeholder={t("contact.form.fullName")}
                className="mb-3"
              />
              <input placeholder={t("contact.form.email")} className="mb-3" />
            </div>

            <textarea
              placeholder={t("contact.form.message")}
              className="mb-3"
              style={{ width: "100%" }}
            />

            <button
              title={t("contact.form.send")}
              type="submit"
              className=""
              style={{
                background: "transparent",
                padding: "0",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}
            >
              <span className="text" style={{ textTransform: "uppercase" }}>
                {t("contact.form.send")}
              </span>
              <span className="arrow">
                <FaAngleRight />
              </span>
            </button>
          </form>
        </aside>
      </main>
    </section>
  );
}

export default HomeContact;
