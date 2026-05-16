import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ROLES, STATS, LINKS } from '../data/portfolio';
import { Mail, Download, ArrowRight, Phone, MapPin } from 'lucide-react';

const GithubIcon  = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>;
const LinkedinIcon= () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;

/* ── Typing text ── */
function Typewriter() {
  const [text,setText]=useState(''); const [ri,setRi]=useState(0); const [del,setDel]=useState(false);
  useEffect(()=>{
    const cur=ROLES[ri], t=setTimeout(()=>{
      if(!del){ text.length<cur.length?setText(cur.slice(0,text.length+1)):setTimeout(()=>setDel(true),1600); }
      else { text.length>0?setText(cur.slice(0,text.length-1)):(setDel(false),setRi(r=>(r+1)%ROLES.length)); }
    }, del?38:65);
    return ()=>clearTimeout(t);
  },[text,ri,del]);
  return (
    <span>
      <span style={{color:'var(--cyan)',fontWeight:600}}>{text}</span>
      <span style={{color:'var(--cyan)',animation:'blink .7s step-end infinite'}}>|</span>
    </span>
  );
}

/* ── Floating tech badges around avatar ── */
const FLOATS = [
  { label:'React',  top:'5%',  left:'62%', delay:0 },
  { label:'AI/ML',  top:'18%', left:'90%', delay:.4 },
  { label:'Web3',   top:'76%', left:'85%', delay:.8 },
  { label:'Flask',  top:'88%', left:'55%', delay:1.2 },
  { label:'Next.js',top:'58%', left:'96%', delay:.6 },
  { label:'Python', top:'42%', left:'100%',delay:1.0 },
];

/* ── Avatar ── */
function Avatar() {
  const orbits = [
    { dur:6,  emoji:'⚡', color:'#00f5ff' },
    { dur:9,  emoji:'🏆', color:'#ffd700', rev:true },
    { dur:12, emoji:'🚀', color:'#00ff88' },
  ];
  return (
    <div style={{position:'relative',width:360,height:360,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
      {/* Rings */}
      {[100,78,56].map((s,i)=>(
        <motion.div key={i} animate={{scale:[1,1.06,1],opacity:[.5,.9,.5]}} transition={{duration:4,delay:i*.6,repeat:Infinity,ease:'easeInOut'}}
          style={{position:'absolute',width:`${s}%`,height:`${s}%`,borderRadius:'50%',border:`1px solid rgba(${i===0?'0,245,255':i===1?'255,0,255':'0,255,136'},.15)`}}
        />
      ))}
      {/* Glow disc */}
      <motion.div animate={{opacity:[.3,.7,.3]}} transition={{duration:3,repeat:Infinity}}
        style={{position:'absolute',width:'60%',height:'60%',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,245,255,0.18) 0%,transparent 70%)'}}
      />
      {/* Core */}
      <div style={{width:200,height:200,borderRadius:'50%',background:'linear-gradient(135deg,rgba(0,245,255,.14),rgba(255,0,255,.09))',border:'2px solid rgba(0,245,255,.4)',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden',boxShadow:'0 0 80px rgba(0,245,255,.22),0 0 140px rgba(0,245,255,.08)'}}>
        <motion.div animate={{rotate:360}} transition={{duration:5,repeat:Infinity,ease:'linear'}}
          style={{position:'absolute',inset:'-50%',background:'radial-gradient(circle,rgba(0,245,255,.18) 0%,transparent 55%)'}}
        />
        <span style={{fontFamily:'Syne,sans-serif',fontSize:'3rem',fontWeight:800,position:'relative',background:'linear-gradient(135deg,var(--cyan),var(--magenta))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>SB</span>
      </div>
      {/* Orbit icons */}
      {orbits.map((o,i)=>(
        <motion.div key={i} animate={{rotate:o.rev?-360:360}} transition={{duration:o.dur,repeat:Infinity,ease:'linear'}}
          style={{position:'absolute',width:'100%',height:'100%'}}>
          <div style={{position:'absolute',top:0,left:'50%',transform:'translateX(-50%)',width:34,height:34,borderRadius:'50%',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,.1)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.95rem',boxShadow:`0 0 14px ${o.color}66`}}>
            {o.emoji}
          </div>
        </motion.div>
      ))}
      {/* Floating tags */}
      {FLOATS.map((f,i)=>(
        <motion.div key={i} animate={{y:[0,-6,0]}} transition={{duration:2.5,delay:f.delay,repeat:Infinity,ease:'easeInOut'}}
          style={{position:'absolute',top:f.top,left:f.left,transform:'translate(-50%,-50%)',padding:'.22rem .65rem',background:'rgba(0,245,255,.1)',border:'1px solid rgba(0,245,255,.25)',borderRadius:100,fontSize:'.68rem',fontFamily:'JetBrains Mono,monospace',color:'var(--cyan)',whiteSpace:'nowrap',zIndex:2}}>
          {f.label}
        </motion.div>
      ))}
    </div>
  );
}

const up = (delay=0) => ({ initial:{opacity:0,y:30}, animate:{opacity:1,y:0}, transition:{duration:0.65,delay,ease:[0.16,1,0.3,1]} });

export default function Hero() {
  return (
    <section id="about" style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'space-between',position:'relative',padding:'7rem 6% 4rem',gap:'2rem',flexWrap:'wrap'}}>
      {/* Grid + radial vignette — clipped to section only */}
      <div style={{position:'absolute',inset:0,zIndex:0,overflow:'hidden',borderRadius:0}}>
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,245,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,245,255,.025) 1px,transparent 1px)',backgroundSize:'60px 60px',maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)',WebkitMaskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)'}}/>
      </div>

      {/* Content */}
      <div style={{flex:'0 1 620px',minWidth:280,position:'relative',zIndex:2}}>

        {/* Available badge */}
        <motion.div {...up(.15)} style={{display:'inline-flex',alignItems:'center',gap:'.5rem',padding:'.36rem 1rem',border:'1px solid rgba(0,245,255,.25)',borderRadius:100,fontSize:'.75rem',color:'var(--cyan)',background:'rgba(0,245,255,.07)',marginBottom:'1.5rem',fontFamily:'JetBrains Mono,monospace'}}>
          <motion.span animate={{opacity:[1,.3,1]}} transition={{duration:1.5,repeat:Infinity}} style={{width:6,height:6,background:'var(--green)',borderRadius:'50%',display:'inline-block'}}/>
          Available for Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1 {...up(.25)} style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(3rem,5.8vw,5.5rem)',fontWeight:800,lineHeight:.92,letterSpacing:'-.04em',marginBottom:'1.35rem'}}>
          <span style={{display:'block',color:'var(--text)'}}>Sunkireddy</span>
          <span className="grad" style={{display:'block'}}>Barath</span>
        </motion.h1>

        {/* Roles */}
        <motion.p {...up(.35)} style={{fontSize:'1.12rem',color:'var(--muted)',marginBottom:'1.4rem',fontWeight:500,minHeight:'1.8rem',letterSpacing:'.005em'}}>
          I build <Typewriter />
        </motion.p>

        {/* Bio */}
        <motion.p {...up(.4)} style={{color:'var(--muted)',fontSize:'.97rem',lineHeight:1.8,marginBottom:'1.8rem',maxWidth:520,fontWeight:400}}>
          Full-Stack Developer &amp; AI Engineer from <span style={{color:'var(--cyan)'}}>Chennai, India</span>. Hackathon winner, open-source contributor, and competitive programmer who turns complex ideas into production-grade products. Currently pursuing B.E. CS at Chennai Institute of Technology (<span style={{color:'var(--cyan)'}}>CGPA: 8.8</span>).
        </motion.p>

        {/* Quick contact line */}
        <motion.div {...up(.44)} style={{display:'flex',gap:'1.5rem',flexWrap:'wrap',marginBottom:'1.8rem'}}>
          {[
            { Icon:Mail,    val:LINKS.email,    href:`mailto:${LINKS.email}` },
            { Icon:Phone,   val:LINKS.phone,    href:`tel:${LINKS.phone.replace(/\D/g,'')}` },
            { Icon:MapPin,  val:'Chennai, India',href:'#' },
          ].map(({Icon,val,href})=>(
            <a key={val} href={href} style={{display:'flex',alignItems:'center',gap:'.4rem',color:'var(--muted)',fontSize:'.78rem',textDecoration:'none',transition:'color .2s',cursor:'none'}}
              onMouseEnter={e=>e.currentTarget.style.color='var(--cyan)'} onMouseLeave={e=>e.currentTarget.style.color='var(--muted)'}>
              <Icon size={13} style={{color:'var(--cyan)',flexShrink:0}}/>{val}
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div {...up(.48)} style={{display:'flex',width:'fit-content',marginBottom:'2.2rem',padding:'1.1rem 1.4rem',gap:0,background:'rgba(255,255,255,.03)',border:'1px solid var(--border)',borderRadius:'var(--rs)',flexWrap:'wrap'}}>
          {STATS.map((s,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center'}}>
              <div style={{textAlign:'center',padding:'0 1.2rem'}}>
                <div style={{fontFamily:'Syne,sans-serif',fontSize:'1.4rem',fontWeight:800,color:'var(--cyan)',letterSpacing:'-.02em'}}>{s.value}</div>
                <div style={{fontSize:'.64rem',color:'var(--muted)',letterSpacing:'.08em',textTransform:'uppercase',fontWeight:600,marginTop:'.15rem'}}>{s.label}</div>
              </div>
              {i<STATS.length-1&&<div style={{width:1,height:32,background:'var(--border)'}}/>}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div {...up(.53)} style={{display:'flex',gap:'1rem',flexWrap:'wrap',marginBottom:'1.75rem'}}>
          <motion.a href="#projects" whileHover={{scale:1.03}} whileTap={{scale:.97}} className="btn-primary"
            onClick={e=>{e.preventDefault();document.querySelector('#projects')?.scrollIntoView({behavior:'smooth'})}}>
            <span>Explore My Work</span><ArrowRight size={15}/>
          </motion.a>
          <motion.a href="/resume.pdf" download="Sunkireddy_Barath_Resume.pdf" whileHover={{scale:1.03}} whileTap={{scale:.97}} className="btn-outline">
            <Download size={15}/><span>Download CV</span>
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.div {...up(.57)} style={{display:'flex',gap:'.65rem',flexWrap:'wrap'}}>
          {[
            {href:LINKS.github,   Icon:GithubIcon,   label:'GitHub'},
            {href:LINKS.linkedin, Icon:LinkedinIcon,  label:'LinkedIn'},
            {href:`mailto:${LINKS.email}`, Icon:Mail, label:'Email'},
          ].map(({href,Icon,label})=>(
            <motion.a key={label} href={href} target="_blank" rel="noopener" aria-label={label}
              whileHover={{y:-3,boxShadow:'0 8px 24px rgba(0,245,255,.2)',borderColor:'rgba(0,245,255,.4)',color:'var(--cyan)'}}
              style={{width:42,height:42,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid var(--border)',borderRadius:10,color:'var(--muted)',textDecoration:'none',background:'var(--surface)',cursor:'none',transition:'color .2s'}}>
              <Icon/>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Avatar */}
      {/* Avatar — fixed size right column */}
      <motion.div initial={{opacity:0,scale:.85,x:40}} animate={{opacity:1,scale:1,x:0}} transition={{duration:.9,delay:.3,ease:[0.16,1,0.3,1]}}
        style={{flexShrink:0,width:420,height:420,position:'relative',zIndex:2,display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'auto'}}>
        <Avatar/>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a href="#education" animate={{y:[0,-8,0]}} transition={{duration:2,repeat:Infinity,ease:'easeInOut'}}
        onClick={e=>{e.preventDefault();document.querySelector('#education')?.scrollIntoView({behavior:'smooth'})}}
        style={{position:'absolute',bottom:'2rem',left:'50%',transform:'translateX(-50%)',display:'flex',flexDirection:'column',alignItems:'center',gap:'.5rem',textDecoration:'none',color:'var(--muted)',fontSize:'.68rem',letterSpacing:'.18em',textTransform:'uppercase',cursor:'none',zIndex:2}}>
        <div style={{width:21,height:34,border:'2px solid rgba(255,255,255,.18)',borderRadius:100,display:'flex',justifyContent:'center',paddingTop:5}}>
          <motion.div animate={{y:[0,9,0],opacity:[1,0,1]}} transition={{duration:1.5,repeat:Infinity}}
            style={{width:3,height:6,background:'var(--cyan)',borderRadius:2}}/>
        </div>
        <span>Scroll</span>
      </motion.a>

      <style>{`
        @media(max-width:960px){
          section#about{flex-direction:column!important;text-align:center!important;padding:6rem 1.5rem 4rem!important;align-items:center!important;overflow:hidden!important;}
          section#about > [style*="marginLeft:auto"]{order:-1;margin-left:0!important;width:300px!important;height:300px!important;}
          section#about .btn-primary,section#about .btn-outline{justify-content:center;}
          section#about > div[style*="620px"] > div[style*="gap:1.5rem"]{justify-content:center;}
          section#about > div[style*="620px"] > div[style*="fit-content"]{margin:0 auto 2.2rem;}
          section#about > div[style*="620px"] > div:last-child{justify-content:center;}
        }
      `}</style>
    </section>
  );
}
