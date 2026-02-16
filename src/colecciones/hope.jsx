// src/colecciones/hope.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import hopeWhite1 from "../assets/imagenes/hope/hope-white/hope-white-01.jpg";

import hopeIvory1 from "../assets/imagenes/hope/hope-ivory/hope-avory-01.jpg";
import hopeIvory2 from "../assets/imagenes/hope/hope-ivory/hope-avory-02.jpg";

// ORDEN: primero WHITE, luego IVORY
const images = [hopeWhite1, hopeIvory1, hopeIvory2];

export function Hope({ onGoHome }) {
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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">HOPE</h1>

        <ColeccionLayout infoUrl="/pdf/HOPE.pdf" />

        <h3 className="color-title">HOPE WHITE</h3>
        <section className="gallery-grid">
          <img
            src={hopeWhite1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="HOPE WHITE 1"
          />
        </section>

        <h3 className="color-title">HOPE IVORY</h3>
        <section className="gallery-grid">
          <img
            src={hopeIvory1}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="HOPE IVORY 1"
          />
          <img
            src={hopeIvory2}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="HOPE IVORY 2"
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
