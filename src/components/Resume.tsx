import { BriefcaseBusiness, GraduationCap, Download } from 'lucide-react'
import { useLang } from '../context/LangContext'
import './Resume.css'

type ResumeItem = {
  date: string
  title: string
  company: string
  desc: string
}

export default function Resume() {
  const { t } = useLang()
  const r = t.resume as typeof t.resume & {
    experience: ResumeItem[]
    education: ResumeItem[]
  }

  return (
    <section id="resume" className="section-wrap">
      <div className="section-tag">{r.tag}</div>
      <h2 className="section-title">{r.title}</h2>

      <div className="resume-block fade-in">
        <div className="resume-col">
          <div className="resume-col-title with-icon">
            <span className="resume-col-icon">
              <BriefcaseBusiness size={16} />
            </span>
            {r.expLabel}
          </div>

          <div className="timeline-list">
            {r.experience.map((item: ResumeItem, i: number) => (
              <article
                className={`timeline-item ${i === 0 ? 'is-current' : ''}`}
                key={i}
              >
                <div className="timeline-dot" />
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-company">{item.company}</div>
                <div className="timeline-desc">{item.desc}</div>
              </article>
            ))}
          </div>
        </div>

        <div className="resume-col">
          <div className="resume-col-title with-icon">
            <span className="resume-col-icon">
              <GraduationCap size={16} />
            </span>
            {r.eduLabel}
          </div>

          <div className="timeline-list">
            {r.education.map((item: ResumeItem, i: number) => (
              <article className="timeline-item education-item" key={i}>
                <div className="timeline-dot" />
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-company">{item.company}</div>
                <div className="timeline-desc">{item.desc}</div>
              </article>
            ))}
          </div>

          <div className="resume-download">
            <a href="#" className="btn-primary resume-btn">
              <Download size={14} />
              {r.download}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}