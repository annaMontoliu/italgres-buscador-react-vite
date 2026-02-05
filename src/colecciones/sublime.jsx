// src/colecciones/sublime.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMÁGENES SUBLIME ICEBERG (4)
import sublimeIceberg1 from "../assets/imagenes/sublime/sublime-iceberg/sublime-iceberg-01.jpg";
import sublimeIceberg2 from "../assets/imagenes/sublime/sublime-iceberg/sublime-iceberg-02.jpg";
import sublimeIceberg3 from "../assets/imagenes/sublime/sublime-iceberg/sublime-iceberg-03.jpg";
import sublimeIceberg4 from "../assets/imagenes/sublime/sublime-iceberg/sublime-iceberg-04.jpg";

// IMÁGENES SUBLIME THUNDER (3)
import sublimeThunder1 from "../assets/imagenes/sublime/sublime-thunder/sublime-thunder-01.jpg";
import sublimeThunder2 from "../assets/imagenes/sublime/sublime-thunder/sublime-thunder-02.jpg";
import sublimeThunder3 from "../assets/imagenes/sublime/sublime-thunder/sublime-thunder-03.jpg";

// ARRAY GLOBAL PARA EL MODAL
// Orden: ICEBERG (4) → THUNDER (3)
const images = [
  // ICEBERG
  sublimeIceberg1,
  sublimeIceberg2,
  sublimeIceberg3,
  sublimeIceberg4,

  // THUNDER
  sublimeThunder1,
  sublimeThunder2,
  sublimeThunder3,
];

export function Sublime({ onGoHome }) {
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
        {/* Título colección */}
        <h1 className="titulo-coleccion">SUBLIME</h1>

        {/* FINISHES & FORMATS (PDF en public/pdf) */}
        <ColeccionLayout infoUrl="/pdf/SUBLIME.pdf" />

        {/* ---------- GALERÍA ---------- */}

        {/* SUBLIME ICEBERG */}
        <h3 className="color-title">SUBLIME ICEBERG</h3>
        <section className="gallery-grid">
          <img
            src={sublimeIceberg1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="SUBLIME ICEBERG 1"
          />
          <img
            src={sublimeIceberg2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="SUBLIME ICEBERG 2"
          />
          <img
            src={sublimeIceberg3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="SUBLIME ICEBERG 3"
          />
          <img
            src={sublimeIceberg4}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="SUBLIME ICEBERG 4"
          />
        </section>

        {/* SUBLIME THUNDER */}
        <h3 className="color-title">SUBLIME THUNDER</h3>
        <section className="gallery-grid">
          <img
            src={sublimeThunder1}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="SUBLIME THUNDER 1"
          />
          <img
            src={sublimeThunder2}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="SUBLIME THUNDER 2"
          />
          <img
            src={sublimeThunder3}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="SUBLIME THUNDER 3"
          />
        </section>
      </main>

      {/* MODAL REUTILIZABLE */}
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
