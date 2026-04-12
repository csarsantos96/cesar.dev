import { useLang } from '../context/LangContext'
import './Skills.css'

const groups = [
  { key: 'Backend', color: '#00d4ff', tags: ['Java', 'Python', 'Django', 'Flask', 'C', 'Node.js', 'REST APIs', 'GraphQL', 'gRPC', 'PostgreSQL', 'Redis', 'MongoDB'] },
  { key: 'AI & ML', color: '#a78bfa', tags: ['WhisperX', 'CUDA', 'Pandas', 'NumPy', 'Seaborn'] },
  { key: 'DevOps', color: '#ff6b35', tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins'] },
  { key: 'Cybersecurity', color: '#ffff', tags: ['Pentest', 'Burp Suite', 'Metasploit', 'Nmap'] },
  { key: 'Cloud & Infra', color: '#fbbf24', tags: ['AWS', 'GCP', 'Linux', 'Nginx', 'OCI - Oracle Cloud'] },
  { key: 'Front-end', color: '#6366f1', tags: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'TailwindCSS'] },
  { key: 'Tools', color: '#f472b6', tags: ['Git', 'Bash/Shell', 'Wireshark', 'Postman', 'Swagger', 'Jira', 'Notion'] },
]

export default function Skills() {
  const { t } = useLang()
  const s = t.skills

  return (
    <section id="skills" className="section-wrap">
      <div className="section-tag">{s.tag}</div>
      <h2 className="section-title">{s.title}</h2>
      <div className="skills-grid fade-in">
        {groups.map(g => (
          <div
            className="skill-group"
            key={g.key}
            style={{ '--group-color': g.color } as React.CSSProperties}
          >
            <div className="skill-group-title">{g.key}</div>
            <div className="skill-tags">
              {g.tags.map(tag => <span className="skill-tag" key={tag}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
