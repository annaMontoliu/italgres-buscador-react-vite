// src/colecciones/dot.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

// DOT - DECO GIACHIO (2 fotos)
import dotDecoGiachio01 from "../assets/imagenes/dot/dot-deco-giachio/dot-deco-giachio-01.jpg";
import dotDecoGiachio02 from "../assets/imagenes/dot/dot-deco-giachio/dot-deco-giachio-02.jpg";

// ORDEN EXACTO (modal)
const images = [
  dotDecoGiachio01, // 0
  dotDecoGiachio02, // 1
];

export function Dot({ onGoHome }) {
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
        <h1 className="titulo-coleccion">DOT</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.fioranese.it/wp-content/uploads/2018/09/FIORANESE-DOT-by-Andrea-Maffei-4.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color DOT DECO GIACHIO */}
        <h3 className="color-title">DOT DECO GIACHIO</h3>
        <section className="gallery-grid">
          <img
            src={dotDecoGiachio01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="DOT DECO GIACHIO 01"
          />
          <img
            src={dotDecoGiachio02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="DOT DECO GIACHIO 02"
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