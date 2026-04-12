import { useLang } from '../context/LangContext'
import './Projects.css'

const tagColors: Record<string, string> = {
  Java: '#00d4ff', Python: '#00d4ff', Django: '#00d4ff', Flask: '#00d4ff',
  'Node.js': '#00d4ff', PostgreSQL: '#00d4ff', Redis: '#00d4ff', MongoDB: '#00d4ff',
  'REST APIs': '#00d4ff', GraphQL: '#00d4ff', gRPC: '#00d4ff', C: '#00d4ff',
  WhisperX: '#a78bfa', CUDA: '#a78bfa', Pandas: '#a78bfa', NumPy: '#a78bfa', Seaborn: '#a78bfa',
  Docker: '#ff6b35', Kubernetes: '#ff6b35', 'GitHub Actions': '#ff6b35', Jenkins: '#ff6b35',
  Pentest: '#ffffff', 'Burp Suite': '#ffffff', Metasploit: '#ffffff', Nmap: '#ffffff',
  AWS: '#fbbf24', GCP: '#fbbf24', Linux: '#fbbf24', Nginx: '#fbbf24', 'OCI - Oracle Cloud': '#fbbf24',
  React: '#6366f1', 'Vue.js': '#6366f1', TypeScript: '#6366f1', 'Next.js': '#6366f1', TailwindCSS: '#6366f1',
  Git: '#f472b6', 'Bash/Shell': '#f472b6', Wireshark: '#f472b6', Postman: '#f472b6', Jira: '#f472b6', Notion: '#f472b6',
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
          <div key={i} className="project-card">
            <div className="project-header">
              <span className="project-type">{proj.type}</span>
              <span className="project-arrow">↗</span>
            </div>
            <div className="project-name">{proj.name}</div>
            <p className="project-desc">{proj.desc}</p>
            <div className="project-stack">
              {proj.stack.map(s => (
                <span
                  key={s}
                  className="stack-tag"
                  style={{
                    borderColor: tagColors[s] ?? '#3a3a3a',
                    color: tagColors[s] ?? '#888888',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="project-links">
              {proj.liveUrl && (
                <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
                  Live Site ↗
                </a>
              )}
              {proj.repoUrl && proj.repoUrl !== '#' && (
                <a href={proj.repoUrl} target="_blank" rel="noreferrer" className="btn-outline">
                  Source Code ⌥
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}