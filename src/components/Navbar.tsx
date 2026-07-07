import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { type Lang } from '../i18n/translations'
import './Navbar.css'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const nav = t.nav
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#about', label: nav.about },
    { href: '#skills', label: nav.skills },
    { href: '#projects', label: nav.projects },
    { href: 'https://commandlinux.dev', label: 'blog' },
    { href: '#certs', label: nav.certs },
    { href: '#resume', label: nav.resume },
    { href: '#contact', label: nav.contact },
  ]

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <a href="#" className="nav-logo" onClick={handleLinkClick}>
        <span className="nav-prefix">~/ </span>
        <span className="nav-icon">&gt;_ </span>
        cesarsantos.dev<span className="nav-cursor" />
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={handleLinkClick}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
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

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}