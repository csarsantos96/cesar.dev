import { useState, useEffect, useRef } from 'react'

// --- live log feed (tail -f at the bottom) ---

const ENDPOINTS = [
  { method: 'GET', path: '/api/v1/health', status: 200, tag: 'info' },
  { method: 'POST', path: '/api/v1/auth/token', status: 201, tag: 'info' },
  { method: 'POST', path: '/api/v1/transcribe', status: 202, tag: 'info' },
  { method: 'GET', path: '/api/v1/embeddings/query', status: 200, tag: 'info' },
  { method: 'DELETE', path: '/api/v1/sessions/e91c', status: 204, tag: 'warn' },
  { method: 'GET', path: '/api/v1/metrics', status: 200, tag: 'info' },
]

type Line = {
  ts: string
  method: string
  path: string
  status: number
  tag: string
  ms: string
}

function makeLine(): Line {
  const e = ENDPOINTS[Math.floor(Math.random() * ENDPOINTS.length)]
  return {
    ts: new Date().toISOString(),
    ...e,
    ms: (Math.random() * 90 + 4).toFixed(1),
  }
}

const TAG_COLOR: Record<string, string> = {
  info: 'var(--accent, #c084fc)',
  warn: 'var(--t-yellow, #fbbf24)',
  error: 'var(--t-red, #f87171)',
}

function LogTail() {
  const [lines, setLines] = useState<Line[]>(() =>
    Array.from({ length: 3 }, makeLine),
  )
  const paused = useRef(false)

  useEffect(() => {
    const reduce =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(() => {
      if (paused.current) return
      setLines((prev) => [...prev.slice(-3), makeLine()])
    }, 1100)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {lines.map((l, i) => {
        const newest = i === lines.length - 1
        return (
          <div
            key={`${l.ts}-${i}`}
            className="t-out"
            style={{
              whiteSpace: 'nowrap',
              opacity: newest ? 1 : 0.5,
              transition: 'opacity 0.4s ease',
            }}
          >
            <span style={{ opacity: 0.55 }}>[{l.ts}]</span>{' '}
            <span style={{ color: TAG_COLOR[l.tag] }}>[{l.tag}]</span>{' '}
            <span style={{ fontWeight: 600 }}>{l.method}</span> {l.path}{' '}
            <span style={{ opacity: 0.5 }}>{l.status}</span>{' '}
            <span style={{ opacity: 0.55 }}>{l.ms}ms</span>
            {newest && <span className="cursor" />}
          </div>
        )
      })}
    </div>
  )
}

// --- cert roadmap row ---

const YELLOW = 'var(--t-yellow, #fbbf24)'
const MUTED = 'var(--t-muted, #7c6f8f)'

function CertRow({
  name,
  bar,
  label,
  color,
}: {
  name: string
  bar: string
  label: string
  color: string
}) {
  return (
    <div className="t-out" style={{ whiteSpace: 'pre' }}>
      {name.padEnd(6, ' ')}
      <span style={{ color }}>[{bar}]</span> <span style={{ color }}>{label}</span>
    </div>
  )
}

// --- full terminal (drop into hero-right, replacing the old .terminal) ---

export default function HeroTerminal() {
  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="t-dot t-red" />
        <span className="t-dot t-yellow" />
        <span className="t-dot t-green" />
        <span className="terminal-title">cesar@cesarsantos.dev — zsh</span>
      </div>
      <div className="terminal-body">
        <div>
          <span className="t-prompt">→</span> <span className="t-cmd">whoami</span>
        </div>
        <div className="t-out">César Santos · Software Engineer (Backend)</div>

        <div style={{ marginTop: 8 }}>
          <span className="t-prompt">→</span>{' '}
          <span className="t-cmd">cat stack.json</span>
        </div>
        <div>
          <span className="t-key">"backend"</span>
          <span className="t-comment">:</span>{' '}
          <span className="t-val">["Python", "FastAPI", "Django", "PostgreSQL"]</span>
        </div>

        <div style={{ marginTop: 8 }}>
          <span className="t-prompt">→</span>{' '}
          <span className="t-cmd">cat goals.txt</span>
        </div>
        <div className="t-out">
          <span style={{ color: 'var(--t-green, #34d399)' }}>→</span> Security Engineering
        </div>
        <div className="t-out">
          <span style={{ color: 'var(--t-green, #34d399)' }}>→</span> DevOps / SRE
        </div>

        <div style={{ marginTop: 8 }}>
          <span className="t-prompt">→</span>{' '}
          <span className="t-cmd">cert-path --status</span>
        </div>
        <div className="t-comment">// studying via LINUXtips guide</div>
        <CertRow name="CKAD" bar="▓░░░░░░░░░" label="next" color={YELLOW} />
        <CertRow name="CKA" bar="░░░░░░░░░░" label="planned" color={MUTED} />
        <CertRow name="KCNA" bar="░░░░░░░░░░" label="planned" color={MUTED} />
        <CertRow name="KCSA" bar="░░░░░░░░░░" label="planned" color={MUTED} />
        <CertRow name="CKS" bar="░░░░░░░░░░" label="planned" color={MUTED} />

        <div style={{ marginTop: 8 }}>
          <span className="t-prompt">→</span>{' '}
          <span className="t-cmd">echo "open to work"</span>
        </div>
        <div className="t-out">open to work</div>

        <div style={{ marginTop: 8 }}>
          <span className="t-prompt">→</span>{' '}
          <span className="t-cmd">tail -f /var/log/api.log</span>
        </div>
        <LogTail />
      </div>
    </div>
  )
}