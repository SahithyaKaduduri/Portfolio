import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    let x = 0, y = 0, rafId = null;
    function move() {
      el.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
      rafId = null;
    }
    function onMove(e) {
      x = e.clientX; y = e.clientY;
      el.classList.add('show');
      if (!rafId) rafId = requestAnimationFrame(move);
    }
    function onLeave() { el.classList.remove('show'); }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <div id="cursorGlow" ref={ref} />;
}
