// src/colecciones/tattoo.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// TATTOO OXIDUM (4)
import tattooOxidum01 from "../assets/imagenes/tattoo/tattoo-oxidum/tattoo-oxidum-01.jpg";
import tattooOxidum02 from "../assets/imagenes/tattoo/tattoo-oxidum/tattoo-oxidum-02.jpg";
import tattooOxidum03 from "../assets/imagenes/tattoo/tattoo-oxidum/tattoo-oxidum-03.jpg";
import tattooOxidum04 from "../assets/imagenes/tattoo/tattoo-oxidum/tattoo-oxidum-04.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [
  tattooOxidum01, // 0
  tattooOxidum02, // 1
  tattooOxidum03, // 2
  tattooOxidum04, // 3
];

export function Tattoo({ onGoHome }) {
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
        <h1 className="titulo-coleccion">TATTOO</h1>

        <ColeccionLayout infoUrl="/pdf/TATTOO.pdf" />

        <h3 className="color-title">TATTOO OXIDUM</h3>
        <section className="gallery-grid">
          <img
            src={tattooOxidum01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="TATTOO OXIDUM 01"
          />
          <img
            src={tattooOxidum02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="TATTOO OXIDUM 02"
          />
          <img
            src={tattooOxidum03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="TATTOO OXIDUM 03"
          />
          <img
            src={tattooOxidum04}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="TATTOO OXIDUM 04"
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