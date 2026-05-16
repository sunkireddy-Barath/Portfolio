import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILLS } from '../data/portfolio';

function BarCategory({ items }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, amount:0.3 });
  return (
    <div ref={ref} style={{ display:'flex',flexDirection:'column',gap:'1rem' }}>
      {items.map((item,i) => (
        <div key={item.name}>
          <div style={{ display:'flex',justifyContent:'space-between',marginBottom:'.35rem' }}>
            <span style={{ fontSize:'.83rem',color:'var(--muted)',fontWeight:500 }}>{item.name}</span>
            <span style={{ fontSize:'.7rem',fontFamily:'JetBrains Mono,monospace',color:'var(--dim)' }}>{item.level}%</span>
          </div>
          <div style={{ height:5,background:'rgba(255,255,255,.06)',borderRadius:3,overflow:'hidden' }}>
            <motion.div
              initial={{ width:0 }}
              animate={inView ? { width:`${item.level}%` } : {}}
              transition={{ duration:1.4,delay:.1+i*.08,ease:[0.16,1,0.3,1] }}
              style={{ height:'100%',background:`linear-gradient(90deg,${item.color},${item.color}88)`,borderRadius:3,position:'relative' }}
            >
              <div style={{ position:'absolute',right:0,top:'50%',transform:'translateY(-50%)',width:6,height:6,borderRadius:'50%',background:item.color,boxShadow:`0 0 6px ${item.color}` }}/>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}

function TagCategory({ items }) {
  return (
    <div style={{ display:'flex',flexWrap:'wrap',gap:'.5rem' }}>
      {items.map((s,i) => (
        <motion.span key={s}
          initial={{ opacity:0,scale:.85 }}
          whileInView={{ opacity:1,scale:1 }}
          viewport={{ once:true }}
          transition={{ delay:i*.04,duration:.4 }}
          whileHover={{ y:-2,scale:1.06 }}
          className="tag" style={{ cursor:'default',fontSize:'.78rem',padding:'.32rem .8rem' }}>
          {s}
        </motion.span>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="sec-header">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}}>
            <div className="sec-tag">Arsenal</div>
            <h2 className="sec-title">Skills & Tech Stack</h2>
            <p className="sec-sub">Languages, frameworks, databases, AI/ML tools — and the fundamentals underneath</p>
          </motion.div>
        </div>

        <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(270px,1fr))',gap:'1.25rem' }}>
          {SKILLS.map((cat,i) => (
            <motion.div key={cat.category}
              initial={{ opacity:0,y:40 }}
              whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true,amount:.15 }}
              transition={{ duration:.65,delay:i*.07,ease:[0.16,1,0.3,1] }}
              whileHover={{ y:-5,borderColor:'rgba(0,245,255,.22)',boxShadow:'0 20px 60px rgba(0,0,0,.4)' }}
              className="glass"
              style={{ padding:'1.85rem',position:'relative',overflow:'hidden' }}
            >
              {/* BG glow */}
              <div style={{ position:'absolute',bottom:-30,right:-30,width:100,height:100,borderRadius:'50%',background:'radial-gradient(circle,rgba(0,245,255,.07) 0%,transparent 70%)',pointerEvents:'none' }}/>

              <div style={{ display:'flex',alignItems:'center',gap:'.75rem',marginBottom:'1.4rem' }}>
                <motion.span whileHover={{ scale:1.2,rotate:8 }} style={{ fontSize:'1.7rem',display:'inline-block' }}>{cat.icon}</motion.span>
                <h3 style={{ fontFamily:'Syne,sans-serif',fontSize:'1.05rem',fontWeight:700 }}>{cat.category}</h3>
              </div>

              {cat.type === 'bar'
                ? <BarCategory items={cat.items} />
                : <TagCategory items={cat.items} />
              }
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
