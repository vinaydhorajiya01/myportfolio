import React, { useRef } from "react";
import styles from './Skills.module.css';

export const TiltCard = ({ title, skills }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const isTop = y < height / 2;
    const isLeft = x < width / 2;

    if (isTop && isLeft) {
      // Top-left
      card.style.transform = "rotateX(15deg) rotateY(-15deg)";
    } else if (isTop && !isLeft) {
      // Top-right
      card.style.transform = "rotateX(15deg) rotateY(15deg)";
    } else if (!isTop && isLeft) {
      // Bottom-left
      card.style.transform = "rotateX(-15deg) rotateY(-15deg)";
    } else if (!isTop && !isLeft) {
      // Bottom-right
      card.style.transform = "rotateX(-15deg) rotateY(15deg)";
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <div
      className={styles.skillCategory}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className={styles.categoryTitle}>{title}</h3>
      <ul className={styles.skillList}>
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
