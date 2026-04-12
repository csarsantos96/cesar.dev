import { useNavigate } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import './ErrorPage.css'

export default function ErrorPage() {
  const navigate = useNavigate()
  const { t } = useLang()
  const e = t.error

  return (
    <div className="error-page">
      <div className="error-terminal">
        <div className="error-terminal-bar">
          <span className="t-dot t-red" />
          <span className="t-dot t-yellow" />
          <span className="t-dot t-green" />
          <span className="error-terminal-title">cesar@cesarsantos.dev — zsh</span>
        </div>
        <div className="error-terminal-body">
          <div className="error-line">
            <span className="e-prompt">➜</span>
            <span className="e-cmd">npm run start</span>
          </div>
          <div className="e-out">
            <span className="e-error">FATAL:</span> HTTP <span className="e-code">{e.code}</span> — {e.title}
          </div>
          <div className="e-out e-desc">{e.desc}</div>
          <div className="error-line" style={{ marginTop: 16 }}>
            <span className="e-prompt">➜</span>
            <span className="e-cmd">npm run restart<span className="cursor-blink" /></span>
          </div>
        </div>
      </div>

      <div className="error-big-code" style={{ color: '#ff4d6d' }}>{e.code}</div>
      <h1 className="error-title">{e.title}</h1>
      <p className="error-desc">{e.desc}</p>

      <button className="btn-primary" onClick={() => window.location.reload()}>
        {e.btn}
      </button>
    </div>
  )
}
