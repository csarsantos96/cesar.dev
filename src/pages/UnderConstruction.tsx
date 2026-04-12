

export default function UnderConstruction() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'JetBrains Mono, monospace',
      background: '#080808',
      color: '#f5f5f5',
      gap: '1.5rem',
    }}>
      <div style={{ fontSize: 11, color: '#4a4a4a', letterSpacing: '0.1em' }}>// status</div>
      <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
        Em <span style={{ color: '#ffffff' }}>Construção</span>
      </h1>
      <p style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: '#888', letterSpacing: '0.05em' }}>
        &gt; site em desenvolvimento. volte em breve.
      </p>
      <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
      </div>
    </div>
  )
}