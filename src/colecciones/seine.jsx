// src/colecciones/seine.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES (exacto según captura)
// =====================

// BLANCO (2)
import seineBlanco01 from "../assets/imagenes/seine/seine-blanco/seine-blanco-01.jpg";
import seineBlanco02 from "../assets/imagenes/seine/seine-blanco/seine-blanco-02.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [seineBlanco01, seineBlanco02];

export function Seine({ onGoHome }) {
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
        <h1 className="titulo-coleccion">SEINE</h1>

        <ColeccionLayout infoUrl="/pdf/SEINE.pdf" />

        <h3 className="color-title">SEINE BLANCO</h3>
        <section className="gallery-grid">
          {[seineBlanco01, seineBlanco02].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(i)}
              loading="lazy"
              alt={`SEINE BLANCO ${i + 1}`}
            />
          ))}
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
