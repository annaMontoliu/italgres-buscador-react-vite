// src/colecciones/erawan.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORT FOTO
import erawanAlmond1 from "../assets/imagenes/erawan/erawan-almond/erawan-almond-01.jpg";

// ORDEN
const images = [erawanAlmond1];

export function Erawan({ onGoHome }) {
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
        <h1 className="titulo-coleccion">ERAWAN</h1>

        <ColeccionLayout infoUrl="/pdf/ERAWAN.pdf" />

        <h3 className="color-title">ERAWAN ALMOND</h3>

        <section className="gallery-grid">
          <img
            src={erawanAlmond1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="ERAWAN ALMOND 1"
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
