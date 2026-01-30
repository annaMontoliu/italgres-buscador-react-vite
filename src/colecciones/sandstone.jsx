// src/colecciones/sandstone.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES (exacto según captura)
// =====================

// WHITE (1)
import sandstoneWhite01 from "../assets/imagenes/sandstone/sandstone-white/sandstone-white-01.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [sandstoneWhite01];

export function Sandstone({ onGoHome }) {
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
        <h1 className="titulo-coleccion">SANDSTONE</h1>

        <ColeccionLayout infoUrl="/pdf/SANDSTONE.pdf" />

        <h3 className="color-title">SANDSTONE WHITE</h3>
        <section className="gallery-grid">
          <img
            src={sandstoneWhite01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="SANDSTONE WHITE 01"
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
