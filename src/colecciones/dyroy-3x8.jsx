// src/colecciones/dyroy-3x8.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

import dyroy1 from "../assets/imagenes/dyroy/dyroy-3x8/dyroy-3x8-1.jpg";
import dyroy2 from "../assets/imagenes/dyroy/dyroy-3x8/dyroy-3x8-2.jpg";
import dyroy3 from "../assets/imagenes/dyroy/dyroy-3x8/dyroy-3x8-3.jpg";
import dyroy4 from "../assets/imagenes/dyroy/dyroy-3x8/dyroy-3x8-4.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [
  dyroy1, // 0
  dyroy2, // 1
  dyroy3, // 2
  dyroy4, // 3
];

export function Dyroy3x8({ onGoHome }) {
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
        <h1 className="titulo-coleccion">DYROY 3X8</h1>

        <ColeccionLayout infoUrl="/pdf/DYROY.pdf" />

        {/* DYROY */}
        <section className="gallery-grid">
          <img
            src={dyroy1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="DYROY 3X8 01"
          />
          <img
            src={dyroy2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="DYROY 3X8 02"
          />
          <img
            src={dyroy3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="DYROY 3X8 03"
          />
          <img
            src={dyroy4}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="DYROY 3X8 04"
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