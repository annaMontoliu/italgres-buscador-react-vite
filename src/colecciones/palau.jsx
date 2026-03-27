// src/colecciones/palau.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS
import palau1 from "../assets/imagenes/palau/palau-01.jpg";
import palau2 from "../assets/imagenes/palau/palau-02.jpg";
import palau3 from "../assets/imagenes/palau/palau-03.jpg";
import palau4 from "../assets/imagenes/palau/palau-04.jpg";

// ARRAY IMÁGENES
const images = [
  palau1,
  palau2,
  palau3,
  palau4,
];

export function Palau({ onGoHome }) {
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
      <Header onGoHome={onGoHome} />

      <main>
        {/* BLOQUE BOUTIQUE */}
        <div className="boutique-header">
          <div className="breadcrumbs">
            <span>BOUTIQUE</span> / <span>A</span> / <span>A5</span> / <span>PALAU</span>
          </div>

          <h1 className="titulo-coleccion">PALAU</h1>

          <p className="coleccion-info">8''X8'' · VIVES</p>
          <p className="coleccion-ubicacion">A5</p>

          <a href="/PALAU.pdf" target="_blank" className="btn-more-info">
            MORE INFO
          </a>
        </div>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/PALAU.pdf" />

        {/* GALERÍA */}
        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`PALAU ${index + 1}`}
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