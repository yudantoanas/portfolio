import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import occurrenceLogo from '../assets/occurrence.png';
import styles from './Projects.module.css';

interface Project {
  title: string;
  role: string;
  company?: string;
  companyUrl?: string;
  desc: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  placeholderText: string;
  logoUrl?: string;
  visibility: 'private' | 'open-source';
}

const PROJECTS_DATA: Project[] = [
  {
    title: 'Occurrence',
    role: 'Software Developer',
    company: 'WRK.House',
    companyUrl: 'https://wrk.house',
    desc: 'Human-connection platform connecting people in the real world. Occurrence runs in the background and notifies people when someone they might be interested in is nearby. Features federated auth, real-time analytics, and background notifications.',
    tags: ['Kotlin', 'Android Native', 'Federated Auth', 'Analytics', 'Background Services'],
    demoUrl: 'https://github.com/yudantoanas/occurrence-app',
    placeholderText: 'OCCURRENCE',
    logoUrl: occurrenceLogo,
    visibility: 'private'
  },
  {
    title: 'Mossquito',
    role: 'Developer & Instructor',
    company: 'Hacktiv8',
    companyUrl: 'https://hacktiv8.com',
    desc: 'Internal developer utility tool built for Hacktiv8. Handles automatic code extraction, syntax validation, and fast plagiarism detection, resulting in a 10% operational efficiency improvement for graders.',
    tags: ['Javascript', 'Node.js', 'AST Parser', 'Code Extraction', 'Plagiarism Check'],
    githubUrl: 'https://github.com/yudantoanas/mossquito',
    placeholderText: 'MOSSQUITO',
    visibility: 'open-source'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>Recent applications and developer tools I've built</p>
      </div>

      <div className={styles.grid}>
        {PROJECTS_DATA.map((project, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.headerGlow}></div>
              {project.logoUrl ? (
                <img
                  src={project.logoUrl}
                  alt={`${project.title} logo`}
                  className={styles.logo}
                />
              ) : (
                <div className={styles.headerTitle}>{project.placeholderText}</div>
              )}
              <span className={`${styles.badge} ${project.visibility === 'open-source' ? styles.openSource : styles.private}`}>
                {project.visibility === 'open-source' ? 'Open Source' : 'Private'}
              </span>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.metaRow}>
                <span className={styles.role}>{project.role}</span>
                {project.company && (
                  <span className={styles.company}>
                    {' '}@{' '}
                    {project.companyUrl ? (
                      <a
                        href={project.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.companyLink}
                      >
                        {project.company}
                      </a>
                    ) : (
                      project.company
                    )}
                  </span>
                )}
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.desc}>{project.desc}</p>

              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.footer}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <Github size={18} />
                    <span>Repository</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <ExternalLink size={18} />
                    <span>Link</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
