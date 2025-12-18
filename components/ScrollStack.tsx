
import React, { useLayoutEffect, useRef, useCallback, useEffect } from 'react';
import Lenis from 'lenis';

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
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 24,
  stackPosition = '15%',
  scaleEndPosition = '5%',
  baseScale = 0.9,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const cachedOffsets = useRef<number[]>([]);
  const cachedEndOffset = useRef<number>(0);
  const lastScrollTop = useRef<number>(0);

  const calculateProgress = (val: number, start: number, end: number) => {
    return Math.max(0, Math.min(1, (val - start) / (end - start)));
  };

  const parsePercentage = (value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  };

  const updateLayoutCache = useCallback(() => {
    if (!cardsRef.current.length) return;
    
    // Medir posiciones estáticas (sin transformaciones activas)
    // Para medir correctamente, reseteamos temporalmente las transforms si es necesario,
    // pero como usamos el offset original antes de las animaciones pesadas, suele bastar.
    cachedOffsets.current = cardsRef.current.map(card => {
      const rect = card.getBoundingClientRect();
      return rect.top + window.scrollY;
    });

    const endElement = document.querySelector('.scroll-stack-end');
    if (endElement) {
      cachedEndOffset.current = endElement.getBoundingClientRect().top + window.scrollY;
    }
  }, []);

  const updateCardTransforms = (scrollTop: number) => {
    if (!cardsRef.current.length) return;

    const containerHeight = window.innerHeight;
    const stackPosPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPosPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElementTop = cachedEndOffset.current;

    // Guardar para evitar cálculos repetidos si el scroll no cambió significativamente
    lastScrollTop.current = scrollTop;

    // Calcular índice superior para blur de forma eficiente
    let topIndex = -1;
    if (blurAmount > 0) {
      for (let j = 0; j < cardsRef.current.length; j++) {
        if (scrollTop >= cachedOffsets.current[j] - stackPosPx - itemStackDistance * j) {
          topIndex = j;
        }
      }
    }

    for (let i = 0; i < cardsRef.current.length; i++) {
      const card = cardsRef.current[i];
      if (!card) continue;

      const cardTop = cachedOffsets.current[i];
      const triggerStart = cardTop - stackPosPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPosPx;
      const pinStart = cardTop - stackPosPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      
      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - pinStart;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - pinStart;
      }

      // Aplicar estilos con precisión de sub-pixel para máxima suavidad
      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      
      if (blurAmount > 0) {
        const blur = i < topIndex ? Math.max(0, (topIndex - i) * blurAmount) : 0;
        card.style.filter = blur > 0 ? `blur(${blur}px)` : 'none';
      }

      // Callback de completado para la última tarjeta
      if (i === cardsRef.current.length - 1) {
        const isDone = scrollTop >= pinStart;
        if (isDone && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isDone) {
          stackCompletedRef.current = false;
        }
      }
    }
  };

  useLayoutEffect(() => {
    const cards = Array.from(document.querySelectorAll('.scroll-stack-card')) as HTMLElement[];
    cardsRef.current = cards;

    // Configuración inicial de estilos para GPU
    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      // Fix: webkitFontSmoothing is a vendor-prefixed property not in standard CSSStyleDeclaration
      (card.style as any).webkitFontSmoothing = 'antialiased';
    });

    updateLayoutCache();

    // ResizeObserver para recalcular si el contenido cambia
    const ro = new ResizeObserver(() => {
      updateLayoutCache();
      updateCardTransforms(window.scrollY);
    });
    cards.forEach(c => ro.observe(c));

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1, // Suavizado de interpolación
    });

    lenis.on('scroll', (e: any) => {
      // Usar el valor del evento de Lenis es CRÍTICO para la suavidad
      updateCardTransforms(e.scroll);
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    // Forzar actualización inicial
    setTimeout(() => {
      updateLayoutCache();
      updateCardTransforms(window.scrollY);
    }, 100);

    return () => {
      lenis.destroy();
      ro.disconnect();
    };
  }, [itemDistance, itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale, blurAmount, onStackComplete]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" style={{ height: '60vh' }} />
      </div>
    </div>
  );
};

export default ScrollStack;
