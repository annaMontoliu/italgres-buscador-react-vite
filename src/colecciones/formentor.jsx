// src/colecciones/formentor.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORT DE LA FOTO DESDE src/assets/imagenes/...
import formentorNaturalAntracita1 from "../assets/imagenes/formentor/formentor-natural-antracita/formentor-natural-antracita-01.jpg";

// ORDEN EXACTO
const images = [
  formentorNaturalAntracita1,
];

export function Formentor({ onGoHome }) {
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
        <h1 className="titulo-coleccion">FORMENTOR</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/pdf/FORMENTOR.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color NATURAL ANTRACITA */}
        <h3 className="color-title">FORMENTOR NATURAL ANTRACITA</h3>

        <section className="gallery-grid">
          <img
            src={formentorNaturalAntracita1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="FORMENTOR NATURAL ANTRACITA 1"
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