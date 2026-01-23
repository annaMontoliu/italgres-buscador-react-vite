// src/colecciones/nordic.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// NORDIC WHITE (1)
import nordicWhite01 from "../assets/imagenes/nordic/nordic-white/nordic-white-01.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [nordicWhite01];

export function Nordic({ onGoHome }) {
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
        <h1 className="titulo-coleccion">NORDIC</h1>

        <ColeccionLayout infoUrl="https://saxolia.it/Nordic-catalogue.pdf" />

        <h3 className="color-title">NORDIC WHITE</h3>
        <section className="gallery-grid">
          <img
            src={nordicWhite01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="NORDIC WHITE 01"
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
