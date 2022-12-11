import { useState, useEffect } from "react";

/**
 * It returns a boolean value that indicates whether or not the element is visible in the viewport
 * @returns A function that takes an element, rootMargin, and once.
 */
const useIntersection = (element, rootMargin, once = true) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        switch (once) {
          case false: {
            setState(entry.isIntersecting);
            break;
          }

          default: {
            if (entry.isIntersecting) {
              setState(entry.isIntersecting);
              observer.unobserve(element.current);
            }
            break;
          }
        }
      },
      { rootMargin }
    );

    element.current && observer.observe(element.current);

    return () => element?.current && observer.unobserve(element.current);
  }, []);

  return isVisible;
};

export default useIntersection;
