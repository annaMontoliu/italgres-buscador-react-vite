// src/colecciones/coralina.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import coralinaPerla01 from "../assets/imagenes/coralina/coralina-perla/coralina-perla-01.jpg";
import coralinaPerla02 from "../assets/imagenes/coralina/coralina-perla/coralina-perla-02.jpg";
import coralinaPerla03 from "../assets/imagenes/coralina/coralina-perla/coralina-perla-03.jpg";

// ORDEN EXACTO
const images = [coralinaPerla01, coralinaPerla02, coralinaPerla03];

export function Coralina({ onGoHome }) {
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
        <h1 className="titulo-coleccion">CORALINA</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl= "https://www.bellacasaceramica.com/wp-content/uploads/2018/09/BELLACASA-Coralina-2.pdf"/>

        {/* ---- GALERÍA ---- */}
        <h3 className="color-title">CORALINA PERLA</h3>

        <section className="gallery-grid">
          <img
            src={coralinaPerla01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="CORALINA PERLA 01"
          />
          <img
            src={coralinaPerla02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="CORALINA PERLA 02"
          />
          <img
            src={coralinaPerla03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="CORALINA PERLA 03"
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
