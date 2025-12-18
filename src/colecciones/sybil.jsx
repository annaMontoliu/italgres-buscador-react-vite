// src/colecciones/sybil.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS
import sybilWhite01 from "../assets/imagenes/sybil/sybil-white/sybil-white-01.jpg";

// ORDEN EXACTO
const images = [sybilWhite01];

export function Sybil({ onGoHome }) {
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
        {/* TÍTULO */}
        <h1 className="titulo-coleccion">SYBIL</h1>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.cerdomus.com/flex/FixedPages/Common/serveAllegato.php/L/EN/id/783" />

        {/* GALERÍA */}
        <h3 className="color-title">SYBIL WHITE</h3>
        <section className="gallery-grid">
          <img
            src={sybilWhite01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="SYBIL WHITE 01"
          />
        </section>
      </main>

      {/* MODAL */}
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
