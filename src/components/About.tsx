import { useLang } from '../context/LangContext'
import './About.css'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="section-wrap">
      <div className="section-tag">{a.tag}</div>
      <h2 className="section-title">{a.title}</h2>
      <div className="about-grid fade-in">
        <div className="about-photo-col">
          {/* Substitua o div abaixo por: <img src="/foto.jpg" alt="César Santos" /> */}
          <div className="about-photo">
            <span>{a.photo}</span>
          </div>
          <span className="about-photo-label">cesarsantos.dev</span>
          <div className="about-social">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-btn">GH</a>
            <a href="https://www.linkedin.com/in/cesar-augusto-dos-santos/?locale=en-US" target="_blank" rel="noreferrer" className="social-btn">LI</a>
            <a href="mailto:cesar@cesarsantos.dev" className="social-btn">@</a>
          </div>
        </div>
        <div className="about-text-col">
          <p className="about-bio">{a.bio}</p>
          <ul className="about-focus-list">
            {a.focus.map((item, i) => (
              <li key={i} className="focus-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
