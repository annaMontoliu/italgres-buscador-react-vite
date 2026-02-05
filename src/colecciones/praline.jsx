// src/colecciones/praline.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMÁGENES PRALINE GOLD (3)
import pralineGold1 from "../assets/imagenes/praline/praline-gold/praline-gold-01.jpg";
import pralineGold2 from "../assets/imagenes/praline/praline-gold/praline-gold-02.jpg";
import pralineGold3 from "../assets/imagenes/praline/praline-gold/praline-gold-03.jpg";

// ARRAY GLOBAL MODAL (orden exacto)
const images = [pralineGold1, pralineGold2, pralineGold3];

export function Praline({ onGoHome }) {
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
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">PRALINE</h1>

        {/* PDF */}
        <ColeccionLayout infoUrl="/pdf/PRALINE.pdf" />

        {/* GALERÍA */}
        <h3 className="color-title">PRALINE GOLD</h3>
        <section className="gallery-grid">
          <img
            src={pralineGold1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="PRALINE GOLD 1"
          />
          <img
            src={pralineGold2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="PRALINE GOLD 2"
          />
          <img
            src={pralineGold3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="PRALINE GOLD 3"
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
