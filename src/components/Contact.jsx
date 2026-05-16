import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download, Send, CheckCircle, ExternalLink, Loader } from 'lucide-react';
import { LINKS } from '../data/portfolio';

const W3F_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';

const GithubIcon   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>;
const LinkedinIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;

const contactItems = [
  { Icon:Mail,   label:'Email',    value:LINKS.email,    href:`mailto:${LINKS.email}` },
  { Icon:Phone,  label:'Phone',    value:LINKS.phone,    href:`tel:${LINKS.phone.replace(/\D/g,'')}` },
  { Icon:MapPin, label:'Location', value:LINKS.location, href:'#' },
];

const socialLinks = [
  { Icon:GithubIcon,   label:'GitHub',   href:LINKS.github,   color:'rgba(255,255,255,.08)' },
  { Icon:LinkedinIcon, label:'LinkedIn', href:LINKS.linkedin, color:'rgba(0,119,181,.12)' },
  { label:'LC', text:'LeetCode', href:LINKS.leetcode, color:'rgba(255,165,0,.1)', isText:true },
];

const inputStyle = {
  padding:'.9rem 1.1rem', background:'rgba(255,255,255,.04)',
  border:'1px solid rgba(255,255,255,.1)', borderRadius:10,
  color:'var(--text)', fontSize:'.875rem', outline:'none',
  transition:'border-color .25s,box-shadow .25s', cursor:'none', width:'100%',
};

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });

  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key:    W3F_KEY,
          name:          form.name,
          email:         form.email,
          subject:       `Portfolio Contact${form.subject ? ': ' + form.subject : ''}`,
          message:       form.message,
          from_name:     'Portfolio Contact Form',
          botcheck:      '',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setForm({ name:'', email:'', subject:'', message:'' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        throw new Error(data.message);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const btnLabel = {
    idle:    <><Send size={17}/> Send Message</>,
    sending: <><Loader size={17} className="spin"/> Sending…</>,
    sent:    <><CheckCircle size={17}/> Message Sent!</>,
    error:   <>Failed — Try Again</>,
  };
  const btnBg = {
    idle:    'linear-gradient(135deg,var(--cyan),#0088ff)',
    sending: 'linear-gradient(135deg,var(--cyan),#0088ff)',
    sent:    'linear-gradient(135deg,var(--green),#007744)',
    error:   'linear-gradient(135deg,#ff4444,#cc0000)',
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="sec-header">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}}>
            <div className="sec-tag">Connect</div>
            <h2 className="sec-title">Let's Build Together</h2>
            <p className="sec-sub">Open to internships, collaborations, hackathons, and interesting problems</p>
          </motion.div>
        </div>

        <div style={{ display:'grid',gridTemplateColumns:'1fr 1.25fr',gap:'2rem',maxWidth:1000,margin:'0 auto' }} className="contact-grid">

          {/* ── Left info panel ── */}
          <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.7,ease:[0.16,1,0.3,1]}}
            className="glass" style={{ padding:'2.25rem' }}>

            <h3 style={{ fontFamily:'Syne,sans-serif',fontSize:'1.25rem',fontWeight:700,marginBottom:'.6rem' }}>Get In Touch</h3>
            <p style={{ color:'var(--muted)',fontSize:'.875rem',marginBottom:'1.75rem',lineHeight:1.65 }}>
              I'm always up for a good conversation about tech, ideas, or opportunities. Drop me a message!
            </p>

            <div style={{ display:'flex',flexDirection:'column',gap:'.6rem',marginBottom:'2rem' }}>
              {contactItems.map(({ Icon,label,value,href })=>(
                <motion.a key={label} href={href}
                  whileHover={{ x:4,background:'rgba(255,255,255,.05)' }}
                  style={{ display:'flex',alignItems:'center',gap:'1rem',textDecoration:'none',color:'inherit',padding:'.7rem',borderRadius:10,transition:'background .2s',cursor:'none' }}>
                  <div style={{ width:38,height:38,borderRadius:10,background:'rgba(0,245,255,.08)',border:'1px solid rgba(0,245,255,.14)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--cyan)',flexShrink:0 }}>
                    <Icon size={17}/>
                  </div>
                  <div>
                    <div style={{ fontSize:'.68rem',color:'var(--dim)',textTransform:'uppercase',letterSpacing:'.1em',marginBottom:'.12rem' }}>{label}</div>
                    <div style={{ fontSize:'.85rem',color:'var(--muted)' }}>{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div style={{ borderTop:'1px solid var(--border)',paddingTop:'1.5rem' }}>
              <p style={{ fontSize:'.72rem',color:'var(--dim)',textTransform:'uppercase',letterSpacing:'.1em',marginBottom:'.85rem' }}>Find me on</p>
              <div style={{ display:'flex',gap:'.65rem',flexWrap:'wrap' }}>
                {socialLinks.map(({ Icon,label,text,href,color,isText })=>(
                  <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale:1.06,borderColor:'rgba(0,245,255,.35)',color:'var(--cyan)' }}
                    style={{ display:'inline-flex',alignItems:'center',gap:'.42rem',padding:'.48rem 1rem',border:'1px solid var(--border)',borderRadius:8,color:'var(--muted)',fontSize:'.8rem',fontWeight:500,textDecoration:'none',background:color,cursor:'none',transition:'color .2s' }}>
                    {isText ? <span style={{ fontFamily:'JetBrains Mono,monospace',fontSize:'.72rem',fontWeight:700 }}>{label}</span> : <Icon/>}
                    {text||label}
                    <ExternalLink size={10} style={{ opacity:.5 }}/>
                  </motion.a>
                ))}
                <motion.a href="/resume.pdf" download="Sunkireddy_Barath_Resume.pdf"
                  whileHover={{ scale:1.06,boxShadow:'0 8px 24px rgba(0,245,255,.3)' }}
                  style={{ display:'inline-flex',alignItems:'center',gap:'.42rem',padding:'.48rem 1rem',background:'linear-gradient(135deg,var(--cyan),#0088ff)',border:'none',borderRadius:8,color:'#000',fontSize:'.8rem',fontWeight:700,textDecoration:'none',cursor:'none' }}>
                  <Download size={14}/> Resume
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* ── Right form panel ── */}
          <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.7,ease:[0.16,1,0.3,1]}}
            className="glass" style={{ padding:'2.25rem' }}>

            <h3 style={{ fontFamily:'Syne,sans-serif',fontSize:'1.25rem',fontWeight:700,marginBottom:'1.5rem' }}>Send a Message</h3>

            <form onSubmit={handleSubmit} style={{ display:'flex',flexDirection:'column',gap:'1.1rem' }}>
              <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem' }}>
                <motion.input type="text" placeholder="Your Name" required
                  value={form.name} onChange={set('name')}
                  whileFocus={{ borderColor:'rgba(0,245,255,.45)',boxShadow:'0 0 0 3px rgba(0,245,255,.08)' }}
                  style={inputStyle}
                />
                <motion.input type="email" placeholder="your@email.com" required
                  value={form.email} onChange={set('email')}
                  whileFocus={{ borderColor:'rgba(0,245,255,.45)',boxShadow:'0 0 0 3px rgba(0,245,255,.08)' }}
                  style={inputStyle}
                />
              </div>
              <motion.input type="text" placeholder="Subject (optional)"
                value={form.subject} onChange={set('subject')}
                whileFocus={{ borderColor:'rgba(0,245,255,.45)',boxShadow:'0 0 0 3px rgba(0,245,255,.08)' }}
                style={inputStyle}
              />
              <motion.textarea placeholder="Tell me about your project or opportunity…" rows={5} required
                value={form.message} onChange={set('message')}
                whileFocus={{ borderColor:'rgba(0,245,255,.45)',boxShadow:'0 0 0 3px rgba(0,245,255,.08)' }}
                style={{ ...inputStyle, resize:'none', fontFamily:'inherit' }}
              />
              <motion.button type="submit" disabled={status==='sending'}
                whileHover={status!=='sending' ? { scale:1.02,boxShadow:'0 14px 44px rgba(0,245,255,.32)' } : {}}
                whileTap={status!=='sending' ? { scale:.98 } : {}}
                style={{ display:'flex',alignItems:'center',justifyContent:'center',gap:'.5rem',padding:'1rem',background:btnBg[status],color:'#000',fontWeight:700,fontSize:'.9rem',border:'none',borderRadius:10,cursor:'none',fontFamily:'inherit',transition:'background .4s',opacity:status==='sending'?.8:1 }}>
                {btnLabel[status]}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 1s linear infinite; }
      `}</style>
    </section>
  );
}
