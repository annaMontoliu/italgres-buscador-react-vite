// src/colecciones/crisp.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import crispWhite1 from "../assets/imagenes/crisp/crisp-white/crisp-white-01.jpg";

import crispBeige1 from "../assets/imagenes/crisp/crisp-beige/crisp-beige-01.jpg";
import crispBeige2 from "../assets/imagenes/crisp/crisp-beige/crisp-beige-02.jpg";
import crispBeige3 from "../assets/imagenes/crisp/crisp-beige/crisp-beige-03.jpg";

import crispGraphite1 from "../assets/imagenes/crisp/crisp-graphite/crisp-graphite-01.jpg";
import crispGraphite2 from "../assets/imagenes/crisp/crisp-graphite/crisp-graphite-02.jpg";

// ORDEN EXACTO COMO EN TU HTML ORIGINAL
const images = [
  crispWhite1,

  crispBeige1,
  crispBeige2,
  crispBeige3,

  crispGraphite1,
  crispGraphite2,
];

export function Crisp({ onGoHome }) {
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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  return (
    <>
      {/* HEADER GLOBAL */}
      <Header onGoHome={onGoHome} />

      <main>
        {/* Título */}
        <h1 className="titulo-coleccion">CRISP</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/pdf/CRISP.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color WHITE */}
        <h3 className="color-title">CRISP WHITE</h3>
        <section className="gallery-grid">
          <img
            src={crispWhite1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="CRISP WHITE 1"
          />
        </section>

        {/* Color BEIGE */}
        <h3 className="color-title">CRISP BEIGE</h3>
        <section className="gallery-grid">
          <img
            src={crispBeige1}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="CRISP BEIGE 1"
          />
          <img
            src={crispBeige2}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="CRISP BEIGE 2"
          />
          <img
            src={crispBeige3}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="CRISP BEIGE 3"
          />
        </section>

        {/* Color GRAPHITE */}
        <h3 className="color-title">CRISP GRAPHITE</h3>
        <section className="gallery-grid">
          <img
            src={crispGraphite1}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="CRISP GRAPHITE 1"
          />
          <img
            src={crispGraphite2}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="CRISP GRAPHITE 2"
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