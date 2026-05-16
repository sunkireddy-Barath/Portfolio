import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EDUCATION } from '../data/portfolio';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, amount:0.3 });

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="sec-header">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}>
            <div className="sec-tag">Foundation</div>
            <h2 className="sec-title">Education</h2>
            <p className="sec-sub">Building the fundamentals of engineering excellence</p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity:0, y:40 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.7, ease:[0.16,1,0.3,1] }}
          className="glass"
          style={{ display:'flex', gap:'2rem', padding:'2.5rem', maxWidth:900, margin:'0 auto', alignItems:'flex-start' }}
        >
          {/* Icon */}
          <motion.div
            animate={{ boxShadow:['0 0 20px rgba(0,245,255,0.15)','0 0 40px rgba(0,245,255,0.3)','0 0 20px rgba(0,245,255,0.15)'] }}
            transition={{ duration:3, repeat:Infinity }}
            style={{
              width:64, height:64, flexShrink:0, borderRadius:16,
              background:'linear-gradient(135deg,rgba(0,245,255,0.15),rgba(255,0,255,0.1))',
              border:'1px solid rgba(0,245,255,0.25)',
              display:'flex', alignItems:'center', justifyContent:'center', color:'var(--cyan)',
            }}
          >
            <GraduationCap size={30}/>
          </motion.div>

          <div style={{ flex:1 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:'1rem', marginBottom:'1.5rem' }}>
              <div>
                <h3 style={{ fontFamily:'Syne,sans-serif', fontSize:'1.3rem', fontWeight:800, letterSpacing:'-.02em', marginBottom:'.35rem' }}>
                  {EDUCATION.degree}
                </h3>
                <p style={{ color:'var(--cyan)', fontSize:'.95rem', fontWeight:600, letterSpacing:'.01em' }}>{EDUCATION.institution}</p>
              </div>
              <div style={{ textAlign:'right' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'.4rem', color:'var(--muted)', fontSize:'.85rem', marginBottom:'.25rem', justifyContent:'flex-end' }}>
                  <Calendar size={13}/> {EDUCATION.year}
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:'.4rem', color:'var(--dim)', fontSize:'.78rem', justifyContent:'flex-end' }}>
                  <MapPin size={13}/> {EDUCATION.location}
                </div>
              </div>
            </div>

            {/* CGPA bar */}
            <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
              <span style={{ fontSize:'.78rem', color:'var(--muted)', minWidth:'3rem' }}>CGPA</span>
              <div style={{ flex:1, height:6, background:'rgba(255,255,255,0.07)', borderRadius:3, overflow:'hidden' }}>
                <motion.div
                  initial={{ width:0 }}
                  animate={inView ? { width:`${EDUCATION.cgpa/10*100}%` } : {}}
                  transition={{ duration:1.5, delay:0.3, ease:[0.16,1,0.3,1] }}
                  style={{ height:'100%', background:'linear-gradient(90deg,var(--cyan),var(--magenta))', borderRadius:3 }}
                />
              </div>
              <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.85rem', color:'var(--cyan)', fontWeight:600 }}>
                {EDUCATION.cgpa} / 10
              </span>
            </div>

            {/* Highlights */}
            <div style={{ display:'flex', flexWrap:'wrap', gap:'.5rem' }}>
              {EDUCATION.highlights.map(h => (
                <motion.span key={h} whileHover={{ scale:1.05 }} className="tag">{h}</motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
