// src/colecciones/blue-roma.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// BLUE ROMA (9)
import blueRoma01 from "../assets/imagenes/blue-roma/blue-roma-01.jpg";
import blueRoma02 from "../assets/imagenes/blue-roma/blue-roma-02.jpg";
import blueRoma03 from "../assets/imagenes/blue-roma/blue-roma-03.jpg";
import blueRoma04 from "../assets/imagenes/blue-roma/blue-roma-04.jpg";
import blueRoma05 from "../assets/imagenes/blue-roma/blue-roma-05.jpg";
import blueRoma06 from "../assets/imagenes/blue-roma/blue-roma-06.jpg";
import blueRoma07 from "../assets/imagenes/blue-roma/blue-roma-07.jpg";
import blueRoma08 from "../assets/imagenes/blue-roma/blue-roma-08.jpg";
import blueRoma09 from "../assets/imagenes/blue-roma/blue-roma-09.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [
  blueRoma01, // 0
  blueRoma02, // 1
  blueRoma03, // 2
  blueRoma04, // 3
  blueRoma05, // 4
  blueRoma06, // 5
  blueRoma07, // 6
  blueRoma08, // 7
  blueRoma09, // 8
];

export function BlueRoma({ onGoHome }) {
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
        <h1 className="titulo-coleccion">BLUE ROMA</h1>

        <ColeccionLayout infoUrl="https://www.grespania.com/es/pdf-collection/58" />

        <h3 className="color-title">BLUE ROMA</h3>
        <section className="gallery-grid">
          <img src={blueRoma01} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="BLUE ROMA 01" />
          <img src={blueRoma02} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="BLUE ROMA 02" />
          <img src={blueRoma03} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="BLUE ROMA 03" />
          <img src={blueRoma04} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="BLUE ROMA 04" />
          <img src={blueRoma05} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="BLUE ROMA 05" />
          <img src={blueRoma06} className="gallery-img" onClick={() => openModal(5)} loading="lazy" alt="BLUE ROMA 06" />
          <img src={blueRoma07} className="gallery-img" onClick={() => openModal(6)} loading="lazy" alt="BLUE ROMA 07" />
          <img src={blueRoma08} className="gallery-img" onClick={() => openModal(7)} loading="lazy" alt="BLUE ROMA 08" />
          <img src={blueRoma09} className="gallery-img" onClick={() => openModal(8)} loading="lazy" alt="BLUE ROMA 09" />
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