// src/colecciones/sinai.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import sinaiAvorio1 from "../assets/imagenes/sinai/sinai-avorio/sinai-avorio-1.jpg";
import sinaiAvorio2 from "../assets/imagenes/sinai/sinai-avorio/sinai-avorio-2.jpg";
import sinaiAvorio3 from "../assets/imagenes/sinai/sinai-avorio/sinai-avorio-3.jpg";

// ORDEN EXACTO COMO EN TU HTML ORIGINAL
const images = [sinaiAvorio1, sinaiAvorio2, sinaiAvorio3];

export function Sinai({ onGoHome }) {
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
        <h1 className="titulo-coleccion">SINAI</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.coem.it/wp-content/uploads/2023/12/COEM-Sinai.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color AVORIO */}
        <h3 className="color-title">SINAI AVORIO</h3>
        <section className="gallery-grid">
          <img
            src={sinaiAvorio1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="SINAI AVORIO 1"
          />
          <img
            src={sinaiAvorio2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="SINAI AVORIO 2"
          />
          <img
            src={sinaiAvorio3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="SINAI AVORIO 3"
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
