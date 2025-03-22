import { useState, useEffect, useRef, MutableRefObject } from "react";

interface UseScrollAnimationReturn {
  ref: MutableRefObject<HTMLDivElement | null>;
  isVisible: boolean;
}

export function useScrollAnimation(threshold = 0.1): UseScrollAnimationReturn {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}
