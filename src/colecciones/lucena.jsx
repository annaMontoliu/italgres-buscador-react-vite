// src/colecciones/lucena.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import lucenaBlanco1 from "../assets/imagenes/lucena/lucena-blanco/lucena-blanco-1.jpg";

import lucenaNieve1 from "../assets/imagenes/lucena/lucena-nieve/lucena-nieve-1.jpg";
import lucenaNieve2 from "../assets/imagenes/lucena/lucena-nieve/lucena-nieve-2.jpg";
import lucenaNieve3 from "../assets/imagenes/lucena/lucena-nieve/lucena-nieve-3.jpg";
import lucenaNieve4 from "../assets/imagenes/lucena/lucena-nieve/lucena-nieve-4.jpg";
import lucenaNieve5 from "../assets/imagenes/lucena/lucena-nieve/lucena-nieve-5.jpg";
import lucenaNieve6 from "../assets/imagenes/lucena/lucena-nieve/lucena-nieve-6.jpg";
import lucenaNieve7 from "../assets/imagenes/lucena/lucena-nieve/lucena-nieve-7.jpg";
import lucenaNieve8 from "../assets/imagenes/lucena/lucena-nieve/lucena-nieve-8.jpg";
import lucenaNieve9 from "../assets/imagenes/lucena/lucena-nieve/lucena-nieve-9.jpg";

// ORDEN EXACTO COMO EN TU HTML ORIGINAL
const images = [
  lucenaBlanco1,
  lucenaNieve1,
  lucenaNieve2,
  lucenaNieve3,
  lucenaNieve4,
  lucenaNieve5,
  lucenaNieve6,
  lucenaNieve7,
  lucenaNieve8,
  lucenaNieve9,
];

export function Lucena({ onGoHome }) {
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
      {/* HEADER GLOBAL */}
      <Header onGoHome={onGoHome} />

      <main>
        {/* Título */}
        <h1 className="titulo-coleccion">LUCENA</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.bellacasaceramica.com/wp-content/uploads/2020/09/BELLACASA-Lucena-Rev-2.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color BLANCO */}
        <h3 className="color-title">LUCENA BLANCO</h3>
        <section className="gallery-grid">
          <img
            src={lucenaBlanco1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="LUCENA BLANCO 1"
          />
        </section>

        {/* Color NIEVE */}
        <h3 className="color-title">LUCENA NIEVE</h3>
        <section className="gallery-grid">
          <img
            src={lucenaNieve1}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="LUCENA NIEVE 1"
          />
          <img
            src={lucenaNieve2}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="LUCENA NIEVE 2"
          />
          <img
            src={lucenaNieve3}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="LUCENA NIEVE 3"
          />
          <img
            src={lucenaNieve4}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="LUCENA NIEVE 4"
          />
          <img
            src={lucenaNieve5}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="LUCENA NIEVE 5"
          />
          <img
            src={lucenaNieve6}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="LUCENA NIEVE 6"
          />
          <img
            src={lucenaNieve7}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="LUCENA NIEVE 7"
          />
          <img
            src={lucenaNieve8}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="LUCENA NIEVE 8"
          />
          <img
            src={lucenaNieve9}
            className="gallery-img"
            onClick={() => openModal(9)}
            loading="lazy"
            alt="LUCENA NIEVE 9"
          />
        </section>
      </main>

      {/* ---- MODAL REUTILIZABLE ---- */}
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
