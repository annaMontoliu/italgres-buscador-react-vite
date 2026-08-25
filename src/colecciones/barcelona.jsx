// src/colecciones/barcelona.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import barcelonaCristal01 from "../assets/imagenes/barcelona/barcelona-cristal/barcelona-cristal-01.jpg";

// ORDEN EXACTO COMO EN TU HTML ORIGINAL
const images = [barcelonaCristal01];

export function Barcelona({ onGoHome }) {
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
        <h1 className="titulo-coleccion">BARCELONA</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.portobello.com.br/es/productos/ms-barcelona/field-tile/ms-barcelona-cristal/60x120-natural/26781E/revestimientos?channel=exportacaoo" />

        {/* ---- GALERÍA ---- */}

        {/* Color CRISTAL */}
        <h3 className="color-title">BARCELONA CRISTAL</h3>
        <section className="gallery-grid">
          <img
            src={barcelonaCristal01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="BARCELONA CRISTAL 1"
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
