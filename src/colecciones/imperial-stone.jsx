// src/colecciones/imperial-stone.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS
import imperialStoneWhite01 from "../assets/imagenes/imperial-stone/imperial-stone-white/imperial-stone-white-01.jpg";
import imperialStoneWhite02 from "../assets/imagenes/imperial-stone/imperial-stone-white/imperial-stone-white-02.jpg";
import imperialStoneWhite03 from "../assets/imagenes/imperial-stone/imperial-stone-white/imperial-stone-white-03.jpg";
import imperialStoneWhite04 from "../assets/imagenes/imperial-stone/imperial-stone-white/imperial-stone-white-04.jpg";

// ORDEN EXACTO
const images = [
  imperialStoneWhite01,
  imperialStoneWhite02,
  imperialStoneWhite03,
  imperialStoneWhite04,
];

export function ImperialStone({ onGoHome }) {
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
      {/* HEADER GLOBAL */}
      <Header onGoHome={onGoHome} />

      <main>
        {/* TÍTULO */}
        <h1 className="titulo-coleccion">IMPERIAL STONE</h1>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.cerdomus.com/flex/FixedPages/Common/serveAllegato.php/L/EN/id/909" />

        {/* GALERÍA */}
        <h3 className="color-title">IMPERIAL STONE WHITE</h3>
        <section className="gallery-grid">
          <img
            src={imperialStoneWhite01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="IMPERIAL STONE WHITE 01"
          />
          <img
            src={imperialStoneWhite02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="IMPERIAL STONE WHITE 02"
          />
          <img
            src={imperialStoneWhite03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="IMPERIAL STONE WHITE 03"
          />
          <img
            src={imperialStoneWhite04}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="IMPERIAL STONE WHITE 04"
          />
        </section>
      </main>

      {/* MODAL */}
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
