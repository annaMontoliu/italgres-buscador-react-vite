// src/colecciones/english-stone.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// NATURAL GREY (2)
import englishStoneNaturalGrey01 from "../assets/imagenes/english-stone/english-stone-natural-grey/english-stone-natural-grey-01.jpg";
import englishStoneNaturalGrey02 from "../assets/imagenes/english-stone/english-stone-natural-grey/english-stone-natural-grey-02.jpg";

// ANTRACITA (1)
import englishStoneAntracita01 from "../assets/imagenes/english-stone/english-stone-antracita/english-stone-antracita-01.jpg";

// =====================
// ARRAY GLOBAL MODAL
// ORDEN: NATURAL GREY → ANTRACITA
// =====================
const images = [
  englishStoneNaturalGrey01,
  englishStoneNaturalGrey02,
  englishStoneAntracita01,
];

export function EnglishStone({ onGoHome }) {
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
        <h1 className="titulo-coleccion">ENGLISH STONE</h1>

        <ColeccionLayout infoUrl="https://www.coem.it/wp-content/uploads/2022/11/COEM-English-Stone-2024-2.pdf" />

        {/* NATURAL GREY */}
        <h3 className="color-title">ENGLISH STONE NATURAL GREY</h3>
        <section className="gallery-grid">
          {[englishStoneNaturalGrey01, englishStoneNaturalGrey02].map(
            (img, i) => (
              <img
                key={i}
                src={img}
                className="gallery-img"
                onClick={() => openModal(i)}
                loading="lazy"
                alt={`ENGLISH STONE NATURAL GREY ${i + 1}`}
              />
            )
          )}
        </section>

        {/* ANTRACITA */}
        <h3 className="color-title">ENGLISH STONE ANTRACITA</h3>
        <section className="gallery-grid">
          <img
            src={englishStoneAntracita01}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="ENGLISH STONE ANTRACITA 01"
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
