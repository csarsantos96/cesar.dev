
import { useLang } from '../context/LangContext'
import './ErrorPage.css'

export default function NotFound() {

  const { t } = useLang()
  const n = t.notFound

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
            <span className="e-cmd">curl https://cesarsantos.dev<span className="e-path">/this-page</span></span>
          </div>
          <div className="e-out">
            <span className="e-error">Error:</span> HTTP <span className="e-code">{n.code}</span> — {n.title}
          </div>
          <div className="e-out e-desc">{n.desc}</div>
          <div className="error-line" style={{ marginTop: 16 }}>
            <span className="e-prompt">➜</span>
            <span className="e-cmd">cd ~<span className="cursor-blink" /></span>
          </div>
        </div>
      </div>

      <div className="error-big-code">{n.code}</div>
      <h1 className="error-title">{n.title}</h1>
      <p className="error-desc">{n.desc}</p>

      <button className="btn-primary" onClick={() => navigate('/')}>
        {n.btn}
      </button>
    </div>
  )
}
