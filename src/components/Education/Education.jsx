import React from 'react';
import styles from './Education.module.css'; // Assuming you're using CSS Modules

export const Education = () => {
  return (
    <section className={styles.educationSection} id="education">
      <h2 className={styles.title}>My Education Journey</h2>
      <div className={styles.timeline}>
        {/* Master's Degree */}
        <div className={styles.timelineItem}>
          <div className={styles.timelineCircle}></div>
          <div className={styles.timelineContent}>
            <h3>Master's in Automotive Software Engineering</h3>
            <p>Technische Universität Chemnitz, Germany</p>
            <ul>
              <li>Coursework: Specializing in AI & Machine Learning</li>
            </ul>
          </div>
          <div className={styles.timelineYear}>Oct 2023 - Present</div>
        </div>

        {/* Bachelor's Degree */}
        <div className={styles.timelineItem}>
          <div className={styles.timelineCircle}></div>
          <div className={styles.timelineContent}>
            <h3>Bachelor of Engineering in Computer Engineering</h3>
            <p>Gujarat Technological University, India</p>
            <ul>
              <li>Grade: 1,5</li>
              <li>Coursework: Mathematics, Physics, Probability and Statistics, Python for Data Science, Machine Learning, Artificial Intelligence, Theory of Computation, IOT and applications,Web Programming, Information security, Database
                Management Systems, Engineering Graphics and Design, Data Structures, Object Oriented Programming (JAVA),
                Computer Organization and Architecture, Operating System, Analysis and Design of Algorithms, Computer
                Networks, Software Engineering, Mobile Application Development, Mobile Computing, and Wireless
                Communication.</li>
            </ul>
          </div>
          <div className={styles.timelineYear}>Jun 2019 - Jun 2023</div>
        </div>
      </div>
    </section>
  );
};
