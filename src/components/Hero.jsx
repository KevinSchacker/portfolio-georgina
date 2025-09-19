import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-main-text">
            <h1 className="hero-portfolio-text">
              Portfolio
            </h1>
            <div className="hero-identity">
              <h2 className="hero-name">Georgina Sanchez</h2>
              <p className="hero-profession">DISEÑADORA GRÁFICA & UX/UI</p>
              <p className="footer-quote">
              "Designing clarity in a world full of noise. Can I join you on your next project?"
            </p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="circles-composition">
            <div className="design-circle circle-1">
              <img src="/modern-logo-design-colorful.jpg" alt="Logo Design" />
            </div>
            <div className="design-circle circle-2">
              <img src="/mobile-app-ui-design-purple.jpg" alt="Mobile UI" />
            </div>
            <div className="design-circle circle-3">
              <img src="/brand-identity-design-mockup.jpg" alt="Brand Identity" />
            </div>
            <div className="design-circle circle-4">
              <img src="/social-media-post-design-template.jpg" alt="Social Media" />
            </div>
            <div className="design-circle circle-5">
              <img src="/web-design-landing-page.jpg" alt="Web Design" />
            </div>
            <div className="design-circle circle-6">
              <img src="/packaging-design-modern.jpg" alt="Packaging" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
