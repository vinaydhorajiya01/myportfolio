import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
  <h2 className={styles.title}>About Me</h2>
  <div className={styles.content}>
    <div className={styles.imageAndButtons}>
      <img
        src="./assets/about/profilee.jpg"
        alt="Me"
        className={styles.aboutImage}
      />
      {/* Buttons below the image */}
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => window.open('./assets/CV.pdf')}>
          Download CV
        </button>
      </div>
    </div>

    <ul className={styles.aboutItems}>
      <li className={styles.aboutItem}>
        <span className={styles.icon}>👨‍💻</span>
        <p>
          I’m Vinay Dhorajiya, an aspiring AI Engineer with a focus on Computer Vision, Machine Learning, and Natural Language Processing (NLP).
        </p>
      </li>
      <li className={styles.aboutItem}>
        <span className={styles.icon}>🎓</span>
        <p>
          Currently pursuing my Master’s in Automotive Software Engineering at Technische Universität Chemnitz, I have hands-on experience building AI solutions using Python, TensorFlow, OpenCV, and PyTorch. I'm passionate about developing innovative AI applications and contributing to impactful projects.
        </p>
      </li>
      <li className={styles.aboutItem}>
        <span className={styles.icon}>🛠</span>
        <p>
          From building AI-driven applications to solving real-world computer vision problems, I work with cutting-edge technologies like TensorFlow, PyTorch, and OpenCV.
        </p>
      </li>
      <li className={styles.aboutItem}>
        <span className={styles.icon}>🔧</span>
        <p>
          I enjoy tackling complex challenges, optimizing models, and turning data into actionable insights that drive value.
        </p>
      </li>
      <li className={styles.aboutItem}>
        <span className={styles.icon}>💡</span>
        <p>
          Always curious and eager to learn, I’m constantly seeking new ways to push the boundaries of AI and machine learning.
        </p>
      </li>
    </ul>
  </div>
</section>

  );
};
