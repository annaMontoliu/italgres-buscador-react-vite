// src/colecciones/blanco.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import blancoDunas01 from "../assets/imagenes/blanco/blanco-dunas/blanco-dunas-01.jpg";

// ORDEN EXACTO
const images = [
  blancoDunas01
];

export function Blanco({ onGoHome }) {
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
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">BLANCO</h1>

        <ColeccionLayout infoUrl="https://www.halconceramicas.com/en/pdf_products/722" />

        {/* Color DUNAS */}
        <h3 className="color-title">BLANCO DUNAS</h3>
        <section className="gallery-grid">
          <img
            src={blancoDunas01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="BLANCO DUNAS 01"
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