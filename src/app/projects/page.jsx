"use client";

import styles from "./Projects.module.css";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built using Next.js App Router with dark mode support.",
    tech: ["Next.js", "React", "CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce App",
    description:
      "Full-stack e-commerce application with authentication and database.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    title: "3D graphics website",
    description:
      "A website showcasing 3D graphics using Three.js integrated with React.",
    tech: ["React", "Three.js", "CSS", "GSAP"],
    live: "https://threejs-project-eosin.vercel.app",
    github: "https://github.com/Praveen793s",
  }
];

export default function Projects() {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.titleUnderline}></div>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className={styles.techStack}>
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            <div className={styles.links}>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
