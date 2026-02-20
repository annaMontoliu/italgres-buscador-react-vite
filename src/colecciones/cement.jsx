import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// CEMENT SAND (1)
import cementSand01 from "../assets/imagenes/cement/cement-sand/cement-sand-01.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [
  cementSand01, // 0
];

export function Cement({ onGoHome }) {
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
        <h1 className="titulo-coleccion">CEMENT</h1>

        <ColeccionLayout infoUrl="https://www.azuvi.com/wp-content/uploads/catalogos/azuvi/CAT%20CEMENT%202024_AZUVI.pdf" />

        {/* CEMENT SAND */}
        <h3 className="color-title">CEMENT SAND</h3>
        <section className="gallery-grid">
          <img
            src={cementSand01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="CEMENT SAND 01"
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