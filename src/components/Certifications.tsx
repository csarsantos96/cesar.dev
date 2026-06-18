import type { CSSProperties, ElementType } from 'react'
import {
  ExternalLink,
  ShieldCheck,
  Award,
  Cloud,
  Code2,
  ServerCog,
  Wrench,
} from 'lucide-react'
import { useLang } from '../context/LangContext'
import './Certifications.css'

type SkillKey =
  | 'backend'
  | 'ai'
  | 'devops'
  | 'cybersecurity'
  | 'cloud'
  | 'frontend'
  | 'tools'

type SkillColor = {
  bg: string
  border: string
  color: string
  glow: string
}

type Cert = {
  badge: string
  name: string
  issuer: string
  year: string
  url: string | null
}

type CertStyle = CSSProperties & {
  '--cert-bg': string
  '--cert-border': string
  '--cert-color': string
  '--cert-glow': string
}

const skillColors: Record<SkillKey, SkillColor> = {
  backend: {
    bg: 'rgba(0,212,255,0.12)',
    border: 'rgba(0,212,255,0.4)',
    color: '#00d4ff',
    glow: 'rgba(0,212,255,0.18)',
  },
  ai: {
    bg: 'rgba(167,139,250,0.12)',
    border: 'rgba(167,139,250,0.4)',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.18)',
  },
  devops: {
    bg: 'rgba(255,107,53,0.12)',
    border: 'rgba(255,107,53,0.4)',
    color: '#ff6b35',
    glow: 'rgba(255,107,53,0.18)',
  },
  cybersecurity: {
    bg: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.25)',
    color: '#e5e7eb',
    glow: 'rgba(255,255,255,0.12)',
  },
  cloud: {
    bg: 'rgba(251,191,36,0.12)',
    border: 'rgba(251,191,36,0.4)',
    color: '#fbbf24',
    glow: 'rgba(251,191,36,0.18)',
  },
  frontend: {
    bg: 'rgba(99,102,241,0.12)',
    border: 'rgba(99,102,241,0.4)',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.18)',
  },
  tools: {
    bg: 'rgba(244,114,182,0.12)',
    border: 'rgba(244,114,182,0.4)',
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.18)',
  },
}

const certSkillMap: Record<string, SkillKey> = {
  Oracle: 'cloud',
  AWS: 'cloud',
  GCP: 'cloud',
  OCI: 'cloud',

  Docker: 'devops',
  K8S: 'devops',
  Kubernetes: 'devops',
  LTips: 'devops',

  EBAC: 'backend',

  FIAP: 'cybersecurity',
  CompTIA: 'cybersecurity',
  Cisco: 'cybersecurity',
  OSEP: 'cybersecurity',

  Linux: 'cloud',
}

const certs: Cert[] = [
  {
  badge: 'Docker',
  name: 'Uncomplicating Docker',
  issuer: 'LINUXtips',
  year: '2026',
  url: 'https://www.credential.net/4033f97c-52d2-4977-8658-69e3fc411db3',
},
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

function getCertIcon(skill: SkillKey): ElementType {
  if (skill === 'cloud') return Cloud
  if (skill === 'devops') return Code2
  if (skill === 'cybersecurity') return ShieldCheck
  if (skill === 'backend') return ServerCog
  if (skill === 'tools') return Wrench

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
          const skill = certSkillMap[cert.badge] ?? 'tools'
          const color = skillColors[skill]
          const Icon = getCertIcon(skill)
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
                } as CertStyle
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