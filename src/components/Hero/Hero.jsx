import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vinay Dhorajiya</h1>
        <p className={styles.description}>AI Engineer | Machine Learning & Computer Vision
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="./assets/hero/profile.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
    </section>
  );
};
