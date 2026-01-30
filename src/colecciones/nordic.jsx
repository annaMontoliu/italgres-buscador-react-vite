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

// NORDIC SILVER (4)
import nordicSilver01 from "../assets/imagenes/nordic/nordic-silver/nordic-silver-01.jpg";
import nordicSilver02 from "../assets/imagenes/nordic/nordic-silver/nordic-silver-02.jpg";
import nordicSilver03 from "../assets/imagenes/nordic/nordic-silver/nordic-silver-03.jpg";
import nordicSilver04 from "../assets/imagenes/nordic/nordic-silver/nordic-silver-04.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [
  // WHITE
  nordicWhite01,

  // SILVER
  nordicSilver01,
  nordicSilver02,
  nordicSilver03,
  nordicSilver04,
];

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

        {/* NORDIC WHITE */}
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

        {/* NORDIC SILVER */}
        <h3 className="color-title">NORDIC SILVER</h3>
        <section className="gallery-grid">
          <img
            src={nordicSilver01}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="NORDIC SILVER 01"
          />
          <img
            src={nordicSilver02}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="NORDIC SILVER 02"
          />
          <img
            src={nordicSilver03}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="NORDIC SILVER 03"
          />
          <img
            src={nordicSilver04}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="NORDIC SILVER 04"
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
