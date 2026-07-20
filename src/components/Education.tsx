import React from 'react';
import { GraduationCap } from 'lucide-react';
import styles from './Education.module.css';

export const Education: React.FC = () => {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Education</h2>
          <p className={styles.subtitle}>Academic background and foundation</p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <GraduationCap size={40} />
          </div>
          
          <div className={styles.details}>
            <h3 className={styles.uniName}>Telkom University</h3>
            <div className={styles.degree}>Bachelor of Computer Science</div>
            <div className={styles.major}>Major in Information Systems | Bandung, Indonesia</div>
            <div className={styles.gpa}>GPA: 3.5 / 4.0</div>
          </div>
        </div>
      </div>
    </section>
  );
};
