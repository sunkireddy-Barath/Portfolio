import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  let fx = 0, fy = 0, mx = 0, my = 0;

  useEffect(() => {
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + 'px';
        cursorRef.current.style.top = my + 'px';
      }
    };
    document.addEventListener('mousemove', onMove);

    let raf;
    const animate = () => {
      fx += (mx - fx) * 0.13;
      fy += (my - fy) * 0.13;
      if (followerRef.current) {
        followerRef.current.style.left = fx + 'px';
        followerRef.current.style.top = fy + 'px';
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    const grow = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%,-50%) scale(2.5)';
      if (followerRef.current) followerRef.current.style.transform = 'translate(-50%,-50%) scale(0.5)';
    };
    const shrink = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
      if (followerRef.current) followerRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
    };
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-f" ref={followerRef} />
    </>
  );
}
