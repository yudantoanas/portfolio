import { Mail } from 'lucide-react';
import { Linkedin, Github } from './Icons';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>Let's build something amazing together or discuss opportunities!</p>
        </div>

        <div className={styles.links}>
          <a href="mailto:yudanto.anas@gmail.com" className={styles.link}>
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a
            href="https://linkedin.com/in/yudantoanas"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/yudantoanas"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Yudanto Anas Nugroho. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
