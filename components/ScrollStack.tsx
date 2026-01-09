"use client";

import React, { useEffect, useRef, useCallback } from 'react';

export const ScrollStackItem: React.FC<{ children: React.ReactNode; itemClassName?: string }> = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string | number;
  scaleEndPosition?: string | number;
  baseScale?: number;
  blurAmount?: number;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 150,
  itemScale = 0.02,
  itemStackDistance = 16,
  stackPosition = '10%',
  scaleEndPosition = '2%',
  baseScale = 0.95,
  blurAmount = 0
}) => {
  const cardsRef = useRef<HTMLElement[]>([]);
  const cachedOffsets = useRef<number[]>([]);
  const cachedEndOffset = useRef<number>(0);

  const calculateProgress = (val: number, start: number, end: number) => {
    return Math.max(0, Math.min(1, (val - start) / (end - start)));
  };

  const parsePercentage = (value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  };

  const updateTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;
    
    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const stackPosPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPosPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElementTop = cachedEndOffset.current;

    for (let i = 0; i < cardsRef.current.length; i++) {
      const card = cardsRef.current[i];
      if (!card) continue;

      const cardTop = cachedOffsets.current[i];
      const pinStart = cardTop - stackPosPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 1.5;

      const triggerStart = pinStart;
      const triggerEnd = cardTop - scaleEndPosPx;
      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      
      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - pinStart;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - pinStart;
      }

      card.style.transform = `translate3d(0, ${Math.floor(translateY)}px, 0) scale(${scale.toFixed(4)})`;
      
      if (blurAmount > 0) {
        // Optimización: Solo aplicar blur a los que realmente quedan atrás
        const isPast = scrollTop > pinStart + 100;
        card.style.filter = isPast ? `blur(${blurAmount}px)` : 'none';
      }
    }
  }, [baseScale, blurAmount, itemScale, itemStackDistance, scaleEndPosition, stackPosition]);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.scroll-stack-card')) as HTMLElement[];
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
    });

    const updateCache = () => {
      cachedOffsets.current = cards.map(card => {
        const rect = card.getBoundingClientRect();
        return rect.top + window.scrollY;
      });
      const endElement = document.querySelector('.scroll-stack-end');
      if (endElement) {
        cachedEndOffset.current = endElement.getBoundingClientRect().top + window.scrollY;
      }
    };

    updateCache();
    window.addEventListener('scroll', updateTransforms, { passive: true });
    window.addEventListener('resize', () => { updateCache(); updateTransforms(); });

    // Initial run
    updateTransforms();

    return () => {
      window.removeEventListener('scroll', updateTransforms);
      window.removeEventListener('resize', updateCache);
    };
  }, [itemDistance, updateTransforms]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()}>
      <div className="scroll-stack-inner relative">
        {children}
        <div className="scroll-stack-end h-[40vh]" />
      </div>
    </div>
  );
};

export default ScrollStack;