"use client";
import React, { useState, useEffect, useRef } from "react";

type LazyLoadOnScreenProps = {
  children: React.ReactNode;
};

const LazyLoadOnScreen: React.FC<LazyLoadOnScreenProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return <div ref={ref}>{isVisible ? children : null}</div>;
};

export default LazyLoadOnScreen;
