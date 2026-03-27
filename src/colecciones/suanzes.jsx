// src/colecciones/suanzes.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS
import suanzes1 from "../assets/imagenes/suanzes/suanzes-01.jpg";
import suanzes2 from "../assets/imagenes/suanzes/suanzes-02.jpg";
import suanzes3 from "../assets/imagenes/suanzes/suanzes-03.jpg";
import suanzes4 from "../assets/imagenes/suanzes/suanzes-04.jpg";
import suanzes5 from "../assets/imagenes/suanzes/suanzes-05.jpg";

// ARRAY IMÁGENES
const images = [
  suanzes1,
  suanzes2,
  suanzes3,
  suanzes4,
  suanzes5,
];

export function Suanzes({ onGoHome }) {
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
            <span>BOUTIQUE</span> / <span>A</span> / <span>A5</span> / <span>SUANZES</span>
          </div>

          <h1 className="titulo-coleccion">SUANZES</h1>

          <p className="coleccion-info">8''X8'' · VIVES</p>
          <p className="coleccion-ubicacion">A5 · C5</p>

          <a href="/SUANZES.pdf" target="_blank" className="btn-more-info">
            MORE INFO
          </a>
        </div>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/SUANZES.pdf" />

        {/* GALERÍA */}
        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`SUANZES ${index + 1}`}
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