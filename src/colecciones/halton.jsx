// src/colecciones/halton.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// HALTON WHITE (1)
import haltonWhite01 from "../assets/imagenes/halton/halton-white/halton-white-01.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [
  haltonWhite01, // 0
];

export function Halton({ onGoHome }) {
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
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">HALTON</h1>

        <ColeccionLayout infoUrl="/pdf/HALTON.pdf" />

        {/* HALTON WHITE */}
        <h3 className="color-title">HALTON WHITE</h3>
        <section className="gallery-grid">
          <img
            src={haltonWhite01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="HALTON WHITE 01"
          />
        </section>
      </main>

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