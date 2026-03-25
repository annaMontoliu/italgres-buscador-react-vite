// src/colecciones/flax.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import flaxPearl1 from "../assets/imagenes/flax/flax-pearl/flax-pearl-01.jpg";
import flaxPearl2 from "../assets/imagenes/flax/flax-pearl/flax-pearl-02.jpg";
import flaxPearl3 from "../assets/imagenes/flax/flax-pearl/flax-pearl-03.jpg";

// ORDEN EXACTO COMO EN TU HTML ORIGINAL
const images = [
  flaxPearl1,
  flaxPearl2,
  flaxPearl3,
];

export function Flax({ onGoHome }) {
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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  return (
    <>
      {/* HEADER GLOBAL */}
      <Header onGoHome={onGoHome} />

      <main>
        {/* Título */}
        <h1 className="titulo-coleccion">FLAX</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/pdf/FLAX.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color PEARL */}
        <h3 className="color-title">FLAX PEARL</h3>
        <section className="gallery-grid">
          <img
            src={flaxPearl1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="FLAX PEARL 1"
          />
          <img
            src={flaxPearl2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="FLAX PEARL 2"
          />
          <img
            src={flaxPearl3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="FLAX PEARL 3"
          />
        </section>
      </main>

      {/* ---- MODAL REUTILIZABLE ---- */}
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