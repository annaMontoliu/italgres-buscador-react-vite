// src/colecciones/doncella.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import doncellaIvory1 from "../assets/imagenes/doncella/doncella-ivory/doncella-ivory-01.jpg";
import doncellaIvory2 from "../assets/imagenes/doncella/doncella-ivory/doncella-ivory-02.jpg";
import doncellaIvory3 from "../assets/imagenes/doncella/doncella-ivory/doncella-ivory-03.jpg";
import doncellaIvory4 from "../assets/imagenes/doncella/doncella-ivory/doncella-ivory-04.jpg";

// ORDEN EXACTO COMO EN TU HTML ORIGINAL
const images = [
  doncellaIvory1,
  doncellaIvory2,
  doncellaIvory3,
  doncellaIvory4,
];

export function Doncella({ onGoHome }) {
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
        <h1 className="titulo-coleccion">DONCELLA</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/pdf/DONCELLA.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color IVORY */}
        <h3 className="color-title">DONCELLA IVORY</h3>
        <section className="gallery-grid">
          <img
            src={doncellaIvory1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="DONCELLA IVORY 1"
          />
          <img
            src={doncellaIvory2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="DONCELLA IVORY 2"
          />
          <img
            src={doncellaIvory3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="DONCELLA IVORY 3"
          />
          <img
            src={doncellaIvory4}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="DONCELLA IVORY 4"
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