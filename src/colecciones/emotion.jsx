// src/colecciones/emotion.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// EMOTION GREY (3)
import emotionGrey01 from "../assets/imagenes/emotion/emotion-grey/emotion-grey-01.jpg";
import emotionGrey02 from "../assets/imagenes/emotion/emotion-grey/emotion-grey-02.jpg";
import emotionGrey03 from "../assets/imagenes/emotion/emotion-grey/emotion-grey-03.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [
  emotionGrey01, // 0
  emotionGrey02, // 1
  emotionGrey03, // 2
];

export function Emotion({ onGoHome }) {
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
        <h1 className="titulo-coleccion">EMOTION</h1>

        <ColeccionLayout infoUrl="/pdf/EMOTION.pdf" />

        <h3 className="color-title">EMOTION GREY</h3>
        <section className="gallery-grid">
          <img
            src={emotionGrey01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="EMOTION GREY 01"
          />
          <img
            src={emotionGrey02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="EMOTION GREY 02"
          />
          <img
            src={emotionGrey03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="EMOTION GREY 03"
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