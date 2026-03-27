// src/colecciones/terralma.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS
import terralma1 from "../assets/imagenes/terralma/terralma-01.jpg";
import terralma2 from "../assets/imagenes/terralma/terralma-02.jpg";
import terralma3 from "../assets/imagenes/terralma/terralma-03.jpg";
import terralma4 from "../assets/imagenes/terralma/terralma-04.jpg";
import terralma5 from "../assets/imagenes/terralma/terralma-05.jpg";
import terralma6 from "../assets/imagenes/terralma/terralma-06.jpg";
import terralma7 from "../assets/imagenes/terralma/terralma-07.jpg";
import terralma8 from "../assets/imagenes/terralma/terralma-08.jpg";
import terralma9 from "../assets/imagenes/terralma/terralma-09.jpg";
import terralma10 from "../assets/imagenes/terralma/terralma-10.jpg";
import terralma11 from "../assets/imagenes/terralma/terralma-11.jpg";
import terralma12 from "../assets/imagenes/terralma/terralma-12.jpg";

// ARRAY IMÁGENES
const images = [
  terralma1,
  terralma2,
  terralma3,
  terralma4,
  terralma5,
  terralma6,
  terralma7,
  terralma8,
  terralma9,
  terralma10,
  terralma11,
  terralma12,
];

export function Terralma({ onGoHome }) {
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
            <span>BOUTIQUE</span> / <span>A</span> / <span>A5</span> / <span>TERRALMA</span>
          </div>

          <h1 className="titulo-coleccion">TERRALMA</h1>

          <p className="coleccion-info">3''X14'' · PORTOBELLO</p>
          <p className="coleccion-ubicacion">A5</p>

          <a href="/TERRALMA.pdf" target="_blank" className="btn-more-info">
            MORE INFO
          </a>
        </div>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/TERRALMA.pdf" />

        {/* GALERÍA */}
        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`TERRALMA ${index + 1}`}
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