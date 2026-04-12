import { useLang } from '../context/LangContext'
import { certs } from './Certifications'
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
          <div className="stat-card"><div className="stat-num">8+</div><div className="stat-label">{s.s1}</div></div>
          <div className="stat-card"><div className="stat-num">12+</div><div className="stat-label">{s.s2}</div></div>
          <div className="stat-card">
            <div className="stat-num">{certs.filter(c => c.year !== '—').length}</div>
            <div className="stat-label">{s.s3}</div>
          </div>
          <div className="stat-card"><div className="stat-num">3</div><div className="stat-label">{s.s4}</div></div>
        </div>

        <div className="terminal">
          <div className="terminal-bar">
            <span className="t-dot t-red" />
            <span className="t-dot t-yellow" />
            <span className="t-dot t-green" />
            <span className="terminal-title">cesar@cesarsantos.dev — zsh</span>
          </div>
          <div className="terminal-body">
            <div><span className="t-prompt">➜</span> <span className="t-cmd">whoami</span></div>
            <div className="t-out">César Santos · Back-end &amp; Security Engineer</div>
            <div style={{ marginTop: 8 }}><span className="t-prompt">➜</span> <span className="t-cmd">cat skills.json</span></div>
            <div><span className="t-key">"backend"</span><span className="t-comment">:</span> <span className="t-val">["Go", "Python", "Node.js"]</span></div>
            <div><span className="t-key">"devops"</span><span className="t-comment">:</span> <span className="t-val">["Docker", "K8s", "CI/CD"]</span></div>
            <div><span className="t-key">"security"</span><span className="t-comment">:</span> <span className="t-val">["Pentest", "SIEM", "IAM"]</span></div>
            <div style={{ marginTop: 8 }}><span className="t-prompt">➜</span> <span className="t-cmd">echo "open to work"</span></div>
            <div className="t-out">open to work</div>
            <div><span className="t-prompt">➜</span> <span className="cursor" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
