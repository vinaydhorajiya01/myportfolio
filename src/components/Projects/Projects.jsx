import React from "react";
import styles from "./Projects.module.css"; // Make sure the path is correct
import projects from "../../data/projects.json"; // Assuming you have the projects data here
import { ProjectCard } from "./ProjectCard"; // Your ProjectCard component

export const Projects = () => {
  const projectCards = projects.map((project, id) => (
    <ProjectCard key={id} project={project} />
  ));

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.cardSliderWrapper}>
        <div className={styles.cardSlider}>
          {/* Duplicate the project cards to create a seamless loop */}
          {projectCards}
          {projectCards} {/* Repeat the project cards for infinite loop */}
        </div>
      </div>
    </section>
  );
};
