// src/colecciones/caementum.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// ALBUS (8)
import caementumAlbus01 from "../assets/imagenes/caementum/caementum-albus/caementum-albus-01.jpg";
import caementumAlbus02 from "../assets/imagenes/caementum/caementum-albus/caementum-albus-02.jpg";
import caementumAlbus03 from "../assets/imagenes/caementum/caementum-albus/caementum-albus-03.jpg";
import caementumAlbus04 from "../assets/imagenes/caementum/caementum-albus/caementum-albus-04.jpg";
import caementumAlbus05 from "../assets/imagenes/caementum/caementum-albus/caementum-albus-05.jpg";
import caementumAlbus06 from "../assets/imagenes/caementum/caementum-albus/caementum-albus-06.jpg";
import caementumAlbus07 from "../assets/imagenes/caementum/caementum-albus/caementum-albus-07.jpg";
import caementumAlbus08 from "../assets/imagenes/caementum/caementum-albus/caementum-albus-08.jpg";

// CLARUS (2)
import caementumClarus01 from "../assets/imagenes/caementum/caementum-clarus/caementum-clarus-01.jpg";
import caementumClarus02 from "../assets/imagenes/caementum/caementum-clarus/caementum-clarus-02.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [
  // ALBUS
  caementumAlbus01,
  caementumAlbus02,
  caementumAlbus03,
  caementumAlbus04,
  caementumAlbus05,
  caementumAlbus06,
  caementumAlbus07,
  caementumAlbus08,

  // CLARUS
  caementumClarus01,
  caementumClarus02,
];

export function Caementum({ onGoHome }) {
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
        <h1 className="titulo-coleccion">CAEMENTUM</h1>

        <ColeccionLayout infoUrl="https://tuscaniagres.it/wp-content/uploads/2025/09/TUSCANIA_CATALOGO_CAEMENTUM_07_25.pdf" />

        {/* ALBUS */}
        <h3 className="color-title">CAEMENTUM ALBUS</h3>
        <section className="gallery-grid">
          {[
            caementumAlbus01,
            caementumAlbus02,
            caementumAlbus03,
            caementumAlbus04,
            caementumAlbus05,
            caementumAlbus06,
            caementumAlbus07,
            caementumAlbus08,
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(i)}
              loading="lazy"
              alt={`CAEMENTUM ALBUS ${i + 1}`}
            />
          ))}
        </section>

        {/* CLARUS */}
        <h3 className="color-title">CAEMENTUM CLARUS</h3>
        <section className="gallery-grid">
          {[caementumClarus01, caementumClarus02].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(8 + i)}
              loading="lazy"
              alt={`CAEMENTUM CLARUS ${i + 1}`}
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
