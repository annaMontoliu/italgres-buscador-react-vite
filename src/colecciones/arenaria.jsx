// src/colecciones/arenaria.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import arenariaBianco01 from "../assets/imagenes/arenaria/arenaria-bianco/arenaria-bianco-01.jpg";
import arenariaGrigio01 from "../assets/imagenes/arenaria/arenaria-grigio/arenaria-grigio-01.jpg";

// ORDEN EXACTO (modal)
const images = [arenariaBianco01, arenariaGrigio01];

export function Arenaria({ onGoHome }) {
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
        <h1 className="titulo-coleccion">ARENARIA</h1>

    
        {/* ---- GALERÍA ---- */}

        {/* Color BIANCO */}
        <h3 className="color-title">ARENARIA BIANCO</h3>
        <section className="gallery-grid">
          <img
            src={arenariaBianco01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="ARENARIA BIANCO 1"
          />
        </section>

        {/* Botón MORE INFO BIANCO */}
        <a
          href="https://www.porcelain4top.it/en/top-60"
          target="_blank"
          rel="noreferrer"
          className="more-info-btn"
        >
          MORE INFO
        </a>

        {/* Color GRIGIO */}
        <h3 className="color-title">ARENARIA GRIGIO</h3>
        <section className="gallery-grid">
          <img
            src={arenariaGrigio01}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="ARENARIA GRIGIO 1"
          />
        </section>

        {/* Botón MORE INFO GRIGIO */}
        <a
          href="https://www.porcelain4top.it/en/top-62"
          target="_blank"
          rel="noreferrer"
          className="more-info-btn"
        >
          MORE INFO
        </a>
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
