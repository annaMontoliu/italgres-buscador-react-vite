// src/colecciones/verbier.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS

import verbierWhite1 from "../assets/imagenes/verbier/verbier-white/verbier-white-01.jpg";
import verbierWhite2 from "../assets/imagenes/verbier/verbier-white/verbier-white-02.jpg";
import verbierWhite3 from "../assets/imagenes/verbier/verbier-white/verbier-white-03.jpg";
import verbierWhite4 from "../assets/imagenes/verbier/verbier-white/verbier-white-04.jpg";

// ORDEN EXACTO
const images = [
  verbierWhite1,
  verbierWhite2,
  verbierWhite3,
  verbierWhite4,
];

export function Verbier({ onGoHome }) {
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
        <h1 className="titulo-coleccion">VERBIER</h1>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/pdf/VERBIER.pdf" />

        {/* ---- GALERÍA ---- */}

        <h3 className="color-title">VERBIER WHITE</h3>
        <section className="gallery-grid">
          <img
            src={verbierWhite1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="VERBIER WHITE 1"
          />
          <img
            src={verbierWhite2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="VERBIER WHITE 2"
          />
          <img
            src={verbierWhite3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="VERBIER WHITE 3"
          />
          <img
            src={verbierWhite4}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="VERBIER WHITE 4"
          />
        </section>
      </main>

      {/* MODAL */}
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
