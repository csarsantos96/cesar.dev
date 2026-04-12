import { useLang } from '../context/LangContext'
import './Certifications.css'


const certColors: Record<string, { bg: string; border: string; color: string }> = {
  Oracle:   { bg: 'rgba(249,115,22,0.12)',  border: 'rgba(249,115,22,0.4)',  color: '#f97316' },
  AWS:      { bg: 'rgba(251,191,36,0.12)',  border: 'rgba(251,191,36,0.4)',  color: '#fbbf24' },
  Docker:   { bg: 'rgba(0,212,255,0.12)',   border: 'rgba(0,212,255,0.4)',   color: '#00d4ff' },
  K8S:      { bg: 'rgba(163,139,250,0.12)', border: 'rgba(163,139,250,0.4)', color: '#a78bfa' },
  CompTIA:  { bg: 'rgba(255,77,109,0.12)',  border: 'rgba(255,77,109,0.4)',  color: '#ff4d6d' },
  Cisco:    { bg: 'rgba(0,188,212,0.12)',   border: 'rgba(0,188,212,0.4)',   color: '#00bcd4' },
  OSEP:     { bg: 'rgba(39,201,63,0.12)',   border: 'rgba(39,201,63,0.4)',   color: '#27c93f' },
  Linux:    { bg: 'rgba(255,183,77,0.12)',  border: 'rgba(255,183,77,0.4)',  color: '#ffb74d' },
  EBAC:     { bg: 'rgba(244,114,182,0.12)', border: 'rgba(244,114,182,0.4)', color: '#f472b6' },
  FIAP:     { bg: 'rgba(99,102,241,0.12)',  border: 'rgba(99,102,241,0.4)',  color: '#6366f1' },
  LTips:    { bg: 'rgba(132,204,22,0.12)', border: 'rgba(132,204,22,0.4)', color: '#84cc16' },
}

// eslint-disable-next-line react-refresh/only-export-components
export const certs = [
  { badge: 'Oracle', name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', issuer: 'Oracle', year: '2025', url: 'https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC7156738&trackId=OCI25AICFA&key=ee0cd7ab8848df6051db7c56e7df0aee6885d993' },

  { badge: 'Oracle', name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',    issuer: 'Oracle', year: '2025', url: 'https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC7156738&trackId=OCI25FNDCFA&key=97738738fab9690ab395e89ea942241a6cf823a6' },

  { badge: 'EBAC',   name: 'Full Stack Python Developer',                                         issuer: 'EBAC',   year: '2024', url: 'https://lms.ebaconline.com.br/certs/validate/87722-93727-83632-40336' },
  { badge: 'EBAC',   name: 'SQL Para Análise de Dados',                                           issuer: 'EBAC',   year: '2024', url:'https://lms.ebaconline.com.br/certs/validate/32585-93727-22726-54752'},

  { badge: 'EBAC',   name: 'Python Para Análise de Dados',                                        issuer: 'EBAC',   year: '2024', url: 'https://lms.ebaconline.com.br/certs/validate/61168-93727-50125-25063' },

//{ badge: 'Docker', name: 'Docker Certified Associate',                                          issuer: 'Docker', year: '2025',    url: null },

//{ badge: 'K8S',    name: 'Certified Kubernetes Administrator (CKA)',                            issuer: 'CNCF',   year: '2025',    url: null },

  //{ badge: 'LTips',  name: 'Pick do LinuxTips (adicione o nome)',                               issuer: 'LinuxTips', year: '—', url: null },
  
]

export default function Certifications() {
  const { t } = useLang()
  const c = t.certs

  return (
    <section id="certs" className="section-wrap">
      <div className="section-tag">{c.tag}</div>
      <h2 className="section-title">{c.title}</h2>
      <div className="certs-list fade-in">
        {certs.map((cert, i) => {
            const color = certColors[cert.badge] ?? { bg: 'rgba(255,255,255,0.07)', border: 'rgba(255,255,255,0.2)', color: '#fff' }
            const Wrapper = cert.url ? 'a' : 'div'
            return (
              <Wrapper
                key={i}
                className={`cert-item${cert.url ? ' cert-link' : ''}`}
                {...(cert.url ? { href: cert.url, target: '_blank', rel: 'noreferrer' } : {})}
              >
                <div
                  className="cert-badge"
                  style={{ background: color.bg, borderColor: color.border, color: color.color }}
                >
                  {cert.badge}
                </div>
                <div className="cert-info">
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-issuer">{cert.issuer}</div>
                </div>
                <div className="cert-year">{cert.year}</div>
              </Wrapper>
            )
          })}
      </div>
    </section>
  )
}