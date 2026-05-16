import { motion } from 'framer-motion';
import { INTERNSHIPS } from '../data/portfolio';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';

function Card({ item, index }) {
  return (
    <motion.div
      initial={{ opacity:0, y:50 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, amount:0.2 }}
      transition={{ duration:0.7, delay:index*0.12, ease:[0.16,1,0.3,1] }}
      whileHover={{ y:-6, borderColor:'rgba(0,245,255,.22)', boxShadow:'0 24px 70px rgba(0,0,0,.5)' }}
      className="glass"
      style={{ padding:'2rem', position:'relative', overflow:'hidden' }}
    >
      {/* Accent line top */}
      <div style={{ position:'absolute',top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${item.color},${item.color2})`,borderRadius:'20px 20px 0 0' }}/>

      {/* Glow corner */}
      <div style={{ position:'absolute',top:-40,right:-40,width:120,height:120,borderRadius:'50%',background:`radial-gradient(circle,${item.color}22 0%,transparent 70%)`,pointerEvents:'none' }}/>

      <div style={{ display:'flex',alignItems:'flex-start',gap:'1rem',marginBottom:'1.4rem',flexWrap:'wrap' }}>
        <motion.div whileHover={{ scale:1.12,rotate:6 }}
          style={{ width:50,height:50,borderRadius:13,flexShrink:0,background:`linear-gradient(135deg,${item.color},${item.color2})`,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'.88rem',color:'#000',boxShadow:`0 4px 20px ${item.color}44` }}>
          {item.initials}
        </motion.div>
        <div style={{ flex:1,minWidth:0 }}>
          <h3 style={{ fontFamily:'Syne,sans-serif',fontSize:'1.05rem',fontWeight:800,letterSpacing:'-.02em',marginBottom:'.2rem',lineHeight:1.3 }}>{item.role}</h3>
          <p style={{ color:item.color,fontSize:'.85rem',fontWeight:600,letterSpacing:'.01em' }}>{item.company}</p>
        </div>
        <div style={{ textAlign:'right',flexShrink:0 }}>
          <div style={{ display:'flex',alignItems:'center',gap:'.35rem',color:'var(--muted)',fontSize:'.74rem',marginBottom:'.22rem',justifyContent:'flex-end' }}>
            <Calendar size={11}/>{item.period}
          </div>
          <div style={{ display:'flex',alignItems:'center',gap:'.35rem',color:'var(--dim)',fontSize:'.7rem',justifyContent:'flex-end' }}>
            <MapPin size={11}/>{item.location}
          </div>
        </div>
      </div>

      <ul style={{ listStyle:'none',marginBottom:'1.4rem' }}>
        {item.points.map((pt,i)=>(
          <li key={i} style={{ display:'flex',gap:'.6rem',color:'var(--muted)',fontSize:'.875rem',lineHeight:1.65,marginBottom:'.55rem',alignItems:'flex-start' }}>
            <CheckCircle2 size={14} style={{ color:item.color,flexShrink:0,marginTop:'.22rem' }}/>
            <span style={{fontSize:'.875rem',lineHeight:1.68,fontWeight:400}}>{pt}</span>
          </li>
        ))}
      </ul>

      <div style={{ display:'flex',flexWrap:'wrap',gap:'.4rem' }}>
        {item.stack.map(s=><span key={s} className="tag">{s}</span>)}
      </div>
    </motion.div>
  );
}

export default function Internships() {
  return (
    <section id="internships" className="section section-alt">
      <div className="container">
        <div className="sec-header">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}}>
            <div className="sec-tag">Experience</div>
            <h2 className="sec-title">Internships</h2>
            <p className="sec-sub">Real-world impact through hands-on engineering at 3 companies</p>
          </motion.div>
        </div>

        {/* Timeline wrapper — desktop: 3 columns with center line */}
        <div style={{ position:'relative',maxWidth:1100,margin:'0 auto' }}>
          {/* Vertical center line */}
          <motion.div initial={{scaleY:0}} whileInView={{scaleY:1}} viewport={{once:true}} transition={{duration:1.4,ease:[0.16,1,0.3,1]}}
            style={{ position:'absolute',left:'50%',top:0,bottom:0,width:1,background:'linear-gradient(180deg,transparent,var(--cyan)60%,var(--magenta),transparent)',transform:'translateX(-50%)',transformOrigin:'top',zIndex:0 }}
            className="timeline-vline"
          />

          <div style={{ display:'flex',flexDirection:'column',gap:'2.5rem' }}>
            {INTERNSHIPS.map((item,i)=>{
              const isLeft = i%2===0;
              return (
                <div key={i} style={{ display:'flex',gap:'3rem',position:'relative',alignItems:'flex-start' }} className="timeline-row">
                  {/* Left card or spacer */}
                  <div style={{ flex:1 }} className="tl-left">
                    {isLeft ? <Card item={item} index={i}/> : null}
                  </div>

                  {/* Dot */}
                  <motion.div initial={{scale:0}} whileInView={{scale:1}} viewport={{once:true}} transition={{duration:.4,delay:i*.15,type:'spring',stiffness:300}}
                    style={{ flexShrink:0,width:16,height:16,borderRadius:'50%',background:item.color,boxShadow:`0 0 0 4px rgba(5,5,8,.9),0 0 22px ${item.color}`,marginTop:'2.2rem',zIndex:1 }}
                    className="timeline-dot"
                  />

                  {/* Right card or spacer */}
                  <div style={{ flex:1 }} className="tl-right">
                    {!isLeft ? <Card item={item} index={i}/> : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .timeline-vline,.timeline-dot{display:none!important;}
          .tl-left,.tl-right{flex:1!important;}
          .timeline-row{flex-direction:column!important;gap:0!important;}
          .tl-left:empty,.tl-right:empty{display:none!important;}
        }
      `}</style>
    </section>
  );
}
