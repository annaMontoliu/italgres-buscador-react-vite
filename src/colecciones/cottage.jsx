// src/colecciones/cottage.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import cottageDark01 from "../assets/imagenes/cottage/cottage-dark/cottage-dark-01.jpg";

// ORDEN EXACTO
const images = [cottageDark01];

export function Cottage({ onGoHome }) {
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
        <h1 className="titulo-coleccion">COTTAGE</h1>

        <ColeccionLayout infoUrl="https://www.azuvi.com/wp-content/uploads/catalogos/azuvi/CAT%20COTTAGE%202024_AZUVI.pdf" />

        {/* Color COTTAGE DARK */}
        <h3 className="color-title">COTTAGE DARK</h3>
        <section className="gallery-grid">
          <img
            src={cottageDark01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="COTTAGE DARK 01"
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