// src/colecciones/lumix-natural.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import lumixNatural01 from "../assets/imagenes/lumix-natural/lumix-natural-01.jpg";
import lumixNatural02 from "../assets/imagenes/lumix-natural/lumix-natural-02.jpg";
import lumixNatural03 from "../assets/imagenes/lumix-natural/lumix-natural-03.jpg";
import lumixNatural04 from "../assets/imagenes/lumix-natural/lumix-natural-04.jpg";

// ORDEN EXACTO
const images = [
  lumixNatural01,
  lumixNatural02,
  lumixNatural03,
  lumixNatural04,
];

export function LumixNatural({ onGoHome }) {
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
        <h1 className="titulo-coleccion">LUMIX NATURAL</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.grespania.com/en/products/grespania-lumix-natural-120x120-10-mm" />

        {/* ---- GALERÍA ---- */}
        <h3 className="color-title">LUMIX NATURAL</h3>

        <section className="gallery-grid">
          <img
            src={lumixNatural01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="LUMIX NATURAL 1"
          />

          <img
            src={lumixNatural02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="LUMIX NATURAL 2"
          />

          <img
            src={lumixNatural03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="LUMIX NATURAL 3"
          />

          <img
            src={lumixNatural04}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="LUMIX NATURAL 4"
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