import styles from './Skills.module.css';
import { TiltCard } from './tiltcard';

export const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.skillCategories}>
        <TiltCard
          title="Programming Languages"
          skills={["C", "PHP", "Python", "Java"]}
        />
        <TiltCard
          title="Web Technologies"
          skills={["HTML", "CSS", "JavaScript", "XML", "Liquidjs"]}
        />
        <TiltCard
          title="Database Systems"
          skills={["MySQL", "SQLite"]}
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
            "ONNX Runtime"
          ]}
        />
        <TiltCard
          title="Cloud Technologies"
          skills={["Microsoft Azure"]}
        />
        <TiltCard
          title="DevOps & Version Control"
          skills={["GitHub"]}
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
          title="Mathematical & Statistical Tools"
          skills={["FAISS", "Vector Databases", "OpenCV"]}
        />
        <TiltCard
          title="Other Tools & Technologies"
          skills={[
            "Flask",
            "PyQt5",
            "PyQtChart",
            "Selenium",
            "BeautifulSoup",
            "CVAT",
            "MoviePy",
            "Pillow",
            "AV",
            "cryptography",
            "screeninfo",
            "Visual Studio Code",
            "Jupyter Notebook",
            "PyCharm",
            "Google Colab",
            "Android Studio",
            "IntelliJ IDEA",
            "Power BI",
            "Cursor"
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
