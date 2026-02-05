// src/colecciones/chicago.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMÁGENES CHICAGO CLOUD (2)
import chicagoCloud1 from "../assets/imagenes/chicago/chicago-cloud/chicago-cloud-01.jpg";
import chicagoCloud2 from "../assets/imagenes/chicago/chicago-cloud/chicago-cloud-02.jpg";

// IMÁGENES CHICAGO MOON (1)
import chicagoMoon1 from "../assets/imagenes/chicago/chicago-moon/chicago-moon-01.jpg";

// IMÁGENES CHICAGO ROAD (2)
import chicagoRoad1 from "../assets/imagenes/chicago/chicago-road/chicago-road-01.jpg";
import chicagoRoad2 from "../assets/imagenes/chicago/chicago-road/chicago-road-02.jpg";

// ARRAY GLOBAL PARA EL MODAL
// Orden: CLOUD (2) → MOON (1) → ROAD (2)
const images = [
  // CLOUD
  chicagoCloud1,
  chicagoCloud2,

  // MOON
  chicagoMoon1,

  // ROAD
  chicagoRoad1,
  chicagoRoad2,
];

export function Chicago({ onGoHome }) {
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
        <h1 className="titulo-coleccion">CHICAGO</h1>

        {/* FINISHES & FORMATS - PDF local */}
        <ColeccionLayout infoUrl="/pdf/CHICAGO.pdf" />

        {/* ---------- GALERÍA ---------- */}

        {/* CHICAGO CLOUD */}
        <h3 className="color-title">CHICAGO CLOUD</h3>
        <section className="gallery-grid">
          <img
            src={chicagoCloud1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="CHICAGO CLOUD 1"
          />
          <img
            src={chicagoCloud2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="CHICAGO CLOUD 2"
          />
        </section>

        {/* CHICAGO MOON */}
        <h3 className="color-title">CHICAGO MOON</h3>
        <section className="gallery-grid">
          <img
            src={chicagoMoon1}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="CHICAGO MOON 1"
          />
        </section>

        {/* CHICAGO ROAD */}
        <h3 className="color-title">CHICAGO ROAD</h3>
        <section className="gallery-grid">
          <img
            src={chicagoRoad1}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="CHICAGO ROAD 1"
          />
          <img
            src={chicagoRoad2}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="CHICAGO ROAD 2"
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
