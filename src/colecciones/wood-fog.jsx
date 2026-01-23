// src/colecciones/wood-fog.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// WOOD FOG (5)
import woodFog01 from "../assets/imagenes/wood-fog/wood-fog-01.jpg";
import woodFog02 from "../assets/imagenes/wood-fog/wood-fog-02.jpg";
import woodFog03 from "../assets/imagenes/wood-fog/wood-fog-03.jpg";
import woodFog04 from "../assets/imagenes/wood-fog/wood-fog-04.jpg";
import woodFog05 from "../assets/imagenes/wood-fog/wood-fog-05.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [
  woodFog01,
  woodFog02,
  woodFog03,
  woodFog04,
  woodFog05,
];

export function WoodFog({ onGoHome }) {
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
        {/* TÍTULO */}
        <h1 className="titulo-coleccion">WOOD FOG</h1>

        {/* BLOQUE FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.fapceramiche.com/media/products/documents/collection/Ylico_2025.pdf" />

        {/* ---- GALERÍA ---- */}
        <h3 className="color-title">WOOD FOG</h3>
        <section className="gallery-grid">
          <img src={woodFog01} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="WOOD FOG 01" />
          <img src={woodFog02} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="WOOD FOG 02" />
          <img src={woodFog03} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="WOOD FOG 03" />
          <img src={woodFog04} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="WOOD FOG 04" />
          <img src={woodFog05} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="WOOD FOG 05" />
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
