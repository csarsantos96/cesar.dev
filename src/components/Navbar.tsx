import { useLang } from '../context/LangContext'
import { type Lang } from '../i18n/translations'
import './Navbar.css'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const nav = t.nav

  const links = [
    { href: '#about', label: nav.about },
    { href: '#skills', label: nav.skills },
    { href: '#projects', label: nav.projects },
    { href: '#certs', label: nav.certs },
    { href: '#resume', label: nav.resume },
    { href: '#contact', label: nav.contact },
  ]

  return (
    <nav className="navbar">
      <a href="#" className="nav-logo">
        <span className="nav-prefix">~/ </span>
        <span className="nav-icon">&gt;_ </span>
        cesarsantos.dev<span className="nav-cursor" />
      </a>      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
      <div className="lang-switcher">
        {(['pt', 'en', 'de'] as Lang[]).map(l => (
          <button
            key={l}
            className={`lang-btn${lang === l ? ' active' : ''}`}
            onClick={() => setLang(l)}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  )
}
