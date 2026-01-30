// src/colecciones/tivoli.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES (exacto según captura)
// =====================

// MULTICOLOR (2)
import tivoliMulticolor01 from "../assets/imagenes/tivoli/tivoli-multicolor/tivoli-multicolor-01.jpg";
import tivoliMulticolor02 from "../assets/imagenes/tivoli/tivoli-multicolor/tivoli-multicolor-02.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [tivoliMulticolor01, tivoliMulticolor02];

export function Tivoli({ onGoHome }) {
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
    setCurrentIndex((i) => (i + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">TIVOLI</h1>

        <ColeccionLayout infoUrl="/pdf/TIVOLI.pdf" />

        <h3 className="color-title">TIVOLI MULTICOLOR</h3>
        <section className="gallery-grid">
          {[tivoliMulticolor01, tivoliMulticolor02].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(i)}
              loading="lazy"
              alt={`TIVOLI MULTICOLOR ${i + 1}`}
            />
          ))}
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
