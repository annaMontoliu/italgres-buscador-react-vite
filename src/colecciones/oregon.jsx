// src/colecciones/oregon.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// OREGON IVORY (1)
import oregonIvory01 from "../assets/imagenes/oregon/oregon-ivory/oregon-ivory-01.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [
  oregonIvory01, // 0
];

export function Oregon({ onGoHome }) {
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
        <h1 className="titulo-coleccion">OREGON</h1>

        <ColeccionLayout infoUrl="/pdf/OREGON.pdf" />

        {/* OREGON IVORY */}
        <h3 className="color-title">OREGON IVORY</h3>
        <section className="gallery-grid">
          <img
            src={oregonIvory01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="OREGON IVORY 01"
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