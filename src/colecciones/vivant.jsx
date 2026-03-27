// src/colecciones/vivant.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS
import vivant1 from "../assets/imagenes/vivant/vivant-01.jpg";
import vivant2 from "../assets/imagenes/vivant/vivant-02.jpg";
import vivant3 from "../assets/imagenes/vivant/vivant-03.jpg";
import vivant4 from "../assets/imagenes/vivant/vivant-04.jpg";
import vivant5 from "../assets/imagenes/vivant/vivant-05.jpg";
import vivant6 from "../assets/imagenes/vivant/vivant-06.jpg";
import vivant7 from "../assets/imagenes/vivant/vivant-07.jpg";
import vivant8 from "../assets/imagenes/vivant/vivant-08.jpg";
import vivant9 from "../assets/imagenes/vivant/vivant-09.jpg";
import vivant10 from "../assets/imagenes/vivant/vivant-10.jpg";
import vivant11 from "../assets/imagenes/vivant/vivant-11.jpg";
import vivant12 from "../assets/imagenes/vivant/vivant-12.jpg";
import vivant13 from "../assets/imagenes/vivant/vivant-13.jpg";
import vivant14 from "../assets/imagenes/vivant/vivant-14.jpg";
import vivant15 from "../assets/imagenes/vivant/vivant-15.jpg";
import vivant16 from "../assets/imagenes/vivant/vivant-16.jpg";
import vivant17 from "../assets/imagenes/vivant/vivant-17.jpg";
import vivant18 from "../assets/imagenes/vivant/vivant-18.jpg";
import vivant19 from "../assets/imagenes/vivant/vivant-19.jpg";
import vivant20 from "../assets/imagenes/vivant/vivant-20.jpg";

// ARRAY IMÁGENES
const images = [
  vivant1,
  vivant2,
  vivant3,
  vivant4,
  vivant5,
  vivant6,
  vivant7,
  vivant8,
  vivant9,
  vivant10,
  vivant11,
  vivant12,
  vivant13,
  vivant14,
  vivant15,
  vivant16,
  vivant17,
  vivant18,
  vivant19,
  vivant20,
];

export function Vivant({ onGoHome }) {
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
            <span>BOUTIQUE</span> / <span>A</span> / <span>A5</span> / <span>VIVANT</span>
          </div>

          <h1 className="titulo-coleccion">VIVANT</h1>

          <p className="coleccion-info">3''X10'' · PORTOBELLO</p>
          <p className="coleccion-ubicacion">A5</p>

          <a href="/VIVANT.pdf" target="_blank" className="btn-more-info">
            MORE INFO
          </a>
        </div>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/VIVANT.pdf" />

        {/* GALERÍA */}
        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`VIVANT ${index + 1}`}
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