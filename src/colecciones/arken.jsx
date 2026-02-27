// src/colecciones/arken.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// Ruta verificada:
// /src/assets/imagenes/arken/arken-grey/
// =====================

import arkenGrey01 from "../assets/imagenes/arken/arken-grey/arken-grey-01.jpg";
import arkenGrey02 from "../assets/imagenes/arken/arken-grey/arken-grey-02.jpg";
import arkenGrey03 from "../assets/imagenes/arken/arken-grey/arken-grey-03.jpg";
import arkenGrey04 from "../assets/imagenes/arken/arken-grey/arken-grey-04.jpg";

const images = [
  arkenGrey01, // 0
  arkenGrey02, // 1
  arkenGrey03, // 2
  arkenGrey04, // 3
];

export function Arken({ onGoHome }) {
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
        <h1 className="titulo-coleccion">ARKEN</h1>

        <ColeccionLayout infoUrl="https://www.grespania.com/en/pdf-collection/232" />

        {/* ARKEN GREY */}
        <h3 className="color-title">ARKEN GREY</h3>
        <section className="gallery-grid">
          <img
            src={arkenGrey01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="ARKEN GREY 01"
          />
          <img
            src={arkenGrey02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="ARKEN GREY 02"
          />
          <img
            src={arkenGrey03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="ARKEN GREY 03"
          />
          <img
            src={arkenGrey04}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="ARKEN GREY 04"
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