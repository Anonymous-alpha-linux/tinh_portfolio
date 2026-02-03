import React, { useEffect } from "react";
import HighlightText from "../components/highlightText";
import { useTranslation } from "react-i18next";
import "./home-project.scss";
import clsx from "clsx";

const PROJECT_CATALOGS = ["all", "websites", "campaigns"];

function HomeProject() {
  const { t } = useTranslation();
  const [activeCatlog, setActiveCatlog] = React.useState("all");
  const [activeProject, setActiveProject] = React.useState(0);
  const boundingTimeoutRef = React.useRef(null);

  const handleChangeCatlog = (catlog) => {
    setActiveCatlog(catlog);
  };

  useEffect(() => {
    if (boundingTimeoutRef.current) {
      clearInterval(boundingTimeoutRef.current);
    }

    boundingTimeoutRef.current = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % 6);
    }, 3000);

    return () => {
      clearInterval(boundingTimeoutRef.current);
    };
  }, []);

  return (
    <section>
      <main style={{ paddingBottom: "40px" }}>
        <div className="project-header">
          <HighlightText text={t("projects.title")} />
          <nav className="project-nav">
            <ul style={{ display: "flex", gap: "5px", fontSize: "1rem" }}>
              {PROJECT_CATALOGS.map((catalog) => (
                <li
                  key={catalog}
                  className={clsx(
                    "project-catlog-btn",
                    activeCatlog === catalog && "active"
                  )}
                  onClick={() => handleChangeCatlog(catalog)}
                >
                  {t(`projects.${catalog}`)}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="project-grid-cards">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              className={clsx(
                "project-grid-card",
                "animated",
                activeProject === index ? "fadeInLeft" : "fadeOutLeft hidden"
              )}
              key={index}
            >
              <div className="project-card-image"></div>
              <h2 className="project-card-title">
                Catmedia transport commercial website
              </h2>
              <p className="project-card-category">Website</p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}

export default HomeProject;
