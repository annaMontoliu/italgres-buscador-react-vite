// src/colecciones/dual.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMÁGENES DUAL WHITE (8)
import dualWhite1 from "../assets/imagenes/dual/dual-white/dual-white-01.jpg";
import dualWhite2 from "../assets/imagenes/dual/dual-white/dual-white-02.jpg";
import dualWhite3 from "../assets/imagenes/dual/dual-white/dual-white-03.jpg";
import dualWhite4 from "../assets/imagenes/dual/dual-white/dual-white-04.jpg";
import dualWhite5 from "../assets/imagenes/dual/dual-white/dual-white-05.jpg";
import dualWhite6 from "../assets/imagenes/dual/dual-white/dual-white-06.jpg";
import dualWhite7 from "../assets/imagenes/dual/dual-white/dual-white-07.jpg";
import dualWhite8 from "../assets/imagenes/dual/dual-white/dual-white-08.jpg";

// ARRAY GLOBAL MODAL (orden exacto)
const images = [
  dualWhite1,
  dualWhite2,
  dualWhite3,
  dualWhite4,
  dualWhite5,
  dualWhite6,
  dualWhite7,
  dualWhite8,
];

export function Dual({ onGoHome }) {
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
        <h1 className="titulo-coleccion">DUAL</h1>

        {/* PDF */}
        <ColeccionLayout infoUrl="/pdf/DUAL.pdf" />

        {/* GALERÍA */}
        <h3 className="color-title">DUAL WHITE</h3>
        <section className="gallery-grid">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(i)}
              loading="lazy"
              alt={`DUAL WHITE ${i + 1}`}
            />
          ))}
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
