// src/colecciones/mainstone.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMÁGENES MAINSTONE MOON (2)
import mainstoneMoon1 from "../assets/imagenes/mainstone/mainstone-moon/mainstone-moon-01.jpg";
import mainstoneMoon2 from "../assets/imagenes/mainstone/mainstone-moon/mainstone-moon-02.jpg";

// ARRAY GLOBAL MODAL
const images = [
  mainstoneMoon1,
  mainstoneMoon2,
];

export function Mainstone({ onGoHome }) {
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
        {/* TÍTULO */}
        <h1 className="titulo-coleccion">MAINSTONE</h1>

        {/* PDF */}
        <ColeccionLayout infoUrl="/pdf/MAINSTONE.pdf" />

        {/* GALERÍA */}
        <h3 className="color-title">MAINSTONE MOON</h3>
        <section className="gallery-grid">
          <img
            src={mainstoneMoon1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="MAINSTONE MOON 1"
          />
          <img
            src={mainstoneMoon2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="MAINSTONE MOON 2"
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
