"use client";

import { useEffect } from "react";
import "./ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{project.title}</h2>
          <div className="modal-meta">
            <span className="modal-category">{project.category}</span>
            <span className="modal-year">{project.year}</span>
            <span className="modal-client">{project.client}</span>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-description">
            <p>{project.description}</p>
          </div>

          <div className="modal-tools">
            <h4>Herramientas utilizadas:</h4>
            <div className="tools-list">
              {project.tools.map((tool, index) => (
                <span key={index} className="tool-tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-images">
            <div className="images-grid">
              {project.images.map((image, index) => (
                <div key={index} className="image-container">
                  <img src={image || "/placeholder.svg"} alt={`${project.title} - Imagen ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
