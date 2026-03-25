// src/colecciones/deco-art.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import decoArtEden1 from "../assets/imagenes/deco-art/deco-art-eden/deco-art-eden-01.jpg";
import decoArtGarden1 from "../assets/imagenes/deco-art/deco-art-garden/deco-art-garden-01.jpg";
import decoArtSavage1 from "../assets/imagenes/deco-art/deco-art-savage/deco-art-savage-01.jpg";

// ORDEN EXACTO COMO EN TU HTML ORIGINAL
const images = [
  decoArtEden1,
  decoArtGarden1,
  decoArtSavage1,
];

export function DecoArt({ onGoHome }) {
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
        <h1 className="titulo-coleccion">DECO ART</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/pdf/DECO-ART.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color EDEN */}
        <h3 className="color-title">DECO ART EDEN</h3>
        <section className="gallery-grid">
          <img
            src={decoArtEden1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="DECO ART EDEN 1"
          />
        </section>

        {/* Color GARDEN */}
        <h3 className="color-title">DECO ART GARDEN</h3>
        <section className="gallery-grid">
          <img
            src={decoArtGarden1}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="DECO ART GARDEN 1"
          />
        </section>

        {/* Color SAVAGE */}
        <h3 className="color-title">DECO ART SAVAGE</h3>
        <section className="gallery-grid">
          <img
            src={decoArtSavage1}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="DECO ART SAVAGE 1"
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