import React, { useEffect, useRef, memo } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const isVisible = useRef(false);
  const isHovered = useRef(false);
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    // Only activate on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (!dotRef.current || !ringRef.current) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    dot.style.display = 'block';
    ring.style.display = 'block';
    isVisible.current = true;

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onMouseOver = (e) => {
      const target = e.target;
      isHovered.current = (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        !!target.closest('button') ||
        !!target.closest('a') ||
        target.classList.contains('cursor-hover-target')
      );
    };

    const animate = () => {
      const { x, y } = mouse.current;
      // Dot follows immediately
      dot.style.transform = `translate3d(${x - 8}px, ${y - 8}px, 0) scale(${isHovered.current ? 0 : 1})`;
      dot.style.opacity = isHovered.current ? '0' : '1';

      // Ring follows with spring-like lerp
      ringPos.current.x += (x - ringPos.current.x) * 0.15;
      ringPos.current.y += (y - ringPos.current.y) * 0.15;
      const scale = isHovered.current ? 1.5 : 1;
      ring.style.transform = `translate3d(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px, 0) scale(${scale})`;
      ring.style.borderColor = isHovered.current ? 'rgba(59, 130, 246, 0.8)' : 'rgba(59, 130, 246, 0.5)';
      ring.style.backgroundColor = isHovered.current ? 'rgba(59, 130, 246, 0.1)' : 'transparent';

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-4 h-4 bg-brand-accent rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{ display: 'none', willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-brand-accent/50 rounded-full pointer-events-none z-[9998]"
        style={{ display: 'none', willChange: 'transform' }}
      />
    </>
  );
};

export default memo(CustomCursor);
