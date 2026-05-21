// src/colecciones/nordic.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// NORDIC WHITE
import nordicWhite01 from "../assets/imagenes/nordic/nordic-white/nordic-white-01.jpg";

// NORDIC SILVER
import nordicSilver01 from "../assets/imagenes/nordic/nordic-silver/nordic-silver-01.jpg";
import nordicSilver02 from "../assets/imagenes/nordic/nordic-silver/nordic-silver-02.jpg";
import nordicSilver03 from "../assets/imagenes/nordic/nordic-silver/nordic-silver-03.jpg";
import nordicSilver04 from "../assets/imagenes/nordic/nordic-silver/nordic-silver-04.jpg";
import nordicSilver05 from "../assets/imagenes/nordic/nordic-silver/nordic-silver-05.jpg";
import nordicSilver06 from "../assets/imagenes/nordic/nordic-silver/nordic-silver-06.jpg";
import nordicSilver07 from "../assets/imagenes/nordic/nordic-silver/nordic-silver-07.jpg";
import nordicSilver08 from "../assets/imagenes/nordic/nordic-silver/nordic-silver-08.jpg";
import nordicSilver09 from "../assets/imagenes/nordic/nordic-silver/nordic-silver-09.jpg";
import nordicSilver10 from "../assets/imagenes/nordic/nordic-silver/nordic-silver-10.jpg";
import nordicSilver11 from "../assets/imagenes/nordic/nordic-silver/nordic-silver-11.jpg";

const images = [
  nordicWhite01,

  nordicSilver01,
  nordicSilver02,
  nordicSilver03,
  nordicSilver04,
  nordicSilver05,
  nordicSilver06,
  nordicSilver07,
  nordicSilver08,
  nordicSilver09,
  nordicSilver10,
  nordicSilver11,
];

export function Nordic({ onGoHome }) {
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
        <h1 className="titulo-coleccion">NORDIC</h1>

        <ColeccionLayout infoUrl="https://saxolia.it/Nordic-catalogue.pdf" />

        <h3 className="color-title">NORDIC WHITE</h3>
        <section className="gallery-grid">
          <img
            src={nordicWhite01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="NORDIC WHITE 01"
          />
        </section>

        <h3 className="color-title">NORDIC SILVER</h3>
        <section className="gallery-grid">
          {[
            nordicSilver01,
            nordicSilver02,
            nordicSilver03,
            nordicSilver04,
            nordicSilver05,
            nordicSilver06,
            nordicSilver07,
            nordicSilver08,
            nordicSilver09,
            nordicSilver10,
            nordicSilver11,
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index + 1)}
              loading="lazy"
              alt={`NORDIC SILVER ${String(index + 1).padStart(2, "0")}`}
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