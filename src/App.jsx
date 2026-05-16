import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import GalaxyBackground from './components/GalaxyBackground';
import Hero from './components/Hero';
import Education from './components/Education';
import Internships from './components/Internships';
import OpenSource from './components/OpenSource';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function LoaderScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.55, ease: 'easeInOut' }}
      style={{
        position: 'fixed', inset: 0, background: 'var(--bg)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 9999, flexDirection: 'column', gap: '1.75rem',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,245,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          fontFamily: 'Syne, sans-serif', fontSize: '5rem', fontWeight: 800, lineHeight: 1,
          background: 'linear-gradient(135deg, var(--cyan), var(--magenta))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          position: 'relative', zIndex: 1,
        }}
      >
        SB
      </motion.div>

      <div style={{ width: 220, height: 2, background: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: '100%', background: 'linear-gradient(90deg, var(--cyan), var(--magenta), var(--cyan))', borderRadius: 2, backgroundSize: '200% 100%' }}
        />
      </div>

      <motion.p
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: '.72rem',
          color: 'var(--muted)', letterSpacing: '.25em', textTransform: 'uppercase',
          position: 'relative', zIndex: 1,
        }}
      >
        Initializing Experience...
      </motion.p>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoaderScreen key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <GalaxyBackground />
          <Cursor />
          <Navbar />
          <main>
            <Hero />
            <Education />
            <Internships />
            <OpenSource />
            <Projects />
            <Skills />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
