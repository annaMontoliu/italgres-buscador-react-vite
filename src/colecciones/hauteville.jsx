import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// HAUTEVILLE CREAM (1)
import hautevilleCream01 from "../assets/imagenes/hauteville/hauteville-cream/hauteville-cream-01.jpg";

// HAUTEVILLE WHITE (2)
import hautevilleWhite01 from "../assets/imagenes/hauteville/hauteville-white/hauteville-white-01.jpg";
import hautevilleWhite02 from "../assets/imagenes/hauteville/hauteville-white/hauteville-white-02.jpg";

// =====================
// ARRAY GLOBAL MODAL
// Orden: CREAM → WHITE 1 → WHITE 2
// =====================
const images = [
  hautevilleCream01,   // 0
  hautevilleWhite01,   // 1
  hautevilleWhite02,   // 2
];

export function Hauteville({ onGoHome }) {
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
        <h1 className="titulo-coleccion">HAUTEVILLE</h1>

        <ColeccionLayout infoUrl="https://www.azuvi.com/wp-content/uploads/catalogos/azuvi/CAT%20HAUTEVILLE%202024_AZUVI.pdf?v2" />

        {/* HAUTEVILLE CREAM */}
        <h3 className="color-title">HAUTEVILLE CREAM</h3>
        <section className="gallery-grid">
          <img
            src={hautevilleCream01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="HAUTEVILLE CREAM 01"
          />
        </section>

        {/* HAUTEVILLE WHITE */}
        <h3 className="color-title">HAUTEVILLE WHITE</h3>
        <section className="gallery-grid">
          <img
            src={hautevilleWhite01}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="HAUTEVILLE WHITE 01"
          />
          <img
            src={hautevilleWhite02}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="HAUTEVILLE WHITE 02"
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