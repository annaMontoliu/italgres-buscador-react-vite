// src/colecciones/white-balance.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import whiteBalance01 from "../assets/imagenes/white-balance/white-balance-01.jpg";
import whiteBalance02 from "../assets/imagenes/white-balance/white-balance-02.jpg";
import whiteBalance03 from "../assets/imagenes/white-balance/white-balance-03.jpg";
import whiteBalance04 from "../assets/imagenes/white-balance/white-balance-04.jpg";

// ORDEN EXACTO
const images = [
  whiteBalance01,
  whiteBalance02,
  whiteBalance03,
  whiteBalance04,
];

export function WhiteBalance({ onGoHome }) {
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
        <h1 className="titulo-coleccion">WHITE BALANCE</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.grespania.com/en/pdf-collection/444" />

        {/* ---- GALERÍA ---- */}
        <h3 className="color-title">WHITE BALANCE</h3>

        <section className="gallery-grid">
          <img
            src={whiteBalance01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="WHITE BALANCE 1"
          />

          <img
            src={whiteBalance02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="WHITE BALANCE 2"
          />

          <img
            src={whiteBalance03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="WHITE BALANCE 3"
          />

          <img
            src={whiteBalance04}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="WHITE BALANCE 4"
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