"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import portfolioData from "../data/portfolio.json";
import ProjectModal from "./ProjectModal";
import "./Portfolio.css";

const normalizeSize = (v) => {
  const x = String(v || "M").toUpperCase();
  return x === "S" || x === "M" || x === "L" ? x : "M";
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-escala del área para mantener el grid dentro del viewport
  const viewportRef = useRef(null);
  const scaleRef = useRef(null);
  const [scale, setScale] = useState(1);

  // Ref del contenedor de columnas para el “relleno inteligente”
  const columnsRef = useRef(null);

  const recalcScale = () => {
    const vp = viewportRef.current;
    const sc = scaleRef.current;
    if (!vp || !sc) return;
    const availH = vp.clientHeight;
    const needH = sc.scrollHeight;
    const s = needH > 0 ? Math.min(1, availH / needH) : 1;
    setScale(Number.isFinite(s) ? s : 1);
  };

  /**
   * Relleno inteligente:
   * - Agrupa las cards por columna (offsetLeft)
   * - Calcula la columna más alta
   * - Si una columna queda más corta, estira la ÚLTIMA card lo necesario EXACTO
   * - Caso especial: si una columna tiene EXACTAMENTE 2 cards, siempre la completamos
   */
  const balanceColumns = () => {
    const root = columnsRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll(".portfolio-item"));
    if (!items.length) return;

    // Limpiar marcas previas
    items.forEach((it) => {
      it.classList.remove("tail-fill");
      it.style.removeProperty("--tail-extra");
    });

    // Agrupar por columna usando offsetLeft (layout de columns)
    const cols = new Map(); // left -> [items]
    items.forEach((it) => {
      const left = it.offsetLeft;
      if (!cols.has(left)) cols.set(left, []);
      cols.get(left).push(it);
    });

    // Altura final por columna
    let maxBottom = 0;
    const info = [];
    cols.forEach((list) => {
      const last = list[list.length - 1];
      const bottom = last.offsetTop + last.offsetHeight;
      info.push({ list, bottom });
      if (bottom > maxBottom) maxBottom = bottom;
    });

    const gap = parseFloat(getComputedStyle(root).getPropertyValue("column-gap")) || 16;
    const threshold = gap * 1.1; // tolerancia mínima

    // Ajustar columnas cortas
    info.forEach(({ list, bottom }) => {
      if (!list.length) return;

      const delta = maxBottom - bottom; // cuánto falta para empatar a la más alta
      const isTwoCards = list.length === 2;

      // Completamos si:
      // - la diferencia es visible (delta > threshold), o
      // - la columna tiene exactamente 2 cards (siempre se completa)
      if (delta > threshold || isTwoCards) {
        const last = list[list.length - 1];

        // Pequeño margen de seguridad para evitar “salto” por subpíxeles
        const extra = Math.max(delta, 0) + 0.5;

        last.classList.add("tail-fill");
        last.style.setProperty("--tail-extra", `${extra}px`);
      }
    });
  };

  useLayoutEffect(() => {
    recalcScale();
    const onResize = () => {
      recalcScale();
      balanceColumns();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    // Recalcular tras carga de imágenes / cambios de datos
    const t = setTimeout(() => {
      recalcScale();
      balanceColumns();
    }, 120);
    return () => clearTimeout(t);
  }, [portfolioData?.projects?.length, scale]);

  useEffect(() => {
    balanceColumns();
  }, [isModalOpen]);

  // Modal
  const open = (p) => { setSelectedProject(p); setIsModalOpen(true); };
  const close = () => { setIsModalOpen(false); setSelectedProject(null); };

  const scaleInverse = scale < 1 ? 1 / scale : 1;

  return (
    <section id="portfolio" className="portfolio">
      {/* encabezado acotado */}
      <div className="portfolio-wrapper">
  <header className="portfolio-header">
    <h1 className="portfolio-main-title">Portfolio</h1>
  </header>
</div>

      {/* área full-bleed para el mosaico (sin scroll) */}
      <div className="masonry-viewport" ref={viewportRef}>
        <div
          className="masonry-scale"
          ref={scaleRef}
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top center",
            "--scale-inverse": scaleInverse,
          }}
        >
          {/* Masonry por columnas (Pinterest-like) */}
          <div className="portfolio-columns" ref={columnsRef}>
            {(portfolioData?.projects || []).map((p, i) => {
              const size = normalizeSize(p.size);
              const featured = p.featured ? "featured" : "";
              return (
                <article
                  key={p.id ?? i}
                  className={`portfolio-item size-${size} ${featured}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver detalles del proyecto ${p.title}`}
                  onClick={() => open(p)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      open(p);
                    }
                  }}
                >
                  <div className="portfolio-card">
                    {/* alto controlado por ratio-box según S/M/L */}
                    <div className="ratio-box">
                      <img
                        src={p.mainImage || "/placeholder.svg?height=600&width=800&query=design"}
                        alt={p.title}
                        className="portfolio-image"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* solo título (visible al hover) */}
                    <div className="portfolio-overlay">
                      <h3 className="portfolio-title">{p.title}</h3>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={close} />
      )}
    </section>
  );
};

export default Portfolio;
