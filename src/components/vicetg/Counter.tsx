"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  duration?: number;
}

/** Compteur animé : démarre quand 60 % de l'élément est visible, une seule fois. */
function Counter({ target, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.ceil(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export { Counter };
