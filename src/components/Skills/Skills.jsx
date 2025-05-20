import React from 'react';
import styles from './Skills.module.css';
import { TiltCard } from './tiltcard';

export const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.skillCategories}>
        <TiltCard
          title="Programming Languages"
          skills={["Python", "Java", "C", "PHP"]}
        />
        <TiltCard
          title="Web Technologies"
          skills={["HTML", "CSS", "JavaScript", "React","XML", "Liquidjs", "Flask"]}
        />
        <TiltCard
          title="Database Systems"
          skills={["MySQL", "SQLite", "Vector Databases"]}
        />
        <TiltCard
          title="Data Science & Machine Learning"
          skills={[
            "Scikit-learn",
            "NumPy",
            "Pandas",
            "Matplotlib",
            "LangChain",
            "Streamlit",
            "ONNX Runtime",
            "FAISS"
          ]}
        />
        <TiltCard
          title="Cloud & DevOps"
          skills={["Microsoft Azure", "GitHub"]}
        />
        <TiltCard
          title="Specialized Areas"
          skills={[
            "Computer Vision",
            "Natural Language Processing",
            "Generative AI",
            "Embedded Systems",
            "Real-Time AI",
            "Human-Computer Interaction"
          ]}
        />
        <TiltCard
          title="GUI & Frontend Frameworks"
          skills={[
            "PyQt5",
            "PyQtChart",
            "Power BI",
            "CVAT",
            "screeninfo"
          ]}
        />
        <TiltCard
          title="Multimedia & Processing Libraries"
          skills={[
            "OpenCV",
            "MoviePy",
            "Pillow",
            "AV"
          ]}
        />
        <TiltCard
          title="Automation & Web Scraping"
          skills={[
            "Selenium",
            "BeautifulSoup"
          ]}
        />
        <TiltCard
          title="Security & System Integration"
          skills={[
            "cryptography"
          ]}
        />
        <TiltCard
          title="Development Tools & IDEs"
          skills={[
            "Visual Studio Code",
            "PyCharm",
            "Android Studio",
            "IntelliJ IDEA",
            "Cursor",
            "Jupyter Notebook",
            "Google Colab"
          ]}
        />
        <TiltCard
          title="Research & Engineering Skills"
          skills={[
            "Data Collection",
            "Preprocessing",
            "Model Training",
            "Prompt Engineering",
            "Performance Evaluation",
            "Fine-tuning"
          ]}
        />
      </div>
    </section>
  );
};
