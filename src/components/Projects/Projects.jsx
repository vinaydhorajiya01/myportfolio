import React, { useRef, useState, useEffect } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const projectCards = projects.map((project, id) => (
    <ProjectCard key={id} project={project} />
  ));

  // Auto-scroll carousel continuously
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Give time for DOM to calculate scrollWidth properly
    const timer = setTimeout(() => {
      const scroll = () => {
        if (!isDragging && slider) {
          slider.scrollLeft += 0.5;

          // Calculate the halfway point for seamless loop
          const scrollableWidth = slider.scrollWidth / 2;

          if (slider.scrollLeft >= scrollableWidth) {
            slider.scrollLeft = 0;
          }
        }
      };

      const interval = setInterval(scroll, 30);
      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, [isDragging]);

  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div 
        className={styles.cardSliderWrapper}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.cardSlider}>
          {projectCards}
          {projectCards}
        </div>
      </div>
    </section>
  );
};
