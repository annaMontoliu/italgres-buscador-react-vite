// src/colecciones/sinai-coem.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import sinaiCoemAvorio01 from "../assets/imagenes/sinai-coem/sinai-coem-avorio/sinai-coem-avorio-01.jpg";
import sinaiCoemAvorio02 from "../assets/imagenes/sinai-coem/sinai-coem-avorio/sinai-coem-avorio-02.jpg";
import sinaiCoemAvorio03 from "../assets/imagenes/sinai-coem/sinai-coem-avorio/sinai-coem-avorio-03.jpg";

// ORDEN EXACTO (modal)
const images = [sinaiCoemAvorio01, sinaiCoemAvorio02, sinaiCoemAvorio03];

export function SinaiCoem({ onGoHome }) {
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
        <h1 className="titulo-coleccion">SINAI COEM</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.coem.it/wp-content/uploads/2023/12/COEM-Sinai.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color AVORIO */}
        <h3 className="color-title">SINAI COEM AVORIO</h3>
        <section className="gallery-grid">
          <img
            src={sinaiCoemAvorio01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="SINAI COEM AVORIO 1"
          />
          <img
            src={sinaiCoemAvorio02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="SINAI COEM AVORIO 2"
          />
          <img
            src={sinaiCoemAvorio03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="SINAI COEM AVORIO 3"
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
