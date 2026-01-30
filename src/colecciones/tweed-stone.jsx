// src/colecciones/tweed-stone.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES (exacto según captura)
// =====================

// GREY (1)
import tweedStoneGrey01 from "../assets/imagenes/tweed-stone/tweed-stone-grey/tweed-stone-grey-01.jpg";

// ANTRACITA (2)
import tweedStoneAntracita01 from "../assets/imagenes/tweed-stone/tweed-stone-antracita/tweed-stone-antracita-01.jpg";
import tweedStoneAntracita02 from "../assets/imagenes/tweed-stone/tweed-stone-antracita/tweed-stone-antracita-02.jpg";

// =====================
// ARRAY GLOBAL MODAL
// ORDEN: GREY → ANTRACITA
// =====================
const images = [
  tweedStoneGrey01,
  tweedStoneAntracita01,
  tweedStoneAntracita02,
];

export function TweedStone({ onGoHome }) {
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
    setCurrentIndex((i) => (i + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">TWEED STONE</h1>

        <ColeccionLayout infoUrl="https://www.coem.it/wp-content/uploads/2021/01/COEM-Tweed-Stone-2024.pdf" />

        {/* GREY */}
        <h3 className="color-title">TWEED STONE GREY</h3>
        <section className="gallery-grid">
          <img
            src={tweedStoneGrey01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="TWEED STONE GREY 01"
          />
        </section>

        {/* ANTRACITA */}
        <h3 className="color-title">TWEED STONE ANTRACITA</h3>
        <section className="gallery-grid">
          {[tweedStoneAntracita01, tweedStoneAntracita02].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(1 + i)}
              loading="lazy"
              alt={`TWEED STONE ANTRACITA ${i + 1}`}
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
