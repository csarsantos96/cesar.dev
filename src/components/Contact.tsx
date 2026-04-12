import { useLang } from '../context/LangContext'
import './Contact.css'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  return (
    <section id="contact" className="section-wrap">
      <div className="section-tag">{c.tag}</div>
      <h2 className="section-title">{c.title}</h2>
      <div className="contact-grid fade-in">
        <div className="contact-left">
          <div className="contact-label">{c.open}</div>
          <div className="contact-big">{c.msg}</div>
          <p className="contact-sub">{c.sub}</p>
        </div>
        <div className="contact-right">
          {/* ✏️ Atualize seus links aqui */}
          <a href="mailto:cesar@cesarsantos.dev" className="contact-link"><span className="link-icon">@</span>cesar@cesarsantos.dev</a>
          <a href="https://www.linkedin.com/in/cesar-augusto-dos-santos/?locale=en-US" target="_blank" rel="noreferrer" className="contact-link"><span className="link-icon">in</span>Cesar Augusto dos Santos Mafra</a>
          <a href="https://github.com/csarsantos96" target="_blank" rel="noreferrer" className="contact-link"><span className="link-icon">GH</span>csarsantos96</a>
          <a href="https://cesarsantos.dev" className="contact-link"><span className="link-icon">↗</span>cesarsantos.dev</a>
        </div>
      </div>
    </section>
  )
}
