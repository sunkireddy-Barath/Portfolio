import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HACKATHONS, CP, LINKS } from '../data/portfolio';
import { Trophy, Code2, ExternalLink, Star } from 'lucide-react';

/* ── Animated number ── */
function Counter({ val, suffix='' }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once:true });
  useEffect(() => {
    if (!inView) return;
    const num = parseInt(val); if (isNaN(num)) { setN(val); return; }
    const dur = 1600, start = Date.now();
    const tick = () => {
      const t = Math.min((Date.now()-start)/dur,1), ease = 1-Math.pow(1-t,3);
      setN(Math.floor(ease*num));
      if(t<1) requestAnimationFrame(tick);
    };
    tick();
  }, [inView,val]);
  return <span ref={ref}>{typeof n==='number' ? n : val}{suffix}</span>;
}

/* ── Total prizes banner ── */
function TotalPrize() {
  return (
    <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}}
      style={{ display:'flex',alignItems:'center',justifyContent:'center',gap:'3rem',padding:'1.4rem 2rem',maxWidth:700,margin:'0 auto 4rem',background:'linear-gradient(135deg,rgba(255,215,0,.08),rgba(255,140,0,.04))',border:'1px solid rgba(255,215,0,.2)',borderRadius:'var(--r)',flexWrap:'wrap' }}>
      {[
        { val:'3', label:'Hackathons Won', color:'var(--gold)' },
        { val:'$4,500+', label:'Total Prize Money', color:'var(--green)' },
        { val:'3000+', label:'Teams Defeated', color:'var(--cyan)' },
      ].map(item => (
        <div key={item.label} style={{ textAlign:'center', fontFamily:'Arial, sans-serif' }}>
          <div style={{ fontSize:'1.6rem',fontWeight:800,color:item.color }}>{item.val}</div>
          <div style={{ fontSize:'.72rem',color:'var(--muted)',letterSpacing:'.06em',textTransform:'uppercase' }}>{item.label}</div>
        </div>
      ))}
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="section section-alt">
      <div className="container">
        <div className="sec-header">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}}>
            <div className="sec-tag">Recognition</div>
            <h2 className="sec-title">Achievements</h2>
            <p className="sec-sub">Hackathon victories, competitive programming rankings, and global recognition</p>
          </motion.div>
        </div>

        <TotalPrize/>

        {/* Hackathons */}
        <div style={{ marginBottom:'4rem' }}>
          <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.5}}
            style={{ display:'flex',alignItems:'center',gap:'.75rem',marginBottom:'1.5rem' }}>
            <div style={{ width:36,height:36,borderRadius:10,background:'rgba(255,215,0,.12)',border:'1px solid rgba(255,215,0,.25)',display:'flex',alignItems:'center',justifyContent:'center' }}>
              <Trophy size={18} style={{ color:'var(--gold)' }}/>
            </div>
            <h3 style={{ fontFamily:'Syne,sans-serif',fontSize:'1.25rem',fontWeight:700 }}>Hackathon Victories</h3>
          </motion.div>

          <div style={{ display:'flex',flexDirection:'column',gap:'1rem',maxWidth:950 }}>
            {HACKATHONS.map((h,i)=>(
              <motion.div key={i}
                initial={{ opacity:0,x:-30 }}
                whileInView={{ opacity:1,x:0 }}
                viewport={{ once:true,amount:.3 }}
                transition={{ duration:.65,delay:i*.1 }}
                whileHover={{ x:5,borderColor:`${h.color}33` }}
                className="glass"
                style={{ display:'flex',alignItems:'center',gap:'1.5rem',padding:'1.6rem 2rem',borderLeft:`3px solid ${h.color}`,position:'relative',overflow:'hidden' }}>

                {/* BG glow */}
                <div style={{ position:'absolute',right:-20,top:'50%',transform:'translateY(-50%)',width:80,height:80,borderRadius:'50%',background:`radial-gradient(circle,${h.color}15 0%,transparent 70%)`,pointerEvents:'none' }}/>

                <motion.span whileHover={{ scale:1.25,rotate:12 }} style={{ fontSize:'2.4rem',flexShrink:0 }}>{h.place}</motion.span>
                <div style={{ flex:1 }}>
                  <div style={{ display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:'1rem',flexWrap:'wrap',marginBottom:'.4rem' }}>
                    <h4 style={{ fontFamily:'Syne,sans-serif',fontSize:'1.02rem',fontWeight:800,letterSpacing:'-.02em' }}>{h.name}</h4>
                    <span style={{ fontFamily:'JetBrains Mono,monospace',fontSize:'.78rem',fontWeight:700,color:h.color==='#ffd700'?'var(--gold)':'#c0c0c0',background:`rgba(${h.color==='#ffd700'?'255,215,0':'192,192,192'},.1)`,padding:'.2rem .65rem',borderRadius:6,border:`1px solid ${h.color==='#ffd700'?'rgba(255,215,0,.25)':'rgba(192,192,192,.2)'}`,whiteSpace:'nowrap' }}>
                      {h.prize}
                    </span>
                  </div>
                  <p style={{ color:'var(--muted)',fontSize:'.875rem',marginBottom:'.5rem' }}>{h.project}</p>
                  <div style={{ display:'flex',gap:'1rem',fontSize:'.75rem',color:'var(--dim)' }}>
                    <span>📅 {h.year}</span>
                    <span>👥 {h.stats}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Competitive Programming */}
        <div>
          <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.5}}
            style={{ display:'flex',alignItems:'center',gap:'.75rem',marginBottom:'1.5rem' }}>
            <div style={{ width:36,height:36,borderRadius:10,background:'rgba(0,245,255,.1)',border:'1px solid rgba(0,245,255,.25)',display:'flex',alignItems:'center',justifyContent:'center' }}>
              <Code2 size={18} style={{ color:'var(--cyan)' }}/>
            </div>
            <h3 style={{ fontFamily:'Syne,sans-serif',fontSize:'1.25rem',fontWeight:700 }}>Competitive Programming</h3>
          </motion.div>

          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'1.25rem' }}>
            {CP.map((cp,i)=>(
              <motion.div key={i}
                initial={{ opacity:0,y:30 }}
                whileInView={{ opacity:1,y:0 }}
                viewport={{ once:true,amount:.2 }}
                transition={{ duration:.65,delay:i*.1 }}
                whileHover={{ y:-5,borderColor:`${cp.color}44`,boxShadow:`0 16px 50px rgba(0,0,0,.4),0 0 0 1px ${cp.color}22` }}
                className="glass"
                style={{ padding:'1.75rem',position:'relative',overflow:'hidden' }}>

                <div style={{ position:'absolute',top:-30,right:-30,width:100,height:100,borderRadius:'50%',background:`radial-gradient(circle,${cp.color}18 0%,transparent 70%)`,pointerEvents:'none' }}/>

                {/* Header */}
                <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'1.1rem' }}>
                  <motion.div whileHover={{ scale:1.1,rotate:6 }} style={{ width:50,height:50,borderRadius:13,background:cp.color,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'.95rem',color:'white',boxShadow:`0 4px 18px ${cp.color}55` }}>
                    {cp.initials}
                  </motion.div>
                  <motion.a href={cp.link} target="_blank" rel="noopener"
                    whileHover={{ scale:1.08,color:'var(--cyan)' }}
                    style={{ display:'flex',alignItems:'center',gap:'.3rem',color:'var(--dim)',fontSize:'.72rem',textDecoration:'none',cursor:'none',transition:'color .2s',border:'1px solid var(--border)',padding:'.25rem .6rem',borderRadius:6,background:'rgba(255,255,255,.03)' }}>
                    <ExternalLink size={11}/> View Profile
                  </motion.a>
                </div>

                <h4 style={{ fontSize:'1.02rem',fontWeight:700,marginBottom:'.15rem' }}>{cp.platform}</h4>
                <p style={{ fontFamily:'JetBrains Mono,monospace',fontSize:'.74rem',color:'var(--cyan)',marginBottom:'1.1rem' }}>{cp.handle}</p>

                <div style={{ display:'flex',gap:'1rem',flexWrap:'wrap',marginBottom:'1rem' }}>
                  {cp.stats.map(s=>(
                    <div key={s.key} style={{ fontFamily:'Arial, sans-serif' }}>
                      <div style={{ fontSize:'1.15rem',fontWeight:800,color:'white' }}>
                        <Counter val={s.val} suffix={s.suffix}/>
                      </div>
                      <div style={{ fontSize:'.65rem',color:'var(--muted)',lineHeight:1.3 }}>{s.key}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display:'flex',flexDirection:'column',gap:'.35rem' }}>
                  <span style={{ display:'inline-flex',alignItems:'center',gap:'.3rem',padding:'.22rem .65rem',borderRadius:6,background:'rgba(0,245,255,.07)',border:'1px solid rgba(0,245,255,.18)',fontSize:'.7rem',color:'var(--cyan)',fontWeight:600,width:'fit-content' }}>
                    <Star size={10}/> {cp.badge}
                  </span>
                  <span style={{ fontSize:'.7rem',color:'var(--dim)' }}>{cp.extra}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
