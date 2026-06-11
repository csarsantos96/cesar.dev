import type { CSSProperties, ElementType } from 'react'
import {
  Brain,
  Cloud,
  Code2,
  Lock,
  
  ServerCog,
  Wrench,
} from 'lucide-react'
import { useLang } from '../context/LangContext'
import './Skills.css'

type SkillGroupKey =
  | 'backend'
  | 'ai'
  | 'devops'
  | 'cybersecurity'
  | 'cloud'
  | 'tools'

type SkillGroup = {
  key: SkillGroupKey
  color: string
  icon: ElementType
  tags: string[]
}

type SkillGroupStyle = CSSProperties & {
  '--group-color': string
}

const groups: SkillGroup[] = [
  {
    key: 'backend',
    color: '#00d4ff',
    icon: ServerCog,
    tags: ['Java', 'Python', 'Django', 'Flask', 'C', 'Node.js', 'REST APIs', 'GraphQL', 'gRPC', 'PostgreSQL', 'Redis', 'MongoDB'],
  },
  {
    key: 'ai',
    color: '#a78bfa',
    icon: Brain,
    tags: ['WhisperX', 'CUDA', 'Pandas', 'NumPy', 'Seaborn'],
  },
  {
    key: 'devops',
    color: '#ff6b35',
    icon: Code2,
    tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'CI/CD','Terraform','Ansible','ArgoCD','Helm' ],
  },
  {
    key: 'cybersecurity',
    color: '#ffffff',
    icon: Lock,
    tags: ['Pentest', 'Burp Suite', 'Metasploit', 'Nmap'],
  },
  {
    key: 'cloud',
    color: '#fbbf24',
    icon: Cloud,
    tags: ['AWS', 'GCP', 'Linux', 'Nginx', 'OCI - Oracle Cloud'],
  },
  {
    key: 'tools',
    color: '#f472b6',
    icon: Wrench,
    tags: ['Git', 'Bash/Shell', 'Wireshark', 'Postman', 'Swagger', 'Jira', 'Notion'],
  },
]

export default function Skills() {
  const { t } = useLang()
  const s = t.skills

  return (
    <section id="skills" className="section-wrap">
      <div className="section-tag">{s.tag}</div>
      <h2 className="section-title">{s.title}</h2>

      <div className="skills-grid fade-in">
        {groups.map((group) => {
          const Icon = group.icon

          return (
            <article
              className="skill-group"
              key={group.key}
              style={{ '--group-color': group.color } as SkillGroupStyle}
            >
              <div className="skill-group-header">
                <div className="skill-group-icon">
                  <Icon size={18} />
                </div>

                <div className="skill-group-title-wrap">
                  <h3 className="skill-group-title">{s.groups[group.key]}</h3>
                </div>
              </div>

              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}