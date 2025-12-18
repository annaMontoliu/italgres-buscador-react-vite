// src/colecciones/riverside.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS
import riversideIvory01 from "../assets/imagenes/riverside/riverside-ivory/riverside-ivory-01.jpg";
import riversideIvory02 from "../assets/imagenes/riverside/riverside-ivory/riverside-ivory-02.jpg";

import riversideWhite01 from "../assets/imagenes/riverside/riverside-white/riverside-white-01.jpg";
import riversideWhite02 from "../assets/imagenes/riverside/riverside-white/riverside-white-02.jpg";

// ORDEN EXACTO
const images = [
  riversideIvory01,
  riversideIvory02,
  riversideWhite01,
  riversideWhite02,
];

export function Riverside({ onGoHome }) {
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
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">RIVERSIDE</h1>

        <ColeccionLayout infoUrl="https://www.grespania.com/en/pdf-collection/357" />

        <h3 className="color-title">RIVERSIDE IVORY</h3>
        <section className="gallery-grid">
          <img src={riversideIvory01} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="RIVERSIDE IVORY 01" />
          <img src={riversideIvory02} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="RIVERSIDE IVORY 02" />
        </section>

        <h3 className="color-title">RIVERSIDE WHITE</h3>
        <section className="gallery-grid">
          <img src={riversideWhite01} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="RIVERSIDE WHITE 01" />
          <img src={riversideWhite02} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="RIVERSIDE WHITE 02" />
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
