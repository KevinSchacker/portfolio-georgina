import "./AboutMe.css"

const AboutMe = () => {
  const skills = [
    "Brand Identity",
    "Digital Marketing",
    "Social Media Content",
    "UX Research",
    "UI Design",
    "UX Design",
    "Prototyping",
    "Editorial Design",
    "Project Management",
    "Interface Design",
    "Community Management",
    "Agile Methodologies",
  ]

  const tools = [
    {
      name: "Adobe Illustrator",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    },
    {
      name: "Adobe Photoshop",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    },
    { name: "Adobe InDesign", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    {
      name: "Adobe After Effects",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",
    },
    { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  ]

  const education = [
    {
      degree: "Bachelor's Degree",
      field: "Graphic Design",
      institution: "Universidad Nacional de Misiones (UNAM)",
      year: "2018",
    },
    {
      degree: "Advanced Specialization",
      field: "Community Manager",
      institution: "Escuela de Negocios Europea de Barcelona",
      year: "2017",
    },
    {
      degree: "Teaching Degree in Technical and Professional Education",
      field: "IPET 108",
      year: "2020",
    },
  ]

  const certifications = [
    "UX/UI Design - CoderHouse | 2024",
    "Fundamentals of Artificial Intelligence - CoderHouse | 2024",
    "Digital Marketing - Digital Ad Certificate | 2024",
    "E-commerce and Commercial Management - Santander Open Academy | 2024",
    "Digital Transformation - Santander Open Academy | 2024",
  ]

  return (
    <section id="about" className="about-me">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">ABOUT ME</h2>
            <div className="about-description">
              <p>
                I'm a graphic designer with experience in UX/UI design, digital marketing, and artificial intelligence,
                which allows me to deliver user-centered visual solutions and enhance the digital experience of brands.
              </p>
              <p>
                I'm known for my adaptability and commitment, ensuring effective results and on-time delivery. My goal
                is to continue growing professionally in an environment that values both user-centered design and goal
                achievement.
              </p>
            </div>

            <div className="contact-info">
              <h3>Contacto</h3>
              <div className="contact-links">
                <a href="mailto:sanchezgeorgina@gmail.com" className="contact-link">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.887.732-1.636 1.636-1.636h.818L12 10.09l9.546-6.269h.818c.904 0 1.636.749 1.636 1.636z" />
                  </svg>
                  sanchezgeorgina@gmail.com
                </a>
                <a
                  href="https://instagram.com/geografica"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.209.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @geografica
                </a>
                <a
                  href="https://linkedin.com/in/sanchezgeorgina"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  sanchezgeorgina
                </a>
              </div>
            </div>
          </div>

          <div className="about-details">
            <div className="skills-section">
              <h3>Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="tools-section">
              <h3>Tools</h3>
              <div className="tools-grid">
                {tools.map((tool, index) => (
                  <div key={index} className="tool-item">
                    <img src={tool.logo || "/placeholder.svg"} alt={tool.name} className="tool-logo" />
                    <span className="tool-name">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="education-section">
              <h3>Education</h3>
              <div className="education-list">
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <div className="education-degree">{edu.degree}</div>
                    <div className="education-field">{edu.field}</div>
                    <div className="education-institution">{edu.institution}</div>
                    <div className="education-year">{edu.year}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="certifications-section">
              <h3>Certifications</h3>
              <div className="certifications-list">
                {certifications.map((cert, index) => (
                  <div key={index} className="certification-item">
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
