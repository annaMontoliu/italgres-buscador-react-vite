// src/colecciones/glim-gemme.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// GLIM GEMME BIANCO (2)
import glimGemmeBianco01 from "../assets/imagenes/glim-gemme/glim-gemme-bianco/glim-gemme-bianco-01.jpg";
import glimGemmeBianco02 from "../assets/imagenes/glim-gemme/glim-gemme-bianco/glim-gemme-bianco-02.jpg";

// GLIM GEMME AZZURRO (4)
import glimGemmeAzzurro01 from "../assets/imagenes/glim-gemme/glim-gemme-azzurro/glim-gemme-azzurro-01.jpg";
import glimGemmeAzzurro02 from "../assets/imagenes/glim-gemme/glim-gemme-azzurro/glim-gemme-azzurro-02.jpg";
import glimGemmeAzzurro03 from "../assets/imagenes/glim-gemme/glim-gemme-azzurro/glim-gemme-azzurro-03.jpg";
import glimGemmeAzzurro04 from "../assets/imagenes/glim-gemme/glim-gemme-azzurro/glim-gemme-azzurro-04.jpg";

// GLIM GEMME SALVIA (1)
import glimGemmeSalvia01 from "../assets/imagenes/glim-gemme/glim-gemme-salvia/glim-gemme-salvia-01.jpg";

// =====================
// ARRAY GLOBAL MODAL
// ORDEN EXACTO
// =====================
const images = [
  // BIANCO
  glimGemmeBianco01,
  glimGemmeBianco02,

  // AZZURRO
  glimGemmeAzzurro01,
  glimGemmeAzzurro02,
  glimGemmeAzzurro03,
  glimGemmeAzzurro04,

  // SALVIA
  glimGemmeSalvia01,
];

export function GlimGemme({ onGoHome }) {
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
        {/* TÍTULO */}
        <h1 className="titulo-coleccion">GLIM GEMME</h1>

        {/* BLOQUE FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.fapceramiche.com/en/download/view-document/catalogue-glim/" />

        {/* ---- GALERÍA ---- */}

        {/* BIANCO */}
        <h3 className="color-title">GLIM GEMME BIANCO</h3>
        <section className="gallery-grid">
          <img
            src={glimGemmeBianco01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="GLIM GEMME BIANCO 01"
          />
          <img
            src={glimGemmeBianco02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="GLIM GEMME BIANCO 02"
          />
        </section>

        {/* AZZURRO */}
        <h3 className="color-title">GLIM GEMME AZZURRO</h3>
        <section className="gallery-grid">
          <img
            src={glimGemmeAzzurro01}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="GLIM GEMME AZZURRO 01"
          />
          <img
            src={glimGemmeAzzurro02}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="GLIM GEMME AZZURRO 02"
          />
          <img
            src={glimGemmeAzzurro03}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="GLIM GEMME AZZURRO 03"
          />
          <img
            src={glimGemmeAzzurro04}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="GLIM GEMME AZZURRO 04"
          />
        </section>

        {/* SALVIA */}
        <h3 className="color-title">GLIM GEMME SALVIA</h3>
        <section className="gallery-grid">
          <img
            src={glimGemmeSalvia01}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="GLIM GEMME SALVIA 01"
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
