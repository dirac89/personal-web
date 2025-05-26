import { useEffect, useState } from "react";

const useActiveSection = (sectionIds) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
      });
      if (current && current !== active) {
        setActive(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active, sectionIds]);

  return active;
};

export default useActiveSection;