import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LINKS } from '../data/portfolio';

const GithubIcon   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>;
const LinkedinIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;

const navLinks = [
  ['About', '#about'], ['Education', '#education'], ['Experience', '#internships'],
  ['Open Source', '#opensource'], ['Projects', '#projects'],
  ['Skills', '#skills'], ['Awards', '#achievements'], ['Contact', '#contact'],
];

export default function Footer() {
  const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior:'smooth' });

  return (
    <motion.footer initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
      style={{ borderTop:'1px solid var(--border)', background:'rgba(0,0,0,.25)' }}>

      {/* Top */}
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'3.5rem 2rem 2rem', display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr', gap:'3rem' }} className="footer-grid">

        {/* Brand */}
        <div>
          <div style={{ fontFamily:'Syne,sans-serif', fontSize:'1.75rem', fontWeight:800, marginBottom:'.75rem' }}>
            SB<span style={{ color:'var(--cyan)' }}>.</span>
          </div>
          <p style={{ color:'var(--muted)', fontSize:'.875rem', lineHeight:1.7, marginBottom:'1.25rem', maxWidth:280 }}>
            Full-Stack Developer &amp; AI Engineer from Chennai, India. Building at the intersection of AI, Web3, and real-world impact.
          </p>
          <div style={{ display:'flex', gap:'.6rem' }}>
            {[
              { href:LINKS.github,   Icon:GithubIcon,   label:'GitHub' },
              { href:LINKS.linkedin, Icon:LinkedinIcon,  label:'LinkedIn' },
              { href:`mailto:${LINKS.email}`, Icon:Mail, label:'Email', isLucide:true },
            ].map(({ href, Icon, label, isLucide })=>(
              <motion.a key={label} href={href} target="_blank" rel="noopener" aria-label={label}
                whileHover={{ y:-3, color:'var(--cyan)', borderColor:'rgba(0,245,255,.35)' }}
                style={{ width:38,height:38,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid var(--border)',borderRadius:9,color:'var(--muted)',textDecoration:'none',background:'var(--surface)',cursor:'none',transition:'color .2s' }}>
                {isLucide ? <Icon size={16}/> : <Icon/>}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 style={{ fontFamily:'Syne,sans-serif', fontSize:'.88rem', fontWeight:700, marginBottom:'1.1rem', color:'var(--text)' }}>Quick Links</h4>
          <div style={{ display:'flex', flexDirection:'column', gap:'.5rem' }}>
            {navLinks.slice(0,5).map(([label,href])=>(
              <motion.a key={href} onClick={()=>scrollTo(href)}
                whileHover={{ x:4, color:'var(--cyan)' }}
                style={{ color:'var(--muted)', fontSize:'.83rem', textDecoration:'none', cursor:'none', transition:'color .2s' }}>
                {label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily:'Syne,sans-serif', fontSize:'.88rem', fontWeight:700, marginBottom:'1.1rem', color:'var(--text)' }}>Contact</h4>
          <div style={{ display:'flex', flexDirection:'column', gap:'.65rem' }}>
            {[
              { Icon:Mail,   val:LINKS.email,    href:`mailto:${LINKS.email}` },
              { Icon:Phone,  val:LINKS.phone,    href:`tel:${LINKS.phone.replace(/\D/g,'')}` },
              { Icon:MapPin, val:'Chennai, India',href:'#' },
            ].map(({ Icon, val, href })=>(
              <a key={val} href={href} style={{ display:'flex',alignItems:'center',gap:'.5rem',color:'var(--muted)',fontSize:'.8rem',textDecoration:'none',cursor:'none' }}>
                <Icon size={13} style={{ color:'var(--cyan)',flexShrink:0 }}/> {val}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop:'1px solid var(--border)', padding:'1.25rem 2rem', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1rem', maxWidth:1200, margin:'0 auto' }}>
        <p style={{ fontSize:'.78rem', color:'var(--dim)' }}>
          © 2026 Sunkireddy Barath · Chennai, India
        </p>
        <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.7rem', color:'var(--dim)' }}>
          Built with React + Framer Motion · No templates, just craft
        </p>
      </div>

      <style>{`
        @media(max-width:768px){
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </motion.footer>
  );
}
