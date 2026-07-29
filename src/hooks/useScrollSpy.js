import { useEffect, useState } from "react";

/**
 * useScrollSpy — tracks which section is currently in view so the
 * navbar can highlight the active link as the user scrolls.
 *
 * @param {string[]} sectionIds - element IDs to observe, in page order
 * @returns {string} the id of the currently active section
 */
export default function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      // trigger when a section occupies the middle band of the viewport
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
