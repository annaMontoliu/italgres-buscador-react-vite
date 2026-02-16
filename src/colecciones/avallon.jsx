// src/colecciones/avallon.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import avallonMarfil1 from "../assets/imagenes/avallon/avallon-marfil/avallon-marfil-01.jpg";
import avallonGrey1 from "../assets/imagenes/avallon/avallon-grey/avallon-grey-01.jpg";

// ORDEN EXACTO: primero MARFIL, luego GREY
const images = [avallonMarfil1, avallonGrey1];

export function Avallon({ onGoHome }) {
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
        <h1 className="titulo-coleccion">AVALLON</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/pdf/AVALLON.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color MARFIL */}
        <h3 className="color-title">AVALLON MARFIL</h3>
        <section className="gallery-grid">
          <img
            src={avallonMarfil1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="AVALLON MARFIL 1"
          />
        </section>

        {/* Color GREY */}
        <h3 className="color-title">AVALLON GREY</h3>
        <section className="gallery-grid">
          <img
            src={avallonGrey1}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="AVALLON GREY 1"
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
