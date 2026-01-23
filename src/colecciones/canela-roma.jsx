// src/colecciones/canela-roma.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// CANELA ROMA (5)
import canelaRoma01 from "../assets/imagenes/canela-roma/canela-roma-01.jpg";
import canelaRoma02 from "../assets/imagenes/canela-roma/canela-roma-02.jpg";
import canelaRoma03 from "../assets/imagenes/canela-roma/canela-roma-03.jpg";
import canelaRoma04 from "../assets/imagenes/canela-roma/canela-roma-04.jpg";
import canelaRoma05 from "../assets/imagenes/canela-roma/canela-roma-05.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [canelaRoma01, canelaRoma02, canelaRoma03, canelaRoma04, canelaRoma05];

export function CanelaRoma({ onGoHome }) {
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
        <h1 className="titulo-coleccion">CANELA ROMA</h1>

        <ColeccionLayout infoUrl="https://www.grespania.com/es/pdf-collection/3" />

        <h3 className="color-title">CANELA ROMA</h3>
        <section className="gallery-grid">
          <img src={canelaRoma01} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="CANELA ROMA 01" />
          <img src={canelaRoma02} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="CANELA ROMA 02" />
          <img src={canelaRoma03} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="CANELA ROMA 03" />
          <img src={canelaRoma04} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="CANELA ROMA 04" />
          <img src={canelaRoma05} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="CANELA ROMA 05" />
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
