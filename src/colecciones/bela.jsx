// src/colecciones/bela.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";
import { ShowroomColors } from "../components/ShowroomColors";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

// SAND (6 fotos)
import belaSand1 from "../assets/imagenes/bela/bela-sand/bela-sand-01.jpg";
import belaSand2 from "../assets/imagenes/bela/bela-sand/bela-sand-02.jpg";
import belaSand3 from "../assets/imagenes/bela/bela-sand/bela-sand-03.jpg";
import belaSand4 from "../assets/imagenes/bela/bela-sand/bela-sand-04.jpg";
import belaSand5 from "../assets/imagenes/bela/bela-sand/bela-sand-05.jpg";
import belaSand6 from "../assets/imagenes/bela/bela-sand/bela-sand-06.jpg";

// DESERT (2 fotos)
import belaDesert1 from "../assets/imagenes/bela/bela-desert/bela-desert-01.jpg";
import belaDesert2 from "../assets/imagenes/bela/bela-desert/bela-desert-02.jpg";

// GREY (2 fotos)
import belaGrey1 from "../assets/imagenes/bela/bela-grey/bela-grey-01.jpg";
import belaGrey2 from "../assets/imagenes/bela/bela-grey/bela-grey-02.jpg";

// BLACK (1 foto)
import belaBlack1 from "../assets/imagenes/bela/bela-black/bela-black-01.jpg";

// IMPORTS TACOS (showroom)
import tacoBelaSand from "../assets/imagenes/bela/tacos-bela/taco-bela-sand.jpg";
import tacoBelaDesert from "../assets/imagenes/bela/tacos-bela/taco-bela-desert.jpg";
import tacoBelaGrey from "../assets/imagenes/bela/tacos-bela/taco-bela-grey.jpg";
import tacoBelaBlack from "../assets/imagenes/bela/tacos-bela/taco-bela-black.jpg";

// ORDEN EXACTO (SAND, DESERT, GREY, BLACK)
const images = [
  // SAND
  belaSand1,
  belaSand2,
  belaSand3,
  belaSand4,
  belaSand5,
  belaSand6,

  // DESERT
  belaDesert1,
  belaDesert2,

  // GREY
  belaGrey1,
  belaGrey2,

  // BLACK
  belaBlack1,
];

export function Bela({ onGoHome }) {
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
        {/* Título */}
        <h1 className="titulo-coleccion">BELA</h1>

        {/* SHOWROOM COLORS (TACOS) */}
        <ShowroomColors
          title="showroom colors"
          items={[
            { label: "SAND", thumb: tacoBelaSand },
            { label: "DESERT", thumb: tacoBelaDesert },
            { label: "GREY", thumb: tacoBelaGrey },
            { label: "BLACK", thumb: tacoBelaBlack },
          ]}
        />

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://d7rh5s3nxmpy4.cloudfront.net/CMP7091/files/2/BELA.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color SAND */}
        <h3 className="color-title">BELA SAND</h3>
        <section className="gallery-grid">
          <img
            src={belaSand1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="BELA SAND 1"
          />
          <img
            src={belaSand2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="BELA SAND 2"
          />
          <img
            src={belaSand3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="BELA SAND 3"
          />
          <img
            src={belaSand4}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="BELA SAND 4"
          />
          <img
            src={belaSand5}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="BELA SAND 5"
          />
          <img
            src={belaSand6}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="BELA SAND 6"
          />
        </section>

        {/* Color DESERT */}
        <h3 className="color-title">BELA DESERT</h3>
        <section className="gallery-grid">
          <img
            src={belaDesert1}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="BELA DESERT 1"
          />
          <img
            src={belaDesert2}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="BELA DESERT 2"
          />
        </section>

        {/* Color GREY */}
        <h3 className="color-title">BELA GREY</h3>
        <section className="gallery-grid">
          <img
            src={belaGrey1}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="BELA GREY 1"
          />
          <img
            src={belaGrey2}
            className="gallery-img"
            onClick={() => openModal(9)}
            loading="lazy"
            alt="BELA GREY 2"
          />
        </section>

        {/* Color BLACK */}
        <h3 className="color-title">BELA BLACK</h3>
        <section className="gallery-grid">
          <img
            src={belaBlack1}
            className="gallery-img"
            onClick={() => openModal(10)}
            loading="lazy"
            alt="BELA BLACK 1"
          />
        </section>
      </main>

      {/* ---- MODAL REUTILIZABLE ---- */}
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