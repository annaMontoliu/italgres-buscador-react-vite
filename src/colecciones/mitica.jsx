// src/colecciones/mitica.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import miticaTudons01 from "../assets/imagenes/mitica/mitica-tudons/mitica-tudons-01.jpg";
import miticaTudons02 from "../assets/imagenes/mitica/mitica-tudons/mitica-tudons-02.jpg";

import miticaNaveta01 from "../assets/imagenes/mitica/mitica-naveta/mitica-naveta-01.jpg";

// ORDEN EXACTO
const images = [
  miticaTudons01,
  miticaTudons02,
  miticaNaveta01
];

export function Mitica({ onGoHome }) {
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
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">MITICA</h1>

        <ColeccionLayout infoUrl="https://www.grespania.com/es/pdf-collection/27" />

        {/* Color TUDONS */}
        <h3 className="color-title">MITICA TUDONS</h3>
        <section className="gallery-grid">
          <img
            src={miticaTudons01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="MITICA TUDONS 01"
          />
          <img
            src={miticaTudons02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="MITICA TUDONS 02"
          />
        </section>

        {/* Color NAVETA */}
        <h3 className="color-title">MITICA NAVETA</h3>
        <section className="gallery-grid">
          <img
            src={miticaNaveta01}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="MITICA NAVETA 01"
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