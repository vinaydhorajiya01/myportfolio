import React, { useState, useRef } from "react";

import styles from "./Navbar.module.css";
import { useNavbarScroll } from "../../hooks/useNavbarScroll";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  // Hide navbar on scroll down, show on scroll up
  useNavbarScroll(navbarRef);

  return (
    <nav className={styles.navbar} ref={navbarRef}>
      <a href="/">
      <img src="./assets/nav/logo.png" alt="Portfolio" className={styles.logoImage} />
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? "./assets/nav/closeIcon.png"
              : "./assets/nav/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>          
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
