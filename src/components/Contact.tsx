import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FiExternalLink } from 'react-icons/fi'

import { useLang } from '../context/LangContext'
import './Contact.css'

const contactItems = [
  {
    icon: HiOutlineMail,
    label: 'Email',
    value: 'cesar@cesarsantos.dev',
    href: 'mailto:cesar@cesarsantos.dev',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'Cesar Augusto dos Santos Mafra',
    href: 'https://www.linkedin.com/in/cesar-augusto-dos-santos/?locale=en-US',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'csarsantos96',
    href: 'https://github.com/csarsantos96',
  },
]

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
          <h3 className="contact-big">{c.msg}</h3>
          <p className="contact-sub">{c.sub}</p>
        </div>

        <div className="contact-right">
          {contactItems.map((item) => {
            const Icon = item.icon
            const isMail = item.href.startsWith('mailto:')

            return (
              <a
                key={item.label}
                href={item.href}
                target={isMail ? undefined : '_blank'}
                rel={isMail ? undefined : 'noreferrer'}
                className="contact-link-card"
              >
                <div className="contact-link-left">
                  <div className="contact-link-icon">
                    <Icon size={16} />
                  </div>

                  <div className="contact-link-texts">
                    <span className="contact-link-label">{item.label}</span>
                    <span className="contact-link-value">{item.value}</span>
                  </div>
                </div>

                <div className="contact-link-arrow">
                  <FiExternalLink size={16} />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}