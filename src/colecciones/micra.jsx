// src/colecciones/micra.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import micra01 from "../assets/imagenes/micra/micra-01.jpg";
import micra02 from "../assets/imagenes/micra/micra-02.jpg";
import micra03 from "../assets/imagenes/micra/micra-03.jpg";
import micra04 from "../assets/imagenes/micra/micra-04.jpg";
import micra05 from "../assets/imagenes/micra/micra-05.jpg";
import micra06 from "../assets/imagenes/micra/micra-06.jpg";
import micra07 from "../assets/imagenes/micra/micra-07.jpg";
import micra08 from "../assets/imagenes/micra/micra-08.jpg";
import micra09 from "../assets/imagenes/micra/micra-09.jpg";
import micra10 from "../assets/imagenes/micra/micra-10.jpg";
import micra11 from "../assets/imagenes/micra/micra-11.jpg";
import micra12 from "../assets/imagenes/micra/micra-12.jpg";
import micra13 from "../assets/imagenes/micra/micra-13.jpg";
import micra14 from "../assets/imagenes/micra/micra-14.jpg";
import micra15 from "../assets/imagenes/micra/micra-15.jpg";
import micra16 from "../assets/imagenes/micra/micra-16.jpg";
import micra17 from "../assets/imagenes/micra/micra-17.jpg";
import micra18 from "../assets/imagenes/micra/micra-18.jpg";
import micra19 from "../assets/imagenes/micra/micra-19.jpg";
import micra20 from "../assets/imagenes/micra/micra-20.jpg";
import micra21 from "../assets/imagenes/micra/micra-21.jpg";
import micra22 from "../assets/imagenes/micra/micra-22.jpg";

// ORDEN EXACTO
const images = [
  micra01,
  micra02,
  micra03,
  micra04,
  micra05,
  micra06,
  micra07,
  micra08,
  micra09,
  micra10,
  micra11,
  micra12,
  micra13,
  micra14,
  micra15,
  micra16,
  micra17,
  micra18,
  micra19,
  micra20,
  micra21,
  micra22,
];

export function Micra({ onGoHome }) {
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
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">MICRA</h1>

        <ColeccionLayout infoUrl="/public/pdf/MICRA.pdf" />

        <h3 className="color-title">MICRA</h3>
        <section className="gallery-grid">
          <img
            src={micra01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="MICRA 01"
          />
          <img
            src={micra02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="MICRA 02"
          />
          <img
            src={micra03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="MICRA 03"
          />
          <img
            src={micra04}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="MICRA 04"
          />
          <img
            src={micra05}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="MICRA 05"
          />
          <img
            src={micra06}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="MICRA 06"
          />
          <img
            src={micra07}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="MICRA 07"
          />
          <img
            src={micra08}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="MICRA 08"
          />
          <img
            src={micra09}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="MICRA 09"
          />
          <img
            src={micra10}
            className="gallery-img"
            onClick={() => openModal(9)}
            loading="lazy"
            alt="MICRA 10"
          />
          <img
            src={micra11}
            className="gallery-img"
            onClick={() => openModal(10)}
            loading="lazy"
            alt="MICRA 11"
          />
          <img
            src={micra12}
            className="gallery-img"
            onClick={() => openModal(11)}
            loading="lazy"
            alt="MICRA 12"
          />
          <img
            src={micra13}
            className="gallery-img"
            onClick={() => openModal(12)}
            loading="lazy"
            alt="MICRA 13"
          />
          <img
            src={micra14}
            className="gallery-img"
            onClick={() => openModal(13)}
            loading="lazy"
            alt="MICRA 14"
          />
          <img
            src={micra15}
            className="gallery-img"
            onClick={() => openModal(14)}
            loading="lazy"
            alt="MICRA 15"
          />
          <img
            src={micra16}
            className="gallery-img"
            onClick={() => openModal(15)}
            loading="lazy"
            alt="MICRA 16"
          />
          <img
            src={micra17}
            className="gallery-img"
            onClick={() => openModal(16)}
            loading="lazy"
            alt="MICRA 17"
          />
          <img
            src={micra18}
            className="gallery-img"
            onClick={() => openModal(17)}
            loading="lazy"
            alt="MICRA 18"
          />
          <img
            src={micra19}
            className="gallery-img"
            onClick={() => openModal(18)}
            loading="lazy"
            alt="MICRA 19"
          />
          <img
            src={micra20}
            className="gallery-img"
            onClick={() => openModal(19)}
            loading="lazy"
            alt="MICRA 20"
          />
          <img
            src={micra21}
            className="gallery-img"
            onClick={() => openModal(20)}
            loading="lazy"
            alt="MICRA 21"
          />
          <img
            src={micra22}
            className="gallery-img"
            onClick={() => openModal(21)}
            loading="lazy"
            alt="MICRA 22"
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