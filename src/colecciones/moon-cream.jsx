// src/colecciones/moon-cream.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

import moonCreamBeige1 from "../assets/imagenes/moon-cream/moon-cream-beige/moon-cream-beige-01.jpg";
import moonCreamBeige2 from "../assets/imagenes/moon-cream/moon-cream-beige/moon-cream-beige-02.jpg";
import moonCreamBeige3 from "../assets/imagenes/moon-cream/moon-cream-beige/moon-cream-beige-03.jpg";

// ORDEN EXACTO
const images = [moonCreamBeige1, moonCreamBeige2, moonCreamBeige3];

export function MoonCream({ onGoHome }) {
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
      {/* HEADER GLOBAL */}
      <Header onGoHome={onGoHome} />

      <main>
        {/* Título */}
        <h1 className="titulo-coleccion">MOON CREAM</h1>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.lafabbrica.it/wp-content/uploads/2025/11/LF-AVA_Moon-Cream_Catalog.pdf" />

        {/* ---- GALERÍA ---- */}

        <h3 className="color-title">MOON CREAM BEIGE</h3>
        <section className="gallery-grid">
          <img
            src={moonCreamBeige1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="MOON CREAM BEIGE 1"
          />
          <img
            src={moonCreamBeige2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="MOON CREAM BEIGE 2"
          />
          <img
            src={moonCreamBeige3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="MOON CREAM BEIGE 3"
          />
        </section>
      </main>

      {/* MODAL REUTILIZABLE */}
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
