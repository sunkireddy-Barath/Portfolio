import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/portfolio';
import { ExternalLink, X, TrendingUp } from 'lucide-react';
const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity:0, y:40 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, amount:0.1 }}
      transition={{ duration:0.6, delay:index*0.08, ease:[0.16,1,0.3,1] }}
      whileHover={{ y:-8, boxShadow:`0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,245,255,0.15)` }}
      onClick={() => onClick(project)}
      className="glass"
      style={{
        padding:'2rem', cursor:'none', position:'relative', overflow:'hidden',
        transition:'border-color 0.3s',
      }}
      data-hover
    >
      {/* Glow */}
      <div style={{
        position:'absolute', top:-60, right:-60, width:200, height:200,
        background:`radial-gradient(circle,${project.color} 0%,transparent 70%)`,
        opacity:0.07, pointerEvents:'none',
        transition:'opacity 0.3s',
      }} />

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'1.25rem' }}>
        <motion.div whileHover={{ scale:1.1, rotate:5 }} style={{
          width:52, height:52, borderRadius:14,
          background:`linear-gradient(135deg,${project.color},${project.color2||project.color})`,
          display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.5rem',
        }}>
          {project.icon}
        </motion.div>
        {project.award && (
          <motion.span
            initial={{ scale:0 }} animate={{ scale:1 }} transition={{ type:'spring', delay:0.3+index*0.08 }}
            style={{
              padding:'.25rem .65rem', borderRadius:8, fontSize:'.72rem', fontWeight:700,
              background: project.award.type==='winner' ? 'rgba(255,215,0,0.12)' : 'rgba(192,192,192,0.1)',
              border: `1px solid ${project.award.type==='winner' ? 'rgba(255,215,0,0.3)' : 'rgba(192,192,192,0.25)'}`,
              color: project.award.type==='winner' ? 'var(--gold)' : '#c0c0c0',
            }}
          >
            {project.award.label}
          </motion.span>
        )}
      </div>

      <h3 style={{ fontFamily:'Syne,sans-serif', fontSize:'1.3rem', fontWeight:800, letterSpacing:'-.025em', marginBottom:'.25rem' }}>{project.title}</h3>
      <p style={{ color:project.color, fontSize:'.78rem', fontWeight:600, letterSpacing:'.03em', textTransform:'uppercase', marginBottom:'1rem' }}>{project.sub}</p>
      <p style={{ color:'var(--muted)', fontSize:'.875rem', lineHeight:1.7, fontWeight:400, marginBottom:'1.25rem' }}>{project.desc}</p>

      {/* Metrics */}
      <div style={{
        display:'flex', gap:'1rem', marginBottom:'1.25rem',
        padding:'.9rem', background:'rgba(255,255,255,0.03)',
        borderRadius:'var(--rs)', border:'1px solid var(--border)',
      }}>
        {project.metrics.map(m => (
          <div key={m.key} style={{ flex:1, textAlign:'center', fontFamily:'Arial, sans-serif' }}>
            <div style={{ fontSize:'1.05rem', fontWeight:800, color:project.color, marginBottom:'.2rem' }}>{m.val}</div>
            <div style={{ fontSize:'.68rem', color:'var(--muted)' }}>{m.key}</div>
          </div>
        ))}
      </div>

      <div style={{ display:'flex', flexWrap:'wrap', gap:'.4rem', marginBottom:'1.25rem' }}>
        {project.stack.map(s => <span key={s} className="tag">{s}</span>)}
      </div>

      <div style={{ display:'flex', gap:'.75rem' }}>
        {project.github && project.github !== '#' && (
          <motion.a href={project.github} target="_blank" whileHover={{ scale:1.04 }}
            onClick={e=>e.stopPropagation()}
            style={{
              display:'inline-flex', alignItems:'center', gap:'.4rem',
              padding:'.5rem 1rem',
              background:'rgba(0,245,255,0.1)', border:'1px solid rgba(0,245,255,0.25)',
              borderRadius:8, color:'var(--cyan)', fontSize:'.78rem', fontWeight:600,
              textDecoration:'none', cursor:'none',
            }}
          >
            <GithubIcon size={13}/> GitHub
          </motion.a>
        )}
        {project.demo && project.demo !== '#' && (
          <motion.a href={project.demo} target="_blank" whileHover={{ scale:1.04 }}
            onClick={e=>e.stopPropagation()}
            style={{
              display:'inline-flex', alignItems:'center', gap:'.4rem',
              padding:'.5rem 1rem',
              background:'transparent', border:'1px solid rgba(255,255,255,0.12)',
              borderRadius:8, color:'var(--muted)', fontSize:'.78rem', fontWeight:600,
              textDecoration:'none', cursor:'none',
            }}
          >
            <ExternalLink size={13}/> Demo
          </motion.a>
        )}
        <motion.button
          whileHover={{ scale:1.04 }}
          onClick={(e) => { e.stopPropagation(); onClick(project); }}
          style={{
            display:'inline-flex', alignItems:'center', gap:'.4rem',
            padding:'.5rem 1rem', marginLeft:'auto',
            background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)',
            borderRadius:8, color:'var(--muted)', fontSize:'.78rem', fontWeight:600,
            cursor:'none',
          }}
        >
          <TrendingUp size={13}/> Details
        </motion.button>
      </div>
    </motion.div>
  );
}

function Modal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      onClick={onClose}
      style={{
        position:'fixed', inset:0, background:'rgba(0,0,0,0.8)',
        backdropFilter:'blur(10px)', zIndex:2000,
        display:'flex', alignItems:'center', justifyContent:'center',
        padding:'2rem',
      }}
    >
      <motion.div
        initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:0.8, opacity:0 }}
        transition={{ type:'spring', stiffness:300, damping:25 }}
        onClick={e=>e.stopPropagation()}
        className="glass"
        style={{ maxWidth:600, width:'100%', padding:'2.5rem', maxHeight:'80vh', overflowY:'auto', position:'relative' }}
      >
        <motion.button whileHover={{ scale:1.1 }} onClick={onClose} style={{
          position:'absolute', top:'1.5rem', right:'1.5rem',
          background:'rgba(255,255,255,0.08)', border:'1px solid var(--border)',
          borderRadius:'50%', width:32, height:32,
          display:'flex', alignItems:'center', justifyContent:'center',
          color:'var(--muted)', cursor:'none',
        }}>
          <X size={15}/>
        </motion.button>

        <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
          <div style={{
            width:56, height:56, borderRadius:16,
            background:`linear-gradient(135deg,${project.color},${project.color2||project.color})`,
            display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.6rem',
          }}>{project.icon}</div>
          <div>
            <h2 style={{ fontFamily:'Syne,sans-serif', fontSize:'1.5rem', fontWeight:800 }}>{project.title}</h2>
            <p style={{ color:project.color, fontSize:'.85rem', fontWeight:500 }}>{project.sub}</p>
          </div>
          {project.award && (
            <span style={{
              marginLeft:'auto', padding:'.3rem .8rem', borderRadius:8, fontSize:'.78rem', fontWeight:700,
              background: project.award.type==='winner' ? 'rgba(255,215,0,0.12)' : 'rgba(192,192,192,0.1)',
              border: `1px solid ${project.award.type==='winner' ? 'rgba(255,215,0,0.3)' : 'rgba(192,192,192,0.25)'}`,
              color: project.award.type==='winner' ? 'var(--gold)' : '#c0c0c0',
            }}>{project.award.label}</span>
          )}
        </div>

        <p style={{ color:'var(--muted)', fontSize:'.92rem', lineHeight:1.75, marginBottom:'1.5rem' }}>{project.desc}</p>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1.5rem' }}>
          {project.metrics.map(m => (
            <div key={m.key} className="glass" style={{ padding:'1rem', textAlign:'center', borderRadius:'var(--rs)', fontFamily:'Arial, sans-serif' }}>
              <div style={{ fontSize:'1.4rem', fontWeight:800, color:project.color }}>{m.val}</div>
              <div style={{ fontSize:'.78rem', color:'var(--muted)', marginTop:'.25rem' }}>{m.key}</div>
            </div>
          ))}
        </div>

        <h4 style={{ fontSize:'.85rem', fontWeight:600, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:'.75rem' }}>Tech Stack</h4>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'.4rem', marginBottom:'1.5rem' }}>
          {project.stack.map(s => <span key={s} className="tag">{s}</span>)}
        </div>

        {(project.github && project.github !== '#') || (project.demo && project.demo !== '#') ? (
          <div style={{ display:'flex', gap:'.75rem' }}>
            {project.github && project.github !== '#' && (
              <a href={project.github} target="_blank" className="btn-primary" style={{ flex:1, justifyContent:'center' }}>
                <GithubIcon size={15}/> View on GitHub
              </a>
            )}
            {project.demo && project.demo !== '#' && (
              <a href={project.demo} target="_blank" className="btn-outline" style={{ flex:1, justifyContent:'center' }}>
                <ExternalLink size={15}/> Live Demo
              </a>
            )}
          </div>
        ) : null}
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="sec-header">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}>
            <div className="sec-tag">Portfolio</div>
            <h2 className="sec-title">Featured Projects</h2>
            <p className="sec-sub">Products built at the intersection of AI, Web3, and real-world impact</p>
          </motion.div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:'1.5rem' }}>
          {PROJECTS.map((p,i) => <ProjectCard key={p.title} project={p} index={i} onClick={setSelected} />)}
        </div>
      </div>

      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
