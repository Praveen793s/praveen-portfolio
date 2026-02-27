import styles from "./Skills.module.css";
import {
  FaReact,
  FaNodeJs,
  FaLinux,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostman,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiGoogle,
  SiGreensock,
  SiThreedotjs,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Artificial Intelligence", icon: <SiGoogle /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "Google Antigravity", icon: <SiGoogle /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "GSAP", icon: <SiGreensock /> },
  { name: "Three.js", icon: <SiThreedotjs /> },
];

export default function Skills() {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>FEATURES</span>
          <h2 className={styles.title}>Skills</h2>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <span className={styles.icon}>{skill.icon}</span>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
