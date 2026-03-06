// src/colecciones/surface.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import surfaceArena01 from "../assets/imagenes/surface/surface-arena/surface-arena-01.jpg";

// ORDEN EXACTO
const images = [surfaceArena01];

export function Surface({ onGoHome }) {
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
        <h1 className="titulo-coleccion">SURFACE</h1>

        <ColeccionLayout infoUrl="https://www.grespania.com/en/pdf-collection/1" />

        {/* Color ARENA */}
        <h3 className="color-title">SURFACE ARENA</h3>
        <section className="gallery-grid">
          <img
            src={surfaceArena01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="SURFACE ARENA 01"
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