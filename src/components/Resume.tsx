import { useLang } from '../context/LangContext'
import './Resume.css'

type ResumeItem = { date: string; title: string; company: string; desc: string }

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
          <div className="resume-col-title">{r.expLabel}</div>
          {r.experience.map((item: ResumeItem, i: number) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-title">{item.title}</div>
              <div className="timeline-company">{item.company}</div>
              <div className="timeline-desc">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="resume-col">
          <div className="resume-col-title">{r.eduLabel}</div>
          {r.education.map((item: ResumeItem, i: number) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-title">{item.title}</div>
              <div className="timeline-company">{item.company}</div>
              <div className="timeline-desc">{item.desc}</div>
            </div>
          ))}

          <div style={{ marginTop: '2rem' }}>
            <a href="#" className="btn-primary">{r.download}</a>
          </div>
        </div>
      </div>
    </section>
  )
}