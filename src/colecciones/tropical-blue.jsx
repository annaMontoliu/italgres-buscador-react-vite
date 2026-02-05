// src/colecciones/tropical-blue.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE FOTOS (5)
import tb1 from "../assets/imagenes/tropical-blue/tropical-blue-01.jpg";
import tb2 from "../assets/imagenes/tropical-blue/tropical-blue-02.jpg";
import tb3 from "../assets/imagenes/tropical-blue/tropical-blue-03.jpg";
import tb4 from "../assets/imagenes/tropical-blue/tropical-blue-04.jpg";
import tb5 from "../assets/imagenes/tropical-blue/tropical-blue-05.jpg";

// ARRAY GLOBAL
const images = [tb1, tb2, tb3, tb4, tb5];

export function TropicalBlue({ onGoHome }) {
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
        {/* Título */}
        <h1 className="titulo-coleccion">TROPICAL BLUE</h1>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout
          infoUrl="https://www.fapceramiche.com/en/products/fap-maxxi/tropical-blue/gres/"
        />

        {/* ---- GALERÍA ---- */}
        <h3 className="color-title">TROPICAL BLUE</h3>
        <section className="gallery-grid">
          <img src={tb1} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="TROPICAL BLUE 1" />
          <img src={tb2} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="TROPICAL BLUE 2" />
          <img src={tb3} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="TROPICAL BLUE 3" />
          <img src={tb4} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="TROPICAL BLUE 4" />
          <img src={tb5} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="TROPICAL BLUE 5" />
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
