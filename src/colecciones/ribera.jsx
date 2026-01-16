// src/colecciones/ribera.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORT FOTOS (2)
import riberaMarfil1 from "../assets/imagenes/ribera/ribera-marfil/ribera-marfil-01.jpg";
import riberaMarfil2 from "../assets/imagenes/ribera/ribera-marfil/ribera-marfil-02.jpg";

// ORDEN EXACTO
const images = [riberaMarfil1, riberaMarfil2];

export function Ribera({ onGoHome }) {
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
        <h1 className="titulo-coleccion">RIBERA</h1>

        <ColeccionLayout infoUrl="https://www.grespania.com/es/pdf-collection/433" />

        <h3 className="color-title">RIBERA MARFIL</h3>
        <section className="gallery-grid">
          <img
            src={riberaMarfil1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="RIBERA MARFIL 1"
          />
          <img
            src={riberaMarfil2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="RIBERA MARFIL 2"
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
