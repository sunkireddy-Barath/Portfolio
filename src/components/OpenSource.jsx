import { motion } from 'framer-motion';
import { OSS } from '../data/portfolio';
import { ExternalLink } from 'lucide-react';
const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

function PRItem({ pr }) {
  const inner = (
    <>
      <span style={{
        padding:'.15rem .55rem', borderRadius:4,
        fontSize:'.68rem', fontWeight:600, fontFamily:'JetBrains Mono,monospace',
        whiteSpace:'nowrap',
        background: pr.status==='merged' ? 'rgba(0,255,136,0.12)' : 'rgba(255,200,0,0.1)',
        border: `1px solid ${pr.status==='merged' ? 'rgba(0,255,136,0.25)' : 'rgba(255,200,0,0.25)'}`,
        color: pr.status==='merged' ? 'var(--green)' : 'var(--gold)',
      }}>
        {pr.status==='merged' ? '✓ Merged' : '◎ Review'}
      </span>
      <span style={{ color:'var(--muted)', fontSize:'.82rem', flex:1 }}>
        <span style={{ color:'var(--cyan)', fontFamily:'JetBrains Mono,monospace', fontSize:'.78rem', marginRight:'.4rem' }}>{pr.id}</span>
        {pr.label}
      </span>
      {pr.href && <ExternalLink size={11} style={{ color:'var(--dim)', flexShrink:0 }}/>}
    </>
  );

  const sharedStyle = { display:'flex', alignItems:'center', gap:'.75rem', padding:'.4rem 0' };

  if (pr.href) {
    return (
      <motion.a
        href={pr.href} target="_blank" rel="noopener noreferrer"
        whileHover={{ x:4, color:'var(--cyan)' }}
        style={{ ...sharedStyle, textDecoration:'none', color:'inherit', cursor:'none', borderRadius:6 }}
      >
        {inner}
      </motion.a>
    );
  }
  return (
    <motion.div whileHover={{ x:4 }} style={sharedStyle}>
      {inner}
    </motion.div>
  );
}

export default function OpenSource() {
  return (
    <section id="opensource" className="section">
      <div className="container">
        <div className="sec-header">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}>
            <div className="sec-tag">Community</div>
            <h2 className="sec-title">Open Source</h2>
            <p className="sec-sub">Contributing to global software that millions use</p>
          </motion.div>
        </div>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',
          gap:'1.5rem', maxWidth:1100, margin:'0 auto',
        }}>
          {OSS.map((item, idx) => (
            <motion.div key={idx}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, amount:0.2 }}
              transition={{ duration:0.7, delay:idx*0.1, ease:[0.16,1,0.3,1] }}
              whileHover={{ borderColor:'rgba(0,245,255,0.25)', y:-4, boxShadow:'0 24px 60px rgba(0,0,0,0.4)' }}
              className="glass"
              style={{ padding:'2rem' }}
            >
              {/* Header */}
              <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.25rem', flexWrap:'wrap' }}>
                <motion.div whileHover={{ rotate:10 }} style={{
                  width:48, height:48, borderRadius:12, flexShrink:0,
                  background: idx===0
                    ? 'linear-gradient(135deg,rgba(0,245,255,0.2),rgba(0,100,255,0.2))'
                    : 'linear-gradient(135deg,rgba(255,107,53,0.2),rgba(255,0,85,0.2))',
                  border:`1px solid ${idx===0?'rgba(0,245,255,0.25)':'rgba(255,107,53,0.25)'}`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color: idx===0 ? 'var(--cyan)' : '#ff6b35',
                }}>
                  <GithubIcon />
                </motion.div>
                <div style={{ flex:1 }}>
                  <h3 style={{ fontSize:'1rem', fontWeight:700, marginBottom:'.2rem' }}>{item.org}</h3>
                  <p style={{ fontSize:'.8rem', color:'var(--cyan)' }}>{item.project}</p>
                </div>
                <span style={{
                  padding:'.25rem .75rem', borderRadius:100, fontSize:'.72rem', fontWeight:600,
                  background: item.prs[0].status==='merged' ? 'rgba(0,255,136,0.12)' : 'rgba(255,200,0,0.1)',
                  border: `1px solid ${item.prs[0].status==='merged' ? 'rgba(0,255,136,0.3)' : 'rgba(255,200,0,0.3)'}`,
                  color: item.prs[0].status==='merged' ? 'var(--green)' : 'var(--gold)',
                }}>
                  {item.prCount}
                </span>
              </div>

              <p style={{ color:'var(--muted)', fontSize:'.875rem', lineHeight:1.65, marginBottom:'1.25rem' }}>{item.desc}</p>

              <div style={{ marginBottom:'1.25rem', borderTop:'1px solid var(--border)', paddingTop:'.75rem' }}>
                {item.prs.map((pr,i) => <PRItem key={i} pr={pr} />)}
              </div>

              <div style={{ display:'flex', flexWrap:'wrap', gap:'.4rem' }}>
                {item.stack.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
