import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo} onClick={closeMenu}>
          YAN.
        </a>

        <nav className={`${styles.nav} ${isOpen ? styles.navActive : ''}`}>
          <ul className={styles.navList}>
            <li>
              <a href="#skills" className={styles.navLink} onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className={styles.navLink} onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className={styles.navLink} onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className={styles.navLink} onClick={closeMenu}>
                Education
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.navLink} onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.controls}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            onClick={toggleMenu}
            className={styles.menuToggle}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};
