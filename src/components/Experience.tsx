import React from "react";
import styles from "./Experience.module.css";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: React.ReactNode[];
  current?: boolean;
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Javascript and Data Science Instructor",
    company: "Hacktiv8",
    location: "Jakarta, Indonesia",
    period: "Oct 2022 – Present",
    current: true,
    achievements: [
      <>
        Contributed in the development and refinement of Data Science and
        Javascript curriculum, improving average test scores by{" "}
        <span className={styles.highlight}>5%</span>.
      </>,
      <>
        Developed{" "}
        <a
          href="https://github.com/yudantoanas/mossquito"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline", fontWeight: 600 }}
        >
          Mossquito
        </a>
        , internal tools for code extractions and plagiarism checking that
        increased operational efficiency by{" "}
        <span className={styles.highlight}>10%</span>.
      </>,
      <>
        Maintained a high satisfaction rating as an Instructor with an average
        of <span className={styles.highlight}>9/10</span>.
      </>,
      <>
        Produced well-educated digital talents with an average score of{" "}
        <span className={styles.highlight}>80/100</span>.
      </>,
      <>
        Contributed in AI grader tool initiative for fast and efficient
        assignment grading process.
      </>,
    ],
  },
  {
    role: "Senior Software Developer",
    company: "Badr Interactive",
    location: "Depok, Indonesia",
    period: "Sep 2019 – Oct 2022",
    achievements: [
      <>
        Led the early stages of the{" "}
        <a
          href="https://plaza.agrego.id/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline", fontWeight: 600 }}
        >
          AgregoCommerce
        </a>{" "}
        marketplace app development and successfully generated{" "}
        <span className={styles.highlight}>100+</span> early adopters.
      </>,
      <>
        Improved{" "}
        <a
          href="https://temanbisnisapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline", fontWeight: 600 }}
        >
          TemanBisnis
        </a>{" "}
        crash-free percentage from 80% to{" "}
        <span className={styles.highlight}>95%</span>, generating an average of{" "}
        <span className={styles.highlight}>100+</span> paid customers for the
        app.
      </>,
      <>
        Revamped{" "}
        <a
          href="https://igrow.asia/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline", fontWeight: 600 }}
        >
          iGrow.asia
        </a>{" "}
        admin dashboard user-interface, increasing task efficiency by{" "}
        <span className={styles.highlight}>10%</span>.
      </>,
      <>
        Engineered new promotion engine for{" "}
        <a
          href="https://flip.id/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline", fontWeight: 600 }}
        >
          Flip.id
        </a>{" "}
        payment feature, increasing conversion rates by{" "}
        <span className={styles.highlight}>15%</span>.
      </>,
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Professional Experience</h2>
          <p className={styles.subtitle}>
            My career journey and measurable impacts
          </p>
        </div>

        <div className={styles.timeline}>
          {EXPERIENCE_DATA.map((item, idx) => (
            <div key={idx} className={styles.item}>
              <div className={styles.dot}></div>
              <div className={styles.card}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>
                      {item.role}
                      {item.current && (
                        <span className={styles.currentBadge}>Current</span>
                      )}
                    </h3>
                    <div className={styles.company}>{item.company}</div>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{item.period}</span>
                    <div className={styles.location}>{item.location}</div>
                  </div>
                </div>
                <ul className={styles.list}>
                  {item.achievements.map((achievement, actIdx) => (
                    <li key={actIdx} className={styles.achievement}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
