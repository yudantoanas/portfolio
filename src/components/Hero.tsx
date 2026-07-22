import React from "react";
import styles from "./Hero.module.css";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className={`${styles.hero} animate-fade-in`}>
      <div className={styles.container}>
        <div className={styles.codeCard}>
          <div className={styles.codeHeader}>
            <span className={`${styles.dot} ${styles.dotRed}`}></span>
            <span className={`${styles.dot} ${styles.dotYellow}`}></span>
            <span className={`${styles.dot} ${styles.dotGreen}`}></span>
            <span className={styles.codeTitle}>Profile.kt</span>
          </div>
          <pre className={styles.codeBody}>
            <code>
              <span className={styles.keyword}>object</span>{" "}
              <span className={styles.codeClass}>Profile</span> &#123;
              <br />
              &nbsp;&nbsp;<span className={styles.keyword}>val</span> greeting ={" "}
              <span className={styles.string}>
                "Hello! <span className={styles.wave}>👋</span>"
              </span>
              <br />
              &nbsp;&nbsp;<span className={styles.keyword}>val</span> name ={" "}
              <span className={styles.string}>"Yudanto Anas Nugroho"</span>
              <br />
              &nbsp;&nbsp;<span className={styles.keyword}>val</span> title ={" "}
              <span className={styles.string}>
                "Software Developer & Instructor"
              </span>
              <br />
              &nbsp;&nbsp;<span className={styles.keyword}>val</span> location ={" "}
              <span className={styles.string}>"Jakarta, Indonesia 📍"</span>
              <br />
              &nbsp;&nbsp;<span className={styles.keyword}>val</span> experience
              = <span className={styles.string}>"5+ Years"</span>
              <br />
              &nbsp;&nbsp;<span className={styles.keyword}>val</span> expertise
              = <span className={styles.string}>listOf</span>(<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className={styles.string}>"Android / iOS"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className={styles.string}>"Multi-platform Apps"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className={styles.string}>"Back-end & APIs"</span>
              <br />
              &nbsp;&nbsp;)
              <br />
              <br />
              &nbsp;&nbsp;<span className={styles.keyword}>fun</span>{" "}
              <span className={styles.function}>viewSkills</span>() ={" "}
              <a href="#skills" className={styles.codeBtnPrimary}>
                Skills.show()
              </a>
              <br />
              &nbsp;&nbsp;<span className={styles.keyword}>fun</span>{" "}
              <span className={styles.function}>viewExperience</span>() ={" "}
              <a href="#experience" className={styles.codeBtnPrimary}>
                Experience.show()
              </a>
              <br />
              &nbsp;&nbsp;<span className={styles.keyword}>fun</span>{" "}
              <span className={styles.function}>viewProjects</span>() ={" "}
              <a href="#projects" className={styles.codeBtnPrimary}>
                Projects.show()
              </a>
              <br />
              &nbsp;&nbsp;<span className={styles.keyword}>fun</span>{" "}
              <span className={styles.function}>viewEducation</span>() ={" "}
              <a href="#education" className={styles.codeBtnPrimary}>
                Education.show()
              </a>
              <br />
              &nbsp;&nbsp;<span className={styles.keyword}>fun</span>{" "}
              <span className={styles.function}>sayHello</span>() ={" "}
              <a href="#contact" className={styles.codeBtnPrimary}>
                Contact.me()
              </a>
              <br />
              &#125;
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};
