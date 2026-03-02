"use client";

import styles from "./Skills.module.css";
import {
  FaReact, FaNodeJs, FaLinux, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiPostman, SiMongodb, SiExpress, SiMysql, SiPostgresql,
  SiGreensock, SiThreedotjs, SiRedis, SiFigma, SiGithub,
  SiDocker,
} from "react-icons/si";

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    emoji: "🎨",
    color: "#38bdf8",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "GSAP", icon: <SiGreensock /> },
      { name: "Three.js", icon: <SiThreedotjs /> },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    emoji: "⚙️",
    color: "#4ade80",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST API", icon: <FaDatabase /> },
      { name: "Linux", icon: <FaLinux /> },
    ],
  },
  {
    id: "database",
    label: "Database",
    emoji: "🗄️",
    color: "#f97316",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    emoji: "🛠️",
    color: "#a78bfa",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>WHAT I WORK WITH</span>
          <h2 className={styles.title}>Skills</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        {/* Category Blocks */}
        <div className={styles.categoriesWrapper}>
          {skillCategories.map((cat) => (
            <div key={cat.id} className={styles.categoryBlock}>
              {/* Category heading */}
              <div className={styles.categoryHeader}>
                <span className={styles.categoryEmoji}>{cat.emoji}</span>
                <h3
                  className={styles.categoryLabel}
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </h3>
                <div
                  className={styles.categoryLine}
                  style={{ background: cat.color }}
                />
              </div>

              {/* Skills grid inside this category */}
              <div className={styles.skillsGrid}>
                {cat.skills.map((skill, i) => (
                  <div
                    key={i}
                    className={styles.skillCard}
                    style={{ "--accent-color": cat.color }}
                  >
                    <span className={styles.icon}>{skill.icon}</span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
