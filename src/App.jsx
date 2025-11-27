import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Education } from "./components/Education/Education";
import { Skills } from "./components/Skills/Skills";
import { useActiveSection } from "./hooks/useActiveSection";
import ReactGA from "react-ga4";

ReactGA.initialize("G-2EGLR13428"); // Replace with your Measurement ID
ReactGA.send("pageview"); // Sends a pageview on initial load

function App() {
  // Track active section and update URL hash dynamically
  useActiveSection();

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
