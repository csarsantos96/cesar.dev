import type { CSSProperties } from 'react'
import { useLang } from '../context/LangContext'
import './Projects.css'

const typeColors: Record<string, string> = {
  'DATA SCIENCE': '#a78bfa',
  'BACK-END': '#00d4ff',
  'DEVOPS': '#ff6b35',
  'CYBERSECURITY': '#ffffff',
  'CLOUD': '#fbbf24',
  'FRONT-END': '#6366f1',
  'TOOLS': '#f472b6',
}

type Project = {
  type: string
  name: string
  desc: string
  stack: string[]
  liveUrl: string | null
  repoUrl: string
}

export default function Projects() {
  const { t } = useLang()
  const p = t.projects as typeof t.projects & { items: Project[] }

  return (
    <section id="projects" className="section-wrap">
      <div className="section-tag">{p.tag}</div>
      <h2 className="section-title">{p.title}</h2>

      <div className="projects-grid fade-in">
        {p.items.map((proj, i) => (
          <article
            key={i}
            className="project-card"
            style={
              {
                '--project-color': typeColors[proj.type] ?? '#3a3a3a',
              } as CSSProperties
            }
          >
            <div className="project-header">
              <span className="project-type">{proj.type}</span>
              <span className="project-arrow">↗</span>
            </div>

            <h3 className="project-name">{proj.name}</h3>

            <p className="project-desc">{proj.desc}</p>

            <div className="project-stack">
              {proj.stack.map((s) => (
                <span key={s} className="stack-tag">
                  {s}
                </span>
              ))}
            </div>

            <div className="project-links">
              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Live Site ↗
                </a>
              )}

              {proj.repoUrl && proj.repoUrl !== '#' && (
                <a
                  href={proj.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline project-btn"
                >
                  Source Code ⌥
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}