// src/colecciones/duomo.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import duomoBlanco01 from "../assets/imagenes/duomo/duomo-blanco/duomo-blanco-01.jpg";
import duomoBlanco02 from "../assets/imagenes/duomo/duomo-blanco/duomo-blanco-02.jpg";
import duomoBlanco03 from "../assets/imagenes/duomo/duomo-blanco/duomo-blanco-03.jpg";

// ORDEN EXACTO
const images = [
  duomoBlanco01,
  duomoBlanco02,
  duomoBlanco03
];

export function Duomo({ onGoHome }) {
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
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">DUOMO</h1>

        <ColeccionLayout infoUrl="/public/pdf/DUOMO.pdf" />

        {/* Color BLANCO */}
        <h3 className="color-title">DUOMO BLANCO</h3>
        <section className="gallery-grid">
          <img
            src={duomoBlanco01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="DUOMO BLANCO 01"
          />
          <img
            src={duomoBlanco02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="DUOMO BLANCO 02"
          />
          <img
            src={duomoBlanco03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="DUOMO BLANCO 03"
          />
        </section>
      </main>

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