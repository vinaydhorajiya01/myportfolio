import { useEffect } from "react";

export const useActiveSection = () => {
  useEffect(() => {
    // Define section IDs in order
    const sections = [
      "hero",
      "about",
      "education",
      "skills",
      "experience",
      "projects",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update the URL without hash using History API
          window.history.replaceState(null, "", window.location.pathname);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);
};
