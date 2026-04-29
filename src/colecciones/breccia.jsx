// src/colecciones/breccia.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import breccia01 from "../assets/imagenes/breccia/breccia-01.jpg";
import breccia02 from "../assets/imagenes/breccia/breccia-02.jpg";
import breccia03 from "../assets/imagenes/breccia/breccia-03.jpg";
import breccia04 from "../assets/imagenes/breccia/breccia-04.jpg";

// ORDEN EXACTO
const images = [
  breccia01,
  breccia02,
  breccia03,
  breccia04,
];

export function Breccia({ onGoHome }) {
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
        <h1 className="titulo-coleccion">BRECCIA</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.coverlambygrespania.com/serie/breccia-imperiale/" />

        {/* ---- GALERÍA ---- */}
        <h3 className="color-title">BRECCIA</h3>

        <section className="gallery-grid">
          <img
            src={breccia01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="BRECCIA 1"
          />

          <img
            src={breccia02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="BRECCIA 2"
          />

          <img
            src={breccia03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="BRECCIA 3"
          />

          <img
            src={breccia04}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="BRECCIA 4"
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