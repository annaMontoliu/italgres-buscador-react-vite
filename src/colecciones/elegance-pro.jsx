// src/colecciones/elegance-pro.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import eleganceProWhite1 from "../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-1.jpg";
import eleganceProWhite2 from "../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-2.jpg";
import eleganceProWhite3 from "../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-3.jpg";
import eleganceProWhite4 from "../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-4.jpg";
import eleganceProWhite5 from "../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-5.jpg";

// ORDEN EXACTO DE LAS FOTOS DE ELEGANCE PRO WHITE
const images = [
  eleganceProWhite1,
  eleganceProWhite2,
  eleganceProWhite3,
  eleganceProWhite4,
  eleganceProWhite5,
];

export function ElegancePro({ onGoHome }) {
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
        <h1 className="titulo-coleccion">ELEGANCE PRO</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout
          infoUrl="https://www.emilgroup.it/emil/prodotti/documenticollezioni_emil/Elegance%20Pro%20Catalogo%202024.12%20Web.pdf"
        />

        {/* ---- GALERÍA ---- */}

        {/* Color ELEGANCE PRO WHITE */}
        <h3 className="color-title">ELEGANCE PRO WHITE</h3>
        <section className="gallery-grid">
          <img
            src={eleganceProWhite1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="ELEGANCE PRO WHITE 1"
          />
          <img
            src={eleganceProWhite2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="ELEGANCE PRO WHITE 2"
          />
          <img
            src={eleganceProWhite3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="ELEGANCE PRO WHITE 3"
          />
          <img
            src={eleganceProWhite4}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="ELEGANCE PRO WHITE 4"
          />
          <img
            src={eleganceProWhite5}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="ELEGANCE PRO WHITE 5"
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