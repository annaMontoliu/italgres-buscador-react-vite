import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// CALIZIA GREY (1)
import caliziaGrey01 from "../assets/imagenes/calizia/calizia-grey/calizia-grey-01.jpg";

// CALIZIA WHITE (1)
import caliziaWhite01 from "../assets/imagenes/calizia/calizia-white/calizia-white-01.jpg";

// =====================
// ARRAY GLOBAL MODAL
// Orden: GREY → WHITE
// =====================
const images = [
  caliziaGrey01,  // 0
  caliziaWhite01, // 1
];

export function Calizia({ onGoHome }) {
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
        <h1 className="titulo-coleccion">CALIZIA</h1>

        <ColeccionLayout infoUrl="https://www.azuvi.com/wp-content/uploads/catalogos/azuvi/CAT%20CALIZIA%202023_AZUVI.pdf" />

        {/* CALIZIA GREY */}
        <h3 className="color-title">CALIZIA GREY</h3>
        <section className="gallery-grid">
          <img
            src={caliziaGrey01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="CALIZIA GREY 01"
          />
        </section>

        {/* CALIZIA WHITE */}
        <h3 className="color-title">CALIZIA WHITE</h3>
        <section className="gallery-grid">
          <img
            src={caliziaWhite01}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="CALIZIA WHITE 01"
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