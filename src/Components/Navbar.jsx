import { useState } from 'react'
import './Navbar.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Project', href: '#project' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen((prev) => !prev)
  const handleClose = () => setOpen(false)

  return (
    <header className="site-navbar">
      <div className="site-nav-inner">
        <a className="brand" href="#home" onClick={handleClose}>
          <span className="brand-mark">MA</span>
          <span className="brand-text">
            Muhammed Arshad
            <span className="brand-subtitle">Full-Stack Developer</span>
          </span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={handleToggle}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className={open ? 'bar bar-top open' : 'bar bar-top'} />
          <span className={open ? 'bar bar-mid open' : 'bar bar-mid'} />
          <span className={open ? 'bar bar-bot open' : 'bar bar-bot'} />
        </button>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={handleClose}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact" onClick={handleClose}>
          Let&apos;s Talk
        </a>
      </div>
    </header>
  )
}
