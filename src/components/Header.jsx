"use client"
import { useEffect, useState } from "react"
import "./Header.css"

const Header = () => {
  const [open, setOpen] = useState(false)

  // Cerrar al cambiar ancho (evita quedar abierto al rotar)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  // Evitar scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [open])

  return (
    <header className="header" role="banner">
      <div className="container header-row">
        <a href="#portfolio" className="logo" aria-label="Go to Portfolio">
          GEORGINA SANCHEZ
        </a>

        {/* Desktop nav */}
        <nav className="nav" aria-label="Primary" data-desktop>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#about" className="nav-link">About Me</a>
          <a
            href="https://linkedin.com/in/sanchezgeorgina"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? "is-open" : ""}`}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          data-mobile
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`backdrop ${open ? "visible" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Mobile drawer */}
      <nav
        id="mobile-menu"
        className={`mobile-drawer ${open ? "open" : ""}`}
        aria-label="Mobile"
      >
        <a href="#portfolio" className="mobile-link" onClick={() => setOpen(false)}>
          Portfolio
        </a>
        <a href="#about" className="mobile-link" onClick={() => setOpen(false)}>
          About Me
        </a>
        <a
          href="https://linkedin.com/in/sanchezgeorgina"
          className="mobile-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Header
