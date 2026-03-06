// src/colecciones/oxo.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import oxoGigaGris01 from "../assets/imagenes/oxo/oxo-giga-gris/oxo-giga-gris-01.jpg";

// ORDEN EXACTO
const images = [oxoGigaGris01];

export function Oxo({ onGoHome }) {
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
        <h1 className="titulo-coleccion">OXO</h1>

        <ColeccionLayout infoUrl="/pdf/OXO.pdf" />

        {/* Color OXO GIGA GRIS */}
        <h3 className="color-title">OXO GIGA GRIS</h3>
        <section className="gallery-grid">
          <img
            src={oxoGigaGris01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="OXO GIGA GRIS 01"
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