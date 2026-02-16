// src/colecciones/baikal.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import baikalWhite1 from "../assets/imagenes/baikal/baikal-white/baikal-white-01.jpg";
import baikalWhite2 from "../assets/imagenes/baikal/baikal-white/baikal-white-02.jpg";

// ORDEN EXACTO (solo WHITE)
const images = [baikalWhite1, baikalWhite2];

export function Baikal({ onGoHome }) {
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
        <h1 className="titulo-coleccion">BAIKAL</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/pdf/BAIKAL.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color WHITE */}
        <h3 className="color-title">BAIKAL WHITE</h3>
        <section className="gallery-grid">
          <img
            src={baikalWhite1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="BAIKAL WHITE 1"
          />
          <img
            src={baikalWhite2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="BAIKAL WHITE 2"
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
