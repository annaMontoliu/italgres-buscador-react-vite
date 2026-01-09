// src/colecciones/portland.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
// TALC (2)
import portlandTalc01 from "../assets/imagenes/portland/portland-talc/portland-talc-01.jpg";
import portlandTalc02 from "../assets/imagenes/portland/portland-talc/portland-talc-02.jpg";

// ASH (4)
import portlandAsh01 from "../assets/imagenes/portland/portland-ash/portland-ash-01.jpg";
import portlandAsh02 from "../assets/imagenes/portland/portland-ash/portland-ash-02.jpg";
import portlandAsh03 from "../assets/imagenes/portland/portland-ash/portland-ash-03.jpg";
import portlandAsh04 from "../assets/imagenes/portland/portland-ash/portland-ash-04.jpg";

// ORDEN EXACTO (modal)
const images = [
  // TALC
  portlandTalc01,
  portlandTalc02,

  // ASH
  portlandAsh01,
  portlandAsh02,
  portlandAsh03,
  portlandAsh04,
];

export function Portland({ onGoHome }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function openModal(index) {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  }

  function nextImage() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }

  return (
    <>
      {/* HEADER GLOBAL */}
      <Header onGoHome={onGoHome} />

      <main>
        {/* Título */}
        <h1 className="titulo-coleccion">PORTLAND</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.emilgroup.it/emil/prodotti/documenticollezioni_emil/PortlandStone%20Catalogo%202025.05%20Web.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color TALC */}
        <h3 className="color-title">PORTLAND TALC</h3>
        <section className="gallery-grid">
          <img
            src={portlandTalc01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="PORTLAND TALC 1"
          />
          <img
            src={portlandTalc02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="PORTLAND TALC 2"
          />
        </section>

        {/* Color ASH */}
        <h3 className="color-title">PORTLAND ASH</h3>
        <section className="gallery-grid">
          <img
            src={portlandAsh01}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="PORTLAND ASH 1"
          />
          <img
            src={portlandAsh02}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="PORTLAND ASH 2"
          />
          <img
            src={portlandAsh03}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="PORTLAND ASH 3"
          />
          <img
            src={portlandAsh04}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="PORTLAND ASH 4"
          />
        </section>
      </main>

      {/* ---- MODAL REUTILIZABLE ---- */}
      <ImageModal
        images={images}
        isOpen={isModalOpen}
        currentIndex={currentIndex}
        onClose={closeModal}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </>
  );
}
