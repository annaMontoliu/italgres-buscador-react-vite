// src/colecciones/majestic.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORT FOTO
import majesticWhite1 from "../assets/imagenes/majestic/majestic-white/majestic-white-01.jpg";

// ORDEN
const images = [majesticWhite1];

export function Majestic({ onGoHome }) {
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
        <h1 className="titulo-coleccion">MAJESTIC</h1>

        <ColeccionLayout infoUrl="/pdf/MAJESTIC.pdf" />

        <h3 className="color-title">MAJESTIC WHITE</h3>

        <section className="gallery-grid">
          <img
            src={majesticWhite1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="MAJESTIC WHITE 1"
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
