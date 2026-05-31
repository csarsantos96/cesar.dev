import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
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
          <div className="about-photo-card">
            <div className="about-photo">
              
              
              <img src="/image/avatar.jpeg" alt="César Santos" />
              
            </div>

            <div className="about-identity">
              <span className="about-name">César Santos</span>
              <span className="about-role">Back-end · DevOps · Security</span>
              <span className="about-photo-label">cesarsantos.dev</span>
            </div>

            <div className="about-social">
              <a
                href="https://github.com/csarsantos96"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="GitHub"
              >
                <FaGithub size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/cesar-augusto-dos-santos/?locale=en-US"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={14} />
              </a>

              <a
                href="mailto:hello@cesarsantos.dev"
                className="social-btn"
                aria-label="Email"
              >
                <HiOutlineMail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="about-text-col">
          <p className="about-bio">{a.bio}</p>

          <div className="about-focus-grid">
            {a.focus.map((item, i) => (
              <div key={i} className="focus-card">
                <span className="focus-dot" />
                <span className="focus-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}