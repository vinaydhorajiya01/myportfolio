import { useEffect, useRef } from "react";

export const useNavbarScroll = (navbarRef) => {
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbar = navbarRef.current;

      if (!navbar) return;

      // Scrolling down - hide navbar
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        navbar.style.transform = "translateY(-100%)";
        navbar.style.transition = "transform 0.3s ease-in-out";
      }
      else if (currentScrollY < lastScrollY.current) {
        navbar.style.transform = "translateY(0)";
        navbar.style.transition = "transform 0.3s ease-in-out";
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbarRef]);
};
