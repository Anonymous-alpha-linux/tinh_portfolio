import React from "react";

import "./home-skill.scss";

import { FaBriefcase, FaCheck, FaLanguage } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import HighlightText from "../components/highlightText";
import { useTranslation } from "react-i18next";
const knowledgeLst = [
  "skills.knowledge.items.0",
  "skills.knowledge.items.1",
  "skills.knowledge.items.2",
  "skills.knowledge.items.3"
];

const codingSkills = [
  "skills.coding.items.0",
  "skills.coding.items.1",
  "skills.coding.items.2",
  "skills.coding.items.3"
];

function HomeSkill() {
  const { t } = useTranslation();

  return (
    <section>
      <main>
        <HighlightText text={t("resume.title")} />

        <div className="mb-3 resume-container">
          <main className="resume-exp-box">
            <div
              className="resume-exp-header"
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <span className="mb-3 resume-exp-icon">
                <FaBriefcase />
              </span>
              <p className="resume-exp-title">{t("resume.experience.title")}</p>
            </div>

            <nav className="resume-exp-container">
              <div className="resume-exp-tree">
                <div className="mb-3 resume-exp-node active">
                  <span className="resume-exp-node-duration">
                    {t("resume.experience.items.0.duration")}
                  </span>
                  <p className="resume-exp-node-company">
                    {t("resume.experience.items.0.company")}
                  </p>
                  <h3 className="resume-exp-node-role">
                    {t("resume.experience.items.0.role")}
                  </h3>
                  <p className="resume-exp-node-desc">
                    {t("resume.experience.items.0.description")}
                  </p>
                </div>

                <div className="mb-3 resume-exp-node">
                  <span className="resume-exp-node-duration">
                    {t("resume.experience.items.1.duration")}
                  </span>
                  <p className="resume-exp-node-company">
                    {t("resume.experience.items.1.company")}
                  </p>
                  <h3 className="resume-exp-node-role">
                    {t("resume.experience.items.1.role")}
                  </h3>
                  <p className="resume-exp-node-desc">
                    {t("resume.experience.items.1.description")}
                  </p>
                </div>

                <div className="mb-3 resume-exp-node">
                  <span className="resume-exp-node-duration">
                    {t("resume.experience.items.2.duration")}
                  </span>
                  <p className="resume-exp-node-company">
                    {t("resume.experience.items.2.company")}
                  </p>
                  <h3 className="resume-exp-node-role">
                    {t("resume.experience.items.2.role")}
                  </h3>
                  <p className="resume-exp-node-desc">
                    {t("resume.experience.items.2.description")}
                  </p>
                </div>
              </div>
            </nav>
          </main>

          <main className="resume-edu-box">
            <div
              className="resume-edu-header"
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <span className="mb-3 service-item-icon">
                <FaGraduationCap />
              </span>
              <p className="service-item-title">
                {t("resume.education.title")}
              </p>
            </div>

            <nav className="resume-edu-container">
              <div className="resume-edu-tree">
                <div className="mb-3 resume-edu-node active">
                  <span className="resume-edu-node-duration">
                    {t("resume.education.items.0.duration")}
                  </span>
                  <p className="resume-edu-node-company">
                    {t("resume.education.items.0.school")}
                  </p>
                  <p className="resume-edu-node-role">
                    {t("resume.education.items.0.role")}
                  </p>
                  <p className="resume-exp-node-desc">
                    {t("resume.education.items.0.description")}
                  </p>
                </div>

                <div className="mb-3 resume-edu-node active">
                  <span className="resume-edu-node-duration">
                    {t("resume.education.items.1.duration")}
                  </span>
                  <p className="resume-edu-node-company">
                    {t("resume.education.items.1.school")}
                  </p>
                  <p className="resume-edu-node-role">
                    {t("resume.education.items.1.role")}
                  </p>
                  <p className="resume-exp-node-desc">
                    {t("resume.education.items.1.description")}
                  </p>
                </div>
              </div>
            </nav>
          </main>
        </div>
      </main>

      <main>
        <HighlightText text={t("skills.title")} />

        <div className="mb-3 skill-container">
          <main className="skill-box">
            <div className="skill-header">
              <span className="mb-3 skill-icon">
                <FaBriefcase />
              </span>
              <span className="skill-title">{t("skills.coding.title")}</span>
            </div>

            <nav>
              <div className="mb-3 skill-coding-lst">
                {codingSkills.map((key, id) => (
                  <div className="mb-3 skill-coding-item" key={id}>
                    <span className="skill-coding-icon">
                      <FaCheck />
                    </span>
                    <p>{t(key)}</p>
                  </div>
                ))}
              </div>
            </nav>
          </main>

          <main className="skill-box">
            <div className="skill-header">
              <span className="mb-3 skill-icon">
                <FaGraduationCap />
              </span>
              <span className="skill-title">{t("skills.knowledge.title")}</span>
            </div>

            <ul className="skill-knowledge-lst">
              {knowledgeLst.map((key, id) => (
                <li className="skill-knowledge-item" key={id}>
                  <span className="skill-coding-icon">
                    <FaCheck />
                  </span>
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </main>
        </div>

        <div className="mb-3 skill-container">
          <main className="skill-box">
            <div className="mb-3 skill-header">
              <span className="mb-3 skill-icon">
                <FaLanguage />
              </span>
              <span className="skill-title">{t("skills.languages.title")}</span>
            </div>

            <nav className="skill-coding-lst">
              <div className="mb-3 skill-coding-item">
                <span className="skill-coding-icon">
                  <FaCheck />
                </span>
                <p>{t("skills.languages.items.0")}</p>
              </div>
              <div className="mb-3 skill-coding-item">
                <span className="skill-coding-icon">
                  <FaCheck />
                </span>
                <p>{t("skills.languages.items.1")}</p>
              </div>
            </nav>
          </main>
        </div>
      </main>
    </section>
  );
}

export default HomeSkill;
