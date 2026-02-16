// src/colecciones/dual-travertine.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import dualTravertineWhite1 from "../assets/imagenes/dual-travertine/dual-travertine-white/dual-travertine-white-01.jpg";
import dualTravertineWhite2 from "../assets/imagenes/dual-travertine/dual-travertine-white/dual-travertine-white-02.jpg";

const images = [dualTravertineWhite1, dualTravertineWhite2];

export function DualTravertine({ onGoHome }) {
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
        <h1 className="titulo-coleccion">DUAL TRAVERTINE</h1>

        <ColeccionLayout infoUrl="https://www.emilgroup.it/emil/prodotti/documenticollezioni_emil/DualTravertine%20Catalogo%202026.01%20Web.pdf" />

        <h3 className="color-title">DUAL TRAVERTINE WHITE</h3>
        <section className="gallery-grid">
          <img
            src={dualTravertineWhite1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="DUAL TRAVERTINE WHITE 1"
          />
          <img
            src={dualTravertineWhite2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="DUAL TRAVERTINE WHITE 2"
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
