import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  ['About', '#about'], ['Education', '#education'], ['Experience', '#internships'],
  ['Open Source', '#opensource'], ['Projects', '#projects'],
  ['Skills', '#skills'], ['Awards', '#achievements'], ['Contact', '#contact'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('about');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      setProgress(pct);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 }
    );
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (hash) => {
    setOpen(false);
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        style={{ width: `${progress}%` }}
        className="fixed top-0 left-0 h-[2px] z-[1001]"
        style={{
          position: 'fixed', top: 0, left: 0, height: '2px', zIndex: 1001,
          width: `${progress}%`,
          background: 'linear-gradient(90deg, var(--cyan), var(--magenta))',
        }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: scrolled ? '0.85rem 3rem' : '1.25rem 3rem',
          background: scrolled ? 'rgba(5,5,8,0.85)' : 'rgba(5,5,8,0.5)',
          backdropFilter: 'blur(20px) saturate(150%)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <a onClick={() => scrollTo('#about')} style={{ cursor: 'none', textDecoration: 'none' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.5rem', fontWeight: 800, color: 'white' }}
          >
            SB<span style={{ color: 'var(--cyan)' }}>.</span>
          </motion.div>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '1.75rem' }} className="nav-desktop">
          {links.map(([label, href]) => (
            <motion.a
              key={href}
              onClick={() => scrollTo(href)}
              whileHover={{ color: 'var(--cyan)' }}
              style={{
                cursor: 'none', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500,
                color: active === href.slice(1) ? 'var(--cyan)' : 'var(--muted)',
                transition: 'color 0.2s', position: 'relative',
              }}
            >
              {label}
              {active === href.slice(1) && (
                <motion.div
                  layoutId="nav-indicator"
                  style={{ position: 'absolute', bottom: -2, left: 0, right: 0, height: 1, background: 'var(--cyan)', borderRadius: 1 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="/resume.pdf" download
          whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(0,245,255,0.25)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            cursor: 'none', textDecoration: 'none', padding: '0.45rem 1.2rem',
            border: '1px solid rgba(0,245,255,0.4)', borderRadius: 8,
            color: 'var(--cyan)', fontSize: '0.875rem', fontWeight: 500,
            background: 'rgba(0,245,255,0.05)', transition: 'all 0.2s',
          }}
          className="nav-cta"
        >
          Resume
        </motion.a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            flexDirection: 'column', gap: 5, padding: 4,
          }}
          className="hamburger"
          aria-label="Menu"
        >
          {[0,1,2].map(i => (
            <motion.span
              key={i}
              animate={open ? {
                rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                y: i === 0 ? 7 : i === 2 ? -7 : 0,
                opacity: i === 1 ? 0 : 1,
              } : { rotate: 0, y: 0, opacity: 1 }}
              style={{ display: 'block', width: 24, height: 2, background: 'var(--text)', borderRadius: 2 }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              position: 'fixed', top: 0, right: 0, width: 280, height: '100vh',
              background: 'rgba(10,10,18,0.98)', backdropFilter: 'blur(20px)',
              zIndex: 999, display: 'flex', flexDirection: 'column',
              padding: '6rem 2rem 2rem', gap: '0.25rem',
              borderLeft: '1px solid var(--border)',
            }}
          >
            {links.map(([label, href], i) => (
              <motion.a
                key={href}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(href)}
                style={{
                  cursor: 'pointer', textDecoration: 'none', color: 'var(--text)',
                  fontSize: '1.1rem', fontWeight: 500, padding: '0.75rem 0',
                  borderBottom: '1px solid var(--border)',
                  color: active === href.slice(1) ? 'var(--cyan)' : 'var(--text)',
                }}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
