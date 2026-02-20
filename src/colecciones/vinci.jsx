import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// VINCI DESERT (2)
import vinciDesert01 from "../assets/imagenes/vinci/vinci-desert/vinci-desert-01.jpg";
import vinciDesert02 from "../assets/imagenes/vinci/vinci-desert/vinci-desert-02.jpg";

// VINCI WHITE (1)
import vinciWhite01 from "../assets/imagenes/vinci/vinci-white/vinci-white-01.jpg";

// =====================
// ARRAY GLOBAL MODAL
// Orden: DESERT → WHITE
// =====================
const images = [
  vinciDesert01, // 0
  vinciDesert02, // 1
  vinciWhite01,  // 2
];

export function Vinci({ onGoHome }) {
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
        <h1 className="titulo-coleccion">VINCI</h1>

        {/* ✅ Sustituye por tu PDF real: /pdf/VINCI.pdf o link externo */}
        <ColeccionLayout infoUrl="/pdf/VINCI.pdf" />

        {/* VINCI DESERT */}
        <h3 className="color-title">VINCI DESERT</h3>
        <section className="gallery-grid">
          <img
            src={vinciDesert01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="VINCI DESERT 01"
          />
          <img
            src={vinciDesert02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="VINCI DESERT 02"
          />
        </section>

        {/* VINCI WHITE */}
        <h3 className="color-title">VINCI WHITE</h3>
        <section className="gallery-grid">
          <img
            src={vinciWhite01}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="VINCI WHITE 01"
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