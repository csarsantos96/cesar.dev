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

type Skill = { name: string; learning?: boolean }

type SkillGroup = {
  key: SkillGroupKey
  color: string
  icon: ElementType
  tags: Skill[]
}

type SkillGroupStyle = CSSProperties & {
  '--group-color': string
}

// learning: true  -> skill you're currently studying (dot + dimmed)
const groups: SkillGroup[] = [
  {
    key: 'backend',
    color: '#00d4ff',
    icon: ServerCog,
    tags: [
      { name: 'Java' }, { name: 'Python' }, { name: 'Django' }, { name: 'Flask' },
      { name: 'C' }, { name: 'Node.js' }, { name: 'REST APIs' }, { name: 'GraphQL' },
      { name: 'gRPC' }, { name: 'PostgreSQL' }, { name: 'Redis' }, { name: 'MongoDB' },
    ],
  },
  {
    key: 'ai',
    color: '#a78bfa',
    icon: Brain,
    tags: [
      { name: 'WhisperX' }, { name: 'CUDA' }, { name: 'Pandas' },
      { name: 'NumPy' }, { name: 'Seaborn' },
    ],
  },
  {
    key: 'devops',
    color: '#ff6b35',
    icon: Code2,
    tags: [
      { name: 'Docker' }, { name: 'CI/CD' }, { name: 'Linux' },
      { name: 'Kubernetes' }, { name: 'Terraform', learning: true },
    ],
  },
  {
    key: 'cybersecurity',
    color: '#ffffff',
    icon: Lock,
    tags: [
      { name: 'Pentest', learning: true }, { name: 'Burp Suite', learning: true },
      { name: 'Metasploit', learning: true }, { name: 'Nmap', learning: true },
    ],
  },
  {
    key: 'cloud',
    color: '#fbbf24',
    icon: Cloud,
    tags: [
      { name: 'OCI - Oracle Cloud' }, { name: 'Linux' }, { name: 'Nginx' },
      { name: 'AWS', learning: true }, { name: 'GCP', learning: true }, { name: 'Azure', learning: true },
    ],
  },
  {
    key: 'tools',
    color: '#f472b6',
    icon: Wrench,
    tags: [
      { name: 'Git' }, { name: 'SSH' }, { name: 'Bash/Shell' }, { name: 'Wireshark' },
      { name: 'Postman' }, { name: 'Swagger' }, { name: 'Jira' }, { name: 'Notion' },
    ],
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
                  <span
                    className={`skill-tag${tag.learning ? ' is-learning' : ''}`}
                    key={tag.name}
                    title={tag.learning ? s.learning : undefined}
                  >
                    {tag.learning && <span className="skill-tag-dot" aria-hidden="true" />}
                    {tag.name}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>

      <p className="skills-legend">
        <span className="skill-tag-dot" aria-hidden="true" /> {s.learningLegend}
      </p>
    </section>
  )
}
