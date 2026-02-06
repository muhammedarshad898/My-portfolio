import './Footer.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#project' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/muhammedarshad898?tab=repositories',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammed-arshad-845155338/',
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>Muhammed Arshad</h3>
          <p>MERN + Next.js full-stack developer.</p>
        </div>

        <div className="footer-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-socials">
          {socials.map((social) => (
            <a key={social.label} href={social.href}>
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Muhammed Arshad. All rights reserved.</span>
        <span>Built with React + Vite.</span>
      </div>
    </footer>
  )
}
