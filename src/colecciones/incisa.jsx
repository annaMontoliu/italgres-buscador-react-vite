// src/colecciones/incisa.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// RUTAS SEGÚN CAPTURA:
// /src/assets/imagenes/incisa/incisa-arena/
// /src/assets/imagenes/incisa/incisa-aurea/
// =====================

// INCISA ARENA (2)
import incisaArena01 from "../assets/imagenes/incisa/incisa-arena/incisa-arena-01.jpg";
import incisaArena02 from "../assets/imagenes/incisa/incisa-arena/incisa-arena-02.jpg";

// INCISA AUREA (1)
import incisaAurea01 from "../assets/imagenes/incisa/incisa-aurea/incisa-aurea-01.jpg";

// ORDEN EXACTO (modal)
const images = [
  // ARENA
  incisaArena01, // 0
  incisaArena02, // 1

  // AUREA
  incisaAurea01, // 2
];

export function Incisa({ onGoHome }) {
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
        <h1 className="titulo-coleccion">INCISA</h1>

        <ColeccionLayout infoUrl="https://www.coem.it/wp-content/uploads/2025/11/COEM-Incisa-2025.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* INCISA ARENA */}
        <h3 className="color-title">INCISA ARENA</h3>
        <section className="gallery-grid">
          <img
            src={incisaArena01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="INCISA ARENA 01"
          />
          <img
            src={incisaArena02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="INCISA ARENA 02"
          />
        </section>

        {/* INCISA AUREA */}
        <h3 className="color-title">INCISA AUREA</h3>
        <section className="gallery-grid">
          <img
            src={incisaAurea01}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="INCISA AUREA 01"
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