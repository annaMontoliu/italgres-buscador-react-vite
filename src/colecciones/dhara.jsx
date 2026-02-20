// src/colecciones/dhara.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// DHARA WHITE (3)
import dharaWhite01 from "../assets/imagenes/dhara/dhara-white/dhara-white-01.jpg";
import dharaWhite02 from "../assets/imagenes/dhara/dhara-white/dhara-white-02.jpg";
import dharaWhite03 from "../assets/imagenes/dhara/dhara-white/dhara-white-03.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [
  dharaWhite01, // 0
  dharaWhite02, // 1
  dharaWhite03, // 2
];

export function Dhara({ onGoHome }) {
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
        <h1 className="titulo-coleccion">DHARA</h1>

        <ColeccionLayout infoUrl="/pdf/DHARA.pdf" />

        {/* DHARA WHITE */}
        <h3 className="color-title">DHARA WHITE</h3>
        <section className="gallery-grid">
          <img
            src={dharaWhite01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="DHARA WHITE 01"
          />
          <img
            src={dharaWhite02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="DHARA WHITE 02"
          />
          <img
            src={dharaWhite03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="DHARA WHITE 03"
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