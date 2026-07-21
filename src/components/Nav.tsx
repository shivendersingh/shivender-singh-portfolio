import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Nav.css'

const navLinks = [
  { href: '#overview',    label: 'Overview' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#experience',  label: 'Experience' },
  { href: '#stack',       label: 'Stack' },
  { href: '#contact',     label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`} role="banner">
      <div className="nav__inner container">
        <a href="#overview" className="nav__logo" aria-label="Shivender Singh — back to top">
          <span className="nav__logo-name">SS</span>
          <span className="nav__logo-divider" aria-hidden="true" />
          <span className="nav__logo-role mono">SDET</span>
        </a>

        <nav className="nav__links" aria-label="Main navigation">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`nav__mobile${open ? ' nav__mobile--open' : ''}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav__mobile-link" onClick={close}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
