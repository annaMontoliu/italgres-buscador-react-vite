// src/colecciones/terra-crea.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORT DE LA FOTO DESDE src/assets/imagenes/...
import terraCreaMattone1 from "../assets/imagenes/terra-crea/terra-crea-mattone/terra-crea-mattone.jpg";

// ORDEN EXACTO
const images = [
  terraCreaMattone1,
];

export function TerraCrea({ onGoHome }) {
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
        <h1 className="titulo-coleccion">TERRA CREA</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://kronosceramiche.com/src/uploads/sites/3/2021/09/Terra-Crea.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color MATTONE */}
        <h3 className="color-title">TERRA CREA MATTONE</h3>

        <section className="gallery-grid">
          <img
            src={terraCreaMattone1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="TERRA CREA MATTONE 1"
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