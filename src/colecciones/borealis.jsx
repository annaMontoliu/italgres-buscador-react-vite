// src/colecciones/borealis.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE FOTOS BOREALIS INARI (2)
import borealisInari1 from "../assets/imagenes/borealis/borealis-inari/borealis-inari-01.jpg";
import borealisInari2 from "../assets/imagenes/borealis/borealis-inari/borealis-inari-02.jpg";

// IMPORTS DE FOTOS BOREALIS ABISKO (5)
import borealisAbisko1 from "../assets/imagenes/borealis/borealis-abisko/borealis-abisko-01.jpg";
import borealisAbisko2 from "../assets/imagenes/borealis/borealis-abisko/borealis-abisko-02.jpg";
import borealisAbisko3 from "../assets/imagenes/borealis/borealis-abisko/borealis-abisko-03.jpg";
import borealisAbisko4 from "../assets/imagenes/borealis/borealis-abisko/borealis-abisko-04.jpg";
import borealisAbisko5 from "../assets/imagenes/borealis/borealis-abisko/borealis-abisko-05.jpg";

// IMPORTS DE FOTOS BOREALIS DONEGAL (2)
import borealisDonegal1 from "../assets/imagenes/borealis/borealis-donegal/borealis-donegal-01.jpg";
import borealisDonegal2 from "../assets/imagenes/borealis/borealis-donegal/borealis-donegal-02.jpg";

// ORDEN EXACTO DEL ARRAY (INARI → ABISKO → DONEGAL)
const images = [
  // INARI
  borealisInari1,
  borealisInari2,

  // ABISKO
  borealisAbisko1,
  borealisAbisko2,
  borealisAbisko3,
  borealisAbisko4,
  borealisAbisko5,

  // DONEGAL
  borealisDonegal1,
  borealisDonegal2,
];

export function Borealis({ onGoHome }) {
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
        {/* Título */}
        <h1 className="titulo-coleccion">BOREALIS</h1>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.panaria.us/downloads/6535/1426/PANARIA-catalogue-borealis-2022.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color INARI */}
        <h3 className="color-title">BOREALIS INARI</h3>
        <section className="gallery-grid">
          <img
            src={borealisInari1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="BOREALIS INARI 1"
          />
          <img
            src={borealisInari2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="BOREALIS INARI 2"
          />
        </section>

        {/* Color ABISKO */}
        <h3 className="color-title">BOREALIS ABISKO</h3>
        <section className="gallery-grid">
          <img
            src={borealisAbisko1}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="BOREALIS ABISKO 1"
          />
          <img
            src={borealisAbisko2}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="BOREALIS ABISKO 2"
          />
          <img
            src={borealisAbisko3}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="BOREALIS ABISKO 3"
          />
          <img
            src={borealisAbisko4}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="BOREALIS ABISKO 4"
          />
          <img
            src={borealisAbisko5}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="BOREALIS ABISKO 5"
          />
        </section>

        {/* Color DONEGAL */}
        <h3 className="color-title">BOREALIS DONEGAL</h3>
        <section className="gallery-grid">
          <img
            src={borealisDonegal1}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="BOREALIS DONEGAL 1"
          />
          <img
            src={borealisDonegal2}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="BOREALIS DONEGAL 2"
          />
        </section>
      </main>

      {/* MODAL REUTILIZABLE */}
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
