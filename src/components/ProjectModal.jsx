"use client";

import { useEffect, useState, useCallback } from "react";
import "./ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  // --- Lightbox state ---
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Abre lightbox en la imagen clickeada
  const openLightbox = useCallback((idx) => {
    setCurrentIndex(idx);
    setIsLightboxOpen(true);
  }, []);

  // Cierra lightbox
  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  // Siguiente / Anterior (con wrap)
  const nextImg = useCallback(() => {
    if (!project?.images?.length) return;
    setCurrentIndex((i) => (i + 1) % project.images.length);
  }, [project?.images]);

  const prevImg = useCallback(() => {
    if (!project?.images?.length) return;
    setCurrentIndex((i) => (i - 1 + project.images.length) % project.images.length);
  }, [project?.images]);

  // Cerrar modal con Escape (si está el lightbox, primero cierra el lightbox)
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (isLightboxOpen) {
          closeLightbox();
        } else {
          onClose();
        }
      }
      // Navegar con flechas en lightbox
      if (isLightboxOpen && (e.key === "ArrowRight" || e.key === "Right")) nextImg();
      if (isLightboxOpen && (e.key === "ArrowLeft" || e.key === "Left")) prevImg();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isLightboxOpen, closeLightbox, nextImg, prevImg, onClose]);

  // Evita que el scroll de la página interfiera cuando el lightbox está abierto
  useEffect(() => {
    if (isLightboxOpen) {
      const original = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = original;
      };
    }
  }, [isLightboxOpen]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
                <button
                  type="button"
                  key={index}
                  className="image-container image-button"
                  onClick={() => openLightbox(index)}
                  aria-label={`Open image ${index + 1}`}
                >
                  <img src={image || "/placeholder.svg"} alt={`${project.title} - Imagen ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close image">
              ✕
            </button>

            <button className="lightbox-prev" onClick={prevImg} aria-label="Previous image">‹</button>

            <img
              className="lightbox-img"
              src={project.images[currentIndex]}
              alt={`${project.title} - Imagen ${currentIndex + 1}`}
            />

            <button className="lightbox-next" onClick={nextImg} aria-label="Next image">›</button>

            <div className="lightbox-counter">
              {currentIndex + 1} / {project.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
