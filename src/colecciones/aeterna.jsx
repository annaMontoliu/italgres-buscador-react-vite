// src/colecciones/aeterna.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// AETERNA BIANCO
import aeternaBianco01 from "../assets/imagenes/aeterna/aeterna-bianco/aeterna-bianco-01.jpg";
import aeternaBianco02 from "../assets/imagenes/aeterna/aeterna-bianco/aeterna-bianco-02.jpg";
import aeternaBianco03 from "../assets/imagenes/aeterna/aeterna-bianco/aeterna-bianco-03.jpg";
import aeternaBianco04 from "../assets/imagenes/aeterna/aeterna-bianco/aeterna-bianco-04.jpg";
import aeternaBianco05 from "../assets/imagenes/aeterna/aeterna-bianco/aeterna-bianco-05.jpg";
import aeternaBianco06 from "../assets/imagenes/aeterna/aeterna-bianco/aeterna-bianco-06.jpg";

// AETERNA AVORIO
import aeternaAvorio01 from "../assets/imagenes/aeterna/aeterna-avorio/aeterna-avorio-01.jpg";
import aeternaAvorio02 from "../assets/imagenes/aeterna/aeterna-avorio/aeterna-avorio-02.jpg";
import aeternaAvorio03 from "../assets/imagenes/aeterna/aeterna-avorio/aeterna-avorio-03.jpg";
import aeternaAvorio04 from "../assets/imagenes/aeterna/aeterna-avorio/aeterna-avorio-04.jpg";
import aeternaAvorio05 from "../assets/imagenes/aeterna/aeterna-avorio/aeterna-avorio-05.jpg";
import aeternaAvorio06 from "../assets/imagenes/aeterna/aeterna-avorio/aeterna-avorio-06.jpg";

// ORDEN EXACTO
const images = [
  aeternaBianco01,
  aeternaBianco02,
  aeternaBianco03,
  aeternaBianco04,
  aeternaBianco05,
  aeternaBianco06,

  aeternaAvorio01,
  aeternaAvorio02,
  aeternaAvorio03,
  aeternaAvorio04,
  aeternaAvorio05,
  aeternaAvorio06,
];

export function Aeterna({ onGoHome }) {
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
        <h1 className="titulo-coleccion">AETERNA</h1>

        <ColeccionLayout infoUrl="/pdf/AETERNA.pdf" />

        {/* AETERNA BIANCO */}
        <h3 className="color-title">AETERNA BIANCO</h3>

        <section className="gallery-grid">
          <img
            src={aeternaBianco01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="AETERNA BIANCO 1"
          />

          <img
            src={aeternaBianco02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="AETERNA BIANCO 2"
          />

          <img
            src={aeternaBianco03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="AETERNA BIANCO 3"
          />

          <img
            src={aeternaBianco04}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="AETERNA BIANCO 4"
          />

          <img
            src={aeternaBianco05}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="AETERNA BIANCO 5"
          />

          <img
            src={aeternaBianco06}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="AETERNA BIANCO 6"
          />
        </section>

        {/* AETERNA AVORIO */}
        <h3 className="color-title">AETERNA AVORIO</h3>

        <section className="gallery-grid">
          <img
            src={aeternaAvorio01}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="AETERNA AVORIO 1"
          />

          <img
            src={aeternaAvorio02}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="AETERNA AVORIO 2"
          />

          <img
            src={aeternaAvorio03}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="AETERNA AVORIO 3"
          />

          <img
            src={aeternaAvorio04}
            className="gallery-img"
            onClick={() => openModal(9)}
            loading="lazy"
            alt="AETERNA AVORIO 4"
          />

          <img
            src={aeternaAvorio05}
            className="gallery-img"
            onClick={() => openModal(10)}
            loading="lazy"
            alt="AETERNA AVORIO 5"
          />

          <img
            src={aeternaAvorio06}
            className="gallery-img"
            onClick={() => openModal(11)}
            loading="lazy"
            alt="AETERNA AVORIO 6"
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