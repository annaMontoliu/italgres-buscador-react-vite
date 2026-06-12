// src/colecciones/palatina.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// PALATINA BLANCO
import palatinaBlanco01 from "../assets/imagenes/palatina/palatina-blanco/palatina-blanco-01.jpg";
import palatinaBlanco02 from "../assets/imagenes/palatina/palatina-blanco/palatina-blanco-02.jpg";
import palatinaBlanco03 from "../assets/imagenes/palatina/palatina-blanco/palatina-blanco-03.jpg";
import palatinaBlanco04 from "../assets/imagenes/palatina/palatina-blanco/palatina-blanco-04.jpg";

// ORDEN EXACTO
const images = [
  palatinaBlanco01,
  palatinaBlanco02,
  palatinaBlanco03,
  palatinaBlanco04,
];

export function Palatina({ onGoHome }) {
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
        <h1 className="titulo-coleccion">PALATINA</h1>

        <ColeccionLayout infoUrl="https://www.halconceramicas.com/pdf_collections/28" />

        <h3 className="color-title">PALATINA BLANCO</h3>

        <section className="gallery-grid">
          <img
            src={palatinaBlanco01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="PALATINA BLANCO 1"
          />

          <img
            src={palatinaBlanco02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="PALATINA BLANCO 2"
          />

          <img
            src={palatinaBlanco03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="PALATINA BLANCO 3"
          />

          <img
            src={palatinaBlanco04}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="PALATINA BLANCO 4"
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