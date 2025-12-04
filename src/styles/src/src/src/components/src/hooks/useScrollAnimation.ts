import { useEffect, useRef, useState } from "react";

export default function useScrollAnimation(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setIsVisible(e.isIntersecting));
      },
      options || { threshold: 0.2 }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref.current]);

  return { ref, isVisible };
}
