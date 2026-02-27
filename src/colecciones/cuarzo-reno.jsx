// src/colecciones/cuarzo-reno.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// Ruta verificada:
// /src/assets/imagenes/cuarzo-reno/cuarzo-reno/
// =====================

import cuarzoReno01 from "../assets/imagenes/cuarzo-reno/cuarzo-reno-01.jpg";
import cuarzoReno02 from "../assets/imagenes/cuarzo-reno/cuarzo-reno-02.jpg";
import cuarzoReno03 from "../assets/imagenes/cuarzo-reno/cuarzo-reno-03.jpg";
import cuarzoReno04 from "../assets/imagenes/cuarzo-reno/cuarzo-reno-04.jpg";

const images = [
  cuarzoReno01, // 0
  cuarzoReno02, // 1
  cuarzoReno03, // 2
  cuarzoReno04, // 3
];

export function CuarzoReno({ onGoHome }) {
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
        <h1 className="titulo-coleccion">CUARZO RENO</h1>

        <ColeccionLayout infoUrl="https://www.grespania.com/es/pdf-collection/30" />

        <section className="gallery-grid">
          <img
            src={cuarzoReno01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="CUARZO RENO 01"
          />
          <img
            src={cuarzoReno02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="CUARZO RENO 02"
          />
          <img
            src={cuarzoReno03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="CUARZO RENO 03"
          />
          <img
            src={cuarzoReno04}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="CUARZO RENO 04"
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