import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-text">© {new Date().getFullYear()} <span className="footer-accent">César Santos</span> · cesarsantos.dev</span>
      <span className="footer-text"><span className="footer-accent">~/</span> built with React + TypeScript + Vite</span>
    </footer>
  )
}
