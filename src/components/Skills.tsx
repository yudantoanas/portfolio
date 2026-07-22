import React, { useState } from 'react';
import {
  Code,
  Database,
  Smartphone,
  Server,
  Globe,
  GitBranch,
  Package,
  Wind,
  Cpu,
  BarChart2
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import styles from './Skills.module.css';

interface Skill {
  name: string;
  category: 'Languages' | 'Databases' | 'Frameworks' | 'Platforms' | 'Tools';
  icon: LucideIcon;
  logo?: string;
}

const SKILLS_DATA: Skill[] = [
  // Languages
  { name: 'Kotlin', category: 'Languages', icon: Code, logo: 'kotlin' },
  { name: 'Python', category: 'Languages', icon: Code, logo: 'python' },
  { name: 'Golang', category: 'Languages', icon: Code, logo: 'go' },
  { name: 'Java', category: 'Languages', icon: Code, logo: 'oracle' },
  { name: 'PHP', category: 'Languages', icon: Code, logo: 'php' },
  { name: 'Javascript', category: 'Languages', icon: Code, logo: 'javascript' },
  // Databases
  { name: 'PostgreSQL', category: 'Databases', icon: Database, logo: 'postgresql' },
  { name: 'MongoDB', category: 'Databases', icon: Database, logo: 'mongodb' },
  { name: 'ElasticSearch', category: 'Databases', icon: Database, logo: 'elasticsearch' },
  { name: 'Firestore', category: 'Databases', icon: Database, logo: 'firebase' },
  // Frameworks
  { name: 'Jetpack Compose', category: 'Frameworks', icon: Smartphone, logo: 'jetpackcompose' },
  { name: 'Node.js', category: 'Frameworks', icon: Server, logo: 'nodedotjs' },
  { name: 'SpringBoot', category: 'Frameworks', icon: Server, logo: 'springboot' },
  { name: 'Laravel', category: 'Frameworks', icon: Server, logo: 'laravel' },
  // Platforms
  { name: 'Kotlin Multiplatform', category: 'Platforms', icon: Smartphone, logo: 'kotlin' },
  { name: 'Android native', category: 'Platforms', icon: Smartphone, logo: 'android' },
  { name: 'API Services', category: 'Platforms', icon: Globe },
  // Tools
  { name: 'Git', category: 'Tools', icon: GitBranch, logo: 'git' },
  { name: 'GitFlow', category: 'Tools', icon: GitBranch },
  { name: 'Docker', category: 'Tools', icon: Package, logo: 'docker' },
  { name: 'Airflow', category: 'Tools', icon: Wind, logo: 'apacheairflow' },
  { name: 'pySpark', category: 'Tools', icon: Cpu, logo: 'apachespark' },
  { name: 'Pandas', category: 'Tools', icon: BarChart2, logo: 'pandas' },
];

const CATEGORIES = ['All', 'Languages', 'Databases', 'Frameworks', 'Platforms', 'Tools'] as const;

type FilterType = typeof CATEGORIES[number];

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const [hasError, setHasError] = useState(false);
  const IconComponent = skill.icon;
  const logoUrl = skill.logo && !hasError ? `https://cdn.simpleicons.org/${skill.logo}` : null;

  return (
    <div
      className={`${styles.card} animate-fade-in`}
      style={{ animationDelay: `${index * 0.03}s` }}
    >
      <span className={styles.icon}>
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={`${skill.name} logo`}
            className={styles.logoImg}
            onError={() => setHasError(true)}
          />
        ) : (
          <IconComponent size={22} />
        )}
      </span>
      <span className={styles.name}>{skill.name}</span>
    </div>
  );
};

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filteredSkills = activeFilter === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>Skills & Toolkit</h2>
        <p className={styles.subtitle}>Technologies and platforms I specialize in</p>
      </div>

      <div className={styles.filters}>
        {CATEGORIES.map((category) => (
          <button
            key={category}
            className={`${styles.filterBtn} ${activeFilter === category ? styles.filterActive : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredSkills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};
