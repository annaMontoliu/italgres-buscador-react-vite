// src/colecciones/aeterna.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

// AETERNA BIANCO (6 fotos)
import aeternaBianco01 from "../assets/imagenes/aeterna/aeterna-bianco/aeterna-bianco-01.jpg";
import aeternaBianco02 from "../assets/imagenes/aeterna/aeterna-bianco/aeterna-bianco-02.jpg";
import aeternaBianco03 from "../assets/imagenes/aeterna/aeterna-bianco/aeterna-bianco-03.jpg";
import aeternaBianco04 from "../assets/imagenes/aeterna/aeterna-bianco/aeterna-bianco-04.jpg";
import aeternaBianco05 from "../assets/imagenes/aeterna/aeterna-bianco/aeterna-bianco-05.jpg";
import aeternaBianco06 from "../assets/imagenes/aeterna/aeterna-bianco/aeterna-bianco-06.jpg";

// ORDEN EXACTO
const images = [
  aeternaBianco01,
  aeternaBianco02,
  aeternaBianco03,
  aeternaBianco04,
  aeternaBianco05,
  aeternaBianco06,
];

export function Aeterna({ onGoHome }) {
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
        <h1 className="titulo-coleccion">AETERNA</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/pdf/AETERNA.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color BIANCO */}
        <h3 className="color-title">AETERNA BIANCO</h3>

        <section className="gallery-grid">
          <img
            src={aeternaBianco01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="AETERNA BIANCO 1"
          />

          <img
            src={aeternaBianco02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="AETERNA BIANCO 2"
          />

          <img
            src={aeternaBianco03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="AETERNA BIANCO 3"
          />

          <img
            src={aeternaBianco04}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="AETERNA BIANCO 4"
          />

          <img
            src={aeternaBianco05}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="AETERNA BIANCO 5"
          />

          <img
            src={aeternaBianco06}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="AETERNA BIANCO 6"
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