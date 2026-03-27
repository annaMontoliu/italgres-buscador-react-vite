// src/colecciones/organic-clay.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS
import organicClay1 from "../assets/imagenes/organic-clay/organic-clay-01.jpg";
import organicClay2 from "../assets/imagenes/organic-clay/organic-clay-02.jpg";
import organicClay3 from "../assets/imagenes/organic-clay/organic-clay-03.jpg";
import organicClay4 from "../assets/imagenes/organic-clay/organic-clay-04.jpg";
import organicClay5 from "../assets/imagenes/organic-clay/organic-clay-05.jpg";
import organicClay6 from "../assets/imagenes/organic-clay/organic-clay-06.jpg";
import organicClay7 from "../assets/imagenes/organic-clay/organic-clay-07.jpg";
import organicClay8 from "../assets/imagenes/organic-clay/organic-clay-08.jpg";
import organicClay9 from "../assets/imagenes/organic-clay/organic-clay-09.jpg";
import organicClay10 from "../assets/imagenes/organic-clay/organic-clay-10.jpg";
import organicClay11 from "../assets/imagenes/organic-clay/organic-clay-11.jpg";
import organicClay12 from "../assets/imagenes/organic-clay/organic-clay-12.jpg";
import organicClay13 from "../assets/imagenes/organic-clay/organic-clay-13.jpg";
import organicClay14 from "../assets/imagenes/organic-clay/organic-clay-14.jpg";

// ARRAY IMÁGENES
const images = [
  organicClay1,
  organicClay2,
  organicClay3,
  organicClay4,
  organicClay5,
  organicClay6,
  organicClay7,
  organicClay8,
  organicClay9,
  organicClay10,
  organicClay11,
  organicClay12,
  organicClay13,
  organicClay14,
];

export function OrganicClay({ onGoHome }) {
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
            <span>BOUTIQUE</span> / <span>A</span> / <span>A5</span> / <span>ORGANIC CLAY</span>
          </div>

          <h1 className="titulo-coleccion">ORGANIC CLAY</h1>

          <p className="coleccion-info">2''X10'' · PORTOBELLO</p>
          <p className="coleccion-ubicacion">A5</p>

          <a href="/ORGANIC-CLAY.pdf" target="_blank" className="btn-more-info">
            MORE INFO
          </a>
        </div>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/ORGANIC-CLAY.pdf" />

        {/* GALERÍA */}
        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`ORGANIC CLAY ${index + 1}`}
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