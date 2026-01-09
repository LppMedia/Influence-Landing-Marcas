"use client";

import React, { useEffect, useRef, useState } from 'react';

// --- Lightweight Hook for Intersection Observer ---
const useInView = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Trigger only once when it enters
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isInView };
};

interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
  index?: number;
}

// --- Optimized Item Component ---
export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ 
  children, 
  itemClassName = '',
  index = 0
}) => {
  // Threshold 0.1 means trigger when 10% of item is visible
  const { ref, isInView } = useInView({ threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  return (
    <div
      ref={ref}
      className={`scroll-stack-card transition-all duration-1000 ease-out ${itemClassName}`.trim()}
      style={{
        // Hardware acceleration hints
        willChange: 'transform, opacity',
        // Animation logic
        opacity: isInView ? 1 : 0,
        transform: isInView 
          ? 'translate3d(0, 0, 0)' // GPU Idle
          : 'translate3d(0, 40px, 0)' // Slide up from 40px down
      }}
    >
      {children}
    </div>
  );
};

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  // Deprecated props kept for compatibility but ignored to ensure performance
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: any;
  scaleEndPosition?: any;
  baseScale?: number;
  blurAmount?: number;
}

// --- Container Component ---
const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100, // Default margin
}) => {
  return (
    <div className={`scroll-stack-container w-full flex flex-col ${className}`.trim()}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return (
            <div style={{ marginBottom: index === React.Children.count(children) - 1 ? 0 : itemDistance }}>
              {/* Clone to pass index if needed, though mostly handled by wrapper */}
              {React.cloneElement(child as React.ReactElement<any>, { index })}
            </div>
          );
        }
        return child;
      })}
    </div>
  );
};

export default ScrollStack;