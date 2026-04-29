// src/colecciones/taj-mahal.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// SAND (6)
import tajMahalSand01 from "../assets/imagenes/taj-mahal/taj-mahal-sand/taj-mahal-sand-01.jpg";
import tajMahalSand02 from "../assets/imagenes/taj-mahal/taj-mahal-sand/taj-mahal-sand-02.jpg";
import tajMahalSand03 from "../assets/imagenes/taj-mahal/taj-mahal-sand/taj-mahal-sand-03.jpg";
import tajMahalSand04 from "../assets/imagenes/taj-mahal/taj-mahal-sand/taj-mahal-sand-04.jpg";
import tajMahalSand05 from "../assets/imagenes/taj-mahal/taj-mahal-sand/taj-mahal-sand-05.jpg";
import tajMahalSand06 from "../assets/imagenes/taj-mahal/taj-mahal-sand/taj-mahal-sand-06.jpg";

// WHITE (1)
import tajMahalWhite01 from "../assets/imagenes/taj-mahal/taj-mahal-white/taj-mahal-white-01.jpg";

// =====================
// ARRAY GLOBAL MODAL
// ORDEN: SAND → WHITE
// =====================
const images = [
  // SAND
  tajMahalSand01,
  tajMahalSand02,
  tajMahalSand03,
  tajMahalSand04,
  tajMahalSand05,
  tajMahalSand06,

  // WHITE
  tajMahalWhite01,
];

export function TajMahal({ onGoHome }) {
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
        <h1 className="titulo-coleccion">TAJ MAHAL</h1>

        <ColeccionLayout infoUrl="https://www.grespania.com/en/pdf-collection/23" />

        {/* SAND */}
        <h3 className="color-title">TAJ MAHAL SAND</h3>
        <section className="gallery-grid">
          {[
            tajMahalSand01,
            tajMahalSand02,
            tajMahalSand03,
            tajMahalSand04,
            tajMahalSand05,
            tajMahalSand06,
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(i)}
              loading="lazy"
              alt={`TAJ MAHAL SAND ${i + 1}`}
            />
          ))}
        </section>

        {/* WHITE */}
        <h3 className="color-title">TAJ MAHAL WHITE</h3>
        <section className="gallery-grid">
          <img
            src={tajMahalWhite01}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="TAJ MAHAL WHITE 01"
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