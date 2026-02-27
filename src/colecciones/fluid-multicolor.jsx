// src/colecciones/fluid-multicolor.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// FLUID MULTICOLOR (3)
import fluidMulticolor01 from "../assets/imagenes/fluid-multicolor/fluid-multicolor-01.jpg";
import fluidMulticolor02 from "../assets/imagenes/fluid-multicolor/fluid-multicolor-02.jpg";
import fluidMulticolor03 from "../assets/imagenes/fluid-multicolor/fluid-multicolor-03.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [
  fluidMulticolor01, // 0
  fluidMulticolor02, // 1
  fluidMulticolor03, // 2
];

export function FluidMulticolor({ onGoHome }) {
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
        <h1 className="titulo-coleccion">FLUID MULTICOLOR</h1>

        <ColeccionLayout infoUrl="/pdf/FLUID-MULTICOLOR.pdf" />

        <h3 className="color-title">FLUID MULTICOLOR</h3>
        <section className="gallery-grid">
          <img
            src={fluidMulticolor01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="FLUID MULTICOLOR 01"
          />
          <img
            src={fluidMulticolor02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="FLUID MULTICOLOR 02"
          />
          <img
            src={fluidMulticolor03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="FLUID MULTICOLOR 03"
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