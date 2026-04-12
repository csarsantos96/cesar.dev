import { ExternalLink, ShieldCheck, Award, Cloud } from 'lucide-react'
import { useLang } from '../context/LangContext'
import './Certifications.css'

const certColors: Record<
  string,
  { bg: string; border: string; color: string; glow: string }
> = {
  Oracle: {
    bg: 'rgba(249,115,22,0.12)',
    border: 'rgba(249,115,22,0.4)',
    color: '#f97316',
    glow: 'rgba(249,115,22,0.18)',
  },
  AWS: {
    bg: 'rgba(251,191,36,0.12)',
    border: 'rgba(251,191,36,0.4)',
    color: '#fbbf24',
    glow: 'rgba(251,191,36,0.18)',
  },
  Docker: {
    bg: 'rgba(0,212,255,0.12)',
    border: 'rgba(0,212,255,0.4)',
    color: '#00d4ff',
    glow: 'rgba(0,212,255,0.18)',
  },
  K8S: {
    bg: 'rgba(163,139,250,0.12)',
    border: 'rgba(163,139,250,0.4)',
    color: '#a78bfa',
    glow: 'rgba(163,139,250,0.18)',
  },
  CompTIA: {
    bg: 'rgba(255,77,109,0.12)',
    border: 'rgba(255,77,109,0.4)',
    color: '#ff4d6d',
    glow: 'rgba(255,77,109,0.18)',
  },
  Cisco: {
    bg: 'rgba(0,188,212,0.12)',
    border: 'rgba(0,188,212,0.4)',
    color: '#00bcd4',
    glow: 'rgba(0,188,212,0.18)',
  },
  OSEP: {
    bg: 'rgba(39,201,63,0.12)',
    border: 'rgba(39,201,63,0.4)',
    color: '#27c93f',
    glow: 'rgba(39,201,63,0.18)',
  },
  Linux: {
    bg: 'rgba(255,183,77,0.12)',
    border: 'rgba(255,183,77,0.4)',
    color: '#ffb74d',
    glow: 'rgba(255,183,77,0.18)',
  },
  EBAC: {
    bg: 'rgba(99,102,241,0.12)',
    border: 'rgba(99,102,241,0.4)',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.18)',
  },
  FIAP: {
    bg: 'rgba(139,92,246,0.12)',
    border: 'rgba(139,92,246,0.4)',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.18)',
  },
  LTips: {
    bg: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.25)',
    color: '#e5e7eb',
    glow: 'rgba(255,255,255,0.12)',
  },
}

export const certs = [
  {
    badge: 'Oracle',
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    year: '2025',
    url: 'https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC7156738&trackId=OCI25AICFA&key=ee0cd7ab8848df6051db7c56e7df0aee6885d993',
  },
  {
    badge: 'Oracle',
    name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    year: '2025',
    url: 'https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC7156738&trackId=OCI25FNDCFA&key=97738738fab9690ab395e89ea942241a6cf823a6',
  },
  {
    badge: 'EBAC',
    name: 'Full Stack Python Developer',
    issuer: 'EBAC',
    year: '2024',
    url: 'https://lms.ebaconline.com.br/certs/validate/87722-93727-83632-40336',
  },
  {
    badge: 'EBAC',
    name: 'Python Para Análise de Dados',
    issuer: 'EBAC',
    year: '2025',
    url: 'https://lms.ebaconline.com.br/certs/validate/61168-93727-50125-25063',
  },
  {
    badge: 'EBAC',
    name: 'SQL Para Análise de Dados',
    issuer: 'EBAC',
    year: '2022',
    url: 'https://lms.ebaconline.com.br/certs/validate/32585-93727-22726-54752',
  },
  
]

function getCertIcon(badge: string) {
  if (badge === 'AWS' || badge === 'Oracle' || badge === 'FIAP') return Cloud
  if (badge === 'CompTIA' || badge === 'OSEP' || badge === 'Cisco') return ShieldCheck
  return Award
}

export default function Certifications() {
  const { t } = useLang()
  const c = t.certs

  return (
    <section id="certs" className="section-wrap">
      <div className="section-tag">{c.tag}</div>
      <h2 className="section-title">{c.title}</h2>

      <div className="certs-list fade-in">
        {certs.map((cert, i) => {
          const color = certColors[cert.badge] ?? {
            bg: 'rgba(255,255,255,0.07)',
            border: 'rgba(255,255,255,0.2)',
            color: '#fff',
            glow: 'rgba(255,255,255,0.12)',
          }

          const Icon = getCertIcon(cert.badge)
          const Wrapper = cert.url ? 'a' : 'div'

          return (
            <Wrapper
              key={i}
              className={`cert-item${cert.url ? ' cert-link' : ''}`}
              style={
                {
                  '--cert-bg': color.bg,
                  '--cert-border': color.border,
                  '--cert-color': color.color,
                  '--cert-glow': color.glow,
                } as React.CSSProperties
              }
              {...(cert.url
                ? { href: cert.url, target: '_blank', rel: 'noreferrer' }
                : {})}
            >
              <div className="cert-badge">
                <Icon size={16} />
              </div>

              <div className="cert-info">
                <div className="cert-topline">
                  <span className="cert-issuer-pill">{cert.issuer}</span>
                  <span className="cert-year mobile-year">{cert.year}</span>
                </div>

                <div className="cert-name">{cert.name}</div>
              </div>

              <div className="cert-meta">
                <div className="cert-year">{cert.year}</div>
                {cert.url && (
                  <div className="cert-arrow">
                    <ExternalLink size={16} />
                  </div>
                )}
              </div>
            </Wrapper>
          )
        })}
      </div>
    </section>
  )
}