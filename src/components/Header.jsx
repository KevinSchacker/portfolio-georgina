import { useEffect, useState, useCallback } from "react";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [lockY, setLockY] = useState(0);

  // Bloqueo/desbloqueo de scroll del documento
  const lockScroll = useCallback(() => {
    const y = window.scrollY || window.pageYOffset || 0;
    setLockY(y);
    document.documentElement.classList.add("drawer-open");
    document.body.classList.add("drawer-open");
    document.body.style.top = `-${y}px`;       // fija el body en la posición actual
  }, []);

  const unlockScroll = useCallback(() => {
    document.documentElement.classList.remove("drawer-open");
    document.body.classList.remove("drawer-open");
    const y = lockY;
    document.body.style.top = "";              // libera el body
    window.scrollTo(0, y);                     // restaura la posición exacta
  }, [lockY]);

  const openMenu = () => {
    if (open) return;
    setOpen(true);
    lockScroll();
  };
  const closeMenu = () => {
    if (!open) return;
    setOpen(false);
    unlockScroll();
  };
  const toggleMenu = () => (open ? closeMenu() : openMenu());

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  // Cerrar si cambia el tamaño a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 769 && open) closeMenu();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open, closeMenu]);

  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="header-row">
          <a href="/" className="logo">GEORGINA SANCHEZ</a>

          <nav className="nav" data-desktop>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#about" className="nav-link">About Me</a>
            <a
              href="https://linkedin.com/in/sanchezgeorgina"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Contact
            </a>
          </nav>

          {/* Botón hamburguesa */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            className={`hamburger ${open ? "is-open" : ""}`}
            data-mobile
            onClick={toggleMenu}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`backdrop ${open ? "visible" : ""}`}
        onClick={closeMenu}
      />

      {/* Drawer */}
      <aside
        id="mobile-drawer"
        className={`mobile-drawer ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <a href="#portfolio" className="mobile-link" onClick={closeMenu}>
          Portfolio
        </a>
        <a href="#about" className="mobile-link" onClick={closeMenu}>
          About Me
        </a>
        <a
          href="https://linkedin.com/in/sanchezgeorgina"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-link"
          onClick={closeMenu}
        >
          Contact
        </a>
      </aside>
    </header>
  );
};

export default Header;
