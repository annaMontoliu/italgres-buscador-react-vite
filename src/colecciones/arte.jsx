// src/colecciones/arte.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMÁGENES ARTE CLOUD (2)
import arteCloud1 from "../assets/imagenes/arte/arte-cloud/arte-cloud-01.jpg";
import arteCloud2 from "../assets/imagenes/arte/arte-cloud/arte-cloud-02.jpg";

// IMÁGENES ARTE MOCHA (2)
import arteMocha1 from "../assets/imagenes/arte/arte-mocha/arte-mocha-01.jpg";
import arteMocha2 from "../assets/imagenes/arte/arte-mocha/arte-mocha-02.jpg";

// IMÁGENES ARTE DESERT (3)
import arteDesert1 from "../assets/imagenes/arte/arte-desert/arte-desert-01.jpg";
import arteDesert2 from "../assets/imagenes/arte/arte-desert/arte-desert-02.jpg";
import arteDesert3 from "../assets/imagenes/arte/arte-desert/arte-desert-03.jpg";

// ARRAY GLOBAL PARA EL MODAL
// Orden: CLOUD (2) → MOCHA (2) → DESERT (3)
const images = [
  // CLOUD
  arteCloud1,
  arteCloud2,

  // MOCHA
  arteMocha1,
  arteMocha2,

  // DESERT
  arteDesert1,
  arteDesert2,
  arteDesert3,
];

export function Arte({ onGoHome }) {
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
        {/* Título colección */}
        <h1 className="titulo-coleccion">ARTE</h1>

        {/* FINISHES & FORMATS - PDF local */}
        <ColeccionLayout infoUrl="/pdf/ARTE.pdf" />

        {/* ---------- GALERÍA ---------- */}

        {/* ARTE CLOUD */}
        <h3 className="color-title">ARTE CLOUD</h3>
        <section className="gallery-grid">
          <img
            src={arteCloud1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="ARTE CLOUD 1"
          />
          <img
            src={arteCloud2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="ARTE CLOUD 2"
          />
        </section>

        {/* ARTE MOCHA */}
        <h3 className="color-title">ARTE MOCHA</h3>
        <section className="gallery-grid">
          <img
            src={arteMocha1}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="ARTE MOCHA 1"
          />
          <img
            src={arteMocha2}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="ARTE MOCHA 2"
          />
        </section>

        {/* ARTE DESERT */}
        <h3 className="color-title">ARTE DESERT</h3>
        <section className="gallery-grid">
          <img
            src={arteDesert1}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="ARTE DESERT 1"
          />
          <img
            src={arteDesert2}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="ARTE DESERT 2"
          />
          <img
            src={arteDesert3}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="ARTE DESERT 3"
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
