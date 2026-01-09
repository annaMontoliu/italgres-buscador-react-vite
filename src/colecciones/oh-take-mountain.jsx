// src/colecciones/oh-take-mountain.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import ohTakeMountain01 from "../assets/imagenes/oh-take-mountain/oh-take-mountain-01.jpg";
import ohTakeMountain02 from "../assets/imagenes/oh-take-mountain/oh-take-mountain-02.jpg";

// ORDEN EXACTO COMO EN TU HTML ORIGINAL
const images = [ohTakeMountain01, ohTakeMountain02];

export function OhTakeMountain({ onGoHome }) {
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
        <h1 className="titulo-coleccion">OH TAKE MOUNTAIN</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.portobello.com.br/es/productos/oh-take/field-tile/oh-take-mountain/120x270-natural/211024ET?channel=exportacao" />

        {/* ---- GALERÍA ---- */}

        {/* Color OH TAKE MOUNTAIN */}
        <h3 className="color-title">OH TAKE MOUNTAIN</h3>
        <section className="gallery-grid">
          <img
            src={ohTakeMountain01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="OH TAKE MOUNTAIN 1"
          />
          <img
            src={ohTakeMountain02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="OH TAKE MOUNTAIN 2"
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
