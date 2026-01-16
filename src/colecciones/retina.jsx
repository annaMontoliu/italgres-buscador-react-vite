// src/colecciones/retina.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

import retinaArancio1 from "../assets/imagenes/retina/retina-arancio/retina-arancio-01.jpg";
import retinaArancio2 from "../assets/imagenes/retina/retina-arancio/retina-arancio-02.jpg";
import retinaArancio3 from "../assets/imagenes/retina/retina-arancio/retina-arancio-03.jpg";
import retinaArancio4 from "../assets/imagenes/retina/retina-arancio/retina-arancio-04.jpg";

// ORDEN EXACTO
const images = [
  retinaArancio1,
  retinaArancio2,
  retinaArancio3,
  retinaArancio4,
];

export function Retina({ onGoHome }) {
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
        <h1 className="titulo-coleccion">RETINA</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://files.imolaceramica.com/collections/imola_produzione/collection_items_file_depliant/DP%20RETINA.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color ARANCIO */}
        <h3 className="color-title">RETINA ARANCIO</h3>
        <section className="gallery-grid">
          <img
            src={retinaArancio1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="RETINA ARANCIO 1"
          />
          <img
            src={retinaArancio2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="RETINA ARANCIO 2"
          />
          <img
            src={retinaArancio3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="RETINA ARANCIO 3"
          />
          <img
            src={retinaArancio4}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="RETINA ARANCIO 4"
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
