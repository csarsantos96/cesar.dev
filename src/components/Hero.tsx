import { useLang } from '../context/LangContext'
import { certs } from './Certifications'
import HeroTerminal from './HeroTerminal'
import './Hero.css'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero
  const s = t.stats

  return (
    <section id="hero" className="hero">
      <div className="hero-left fade-in">
        <div className="hero-status">
          <span className="status-dot" />
          {h.status}
        </div>
        <div className="hero-avatar">
            <img src="/image/avatar.jpeg" alt="César Santos" />
        </div>
        <h1 className="hero-name">César<br /><span className="accent">Santos</span></h1>
        <p className="hero-title">{h.title}</p>
        <p className="hero-desc">{h.desc}</p>
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">{h.cta1}</a>
          <a href="#contact" className="btn-outline">{h.cta2}</a>
        </div>
      </div>

      <div className="hero-right fade-in" style={{ transitionDelay: '0.15s' }}>
        <div className="stats-grid">
          <div className="stat-card"><div className="stat-num">5+</div><div className="stat-label">{s.s1}</div></div>
          <div className="stat-card"><div className="stat-num">12+</div><div className="stat-label">{s.s2}</div></div>
          <div className="stat-card">
          <div className="stat-num">{certs.length}</div> 
            <div className="stat-label">{s.s3}</div>
          </div>
          <div className="stat-card"><div className="stat-num">3</div><div className="stat-label">{s.s4}</div></div>
        </div>

        <HeroTerminal /> 
      </div>
    </section>
  )
}
