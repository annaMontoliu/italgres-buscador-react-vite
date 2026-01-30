// src/colecciones/mycro.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";
import { ShowroomColors } from "../components/ShowroomColors";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

// WHITE (WX) - 4 FOTOS
import mycroWhite1 from "../assets/imagenes/mycro/mycro-white/mycro-white-01.jpg";
import mycroWhite2 from "../assets/imagenes/mycro/mycro-white/mycro-white-02.jpg";
import mycroWhite3 from "../assets/imagenes/mycro/mycro-white/mycro-white-03.jpg";
import mycroWhite4 from "../assets/imagenes/mycro/mycro-white/mycro-white-04.jpg";

// ARGENTO (AG) - 3 FOTOS
import mycroArgento1 from "../assets/imagenes/mycro/mycro-argento/mycro-argento-01.jpg";
import mycroArgento2 from "../assets/imagenes/mycro/mycro-argento/mycro-argento-02.jpg";
import mycroArgento3 from "../assets/imagenes/mycro/mycro-argento/mycro-argento-03.jpg";

// ALMOND (A) - 2 FOTOS
import mycroAlmond1 from "../assets/imagenes/mycro/mycro-almond/mycro-almond-01.jpg";
import mycroAlmond2 from "../assets/imagenes/mycro/mycro-almond/mycro-almond-02.jpg";

// BEIGE (B) - 2 FOTOS
import mycroBeige1 from "../assets/imagenes/mycro/mycro-beige/mycro-beige-01.jpg";
import mycroBeige2 from "../assets/imagenes/mycro/mycro-beige/mycro-beige-02.jpg";

// MIDDLE GREY (MG) - 2 FOTOS
import mycroMiddleGrey1 from "../assets/imagenes/mycro/mycro-middle-grey/mycro-middle-grey-01.jpg";
import mycroMiddleGrey2 from "../assets/imagenes/mycro/mycro-middle-grey/mycro-middle-grey-02.jpg";

// GRIGIO NERO (GN) - 3 FOTOS
import mycroGrigioNero1 from "../assets/imagenes/mycro/mycro-grigio-nero/mycro-grigio-nero-01.jpg";
import mycroGrigioNero2 from "../assets/imagenes/mycro/mycro-grigio-nero/mycro-grigio-nero-02.jpg";
import mycroGrigioNero3 from "../assets/imagenes/mycro/mycro-grigio-nero/mycro-grigio-nero-03.jpg";

// IMPORT PDF (carpeta de pdf)
// Ajusta la ruta si tu carpeta de pdfs es distinta
import mycroPdf from "../public/pdf/MYCRO.pdf";

// IMPORTS TACOS (showroom)
import tacoMycroWhite from "../assets/imagenes/mycro/mycro-tacos/taco-mycro-white.jpg";
import tacoMycroArgento from "../assets/imagenes/mycro/mycro-tacos/taco-mycro-argento.jpg";
import tacoMycroAlmond from "../assets/imagenes/mycro/mycro-tacos/taco-mycro-almond.jpg";
import tacoMycroBeige from "../assets/imagenes/mycro/mycro-tacos/taco-mycro-beige.jpg";
import tacoMycroMiddleGrey from "../assets/imagenes/mycro/mycro-tacos/taco-mycro-middle-grey.jpg";
import tacoMycroGrigioNero from "../assets/imagenes/mycro/mycro-tacos/taco-mycro-grigio-nero.jpg";

// ORDEN EXACTO (WHITE, ARGENTO, ALMOND, BEIGE, MIDDLE GREY, GRIGIO NERO)
const images = [
  // WHITE (4)
  mycroWhite1,
  mycroWhite2,
  mycroWhite3,
  mycroWhite4,

  // ARGENTO (3)
  mycroArgento1,
  mycroArgento2,
  mycroArgento3,

  // ALMOND (2)
  mycroAlmond1,
  mycroAlmond2,

  // BEIGE (2)
  mycroBeige1,
  mycroBeige2,

  // MIDDLE GREY (2)
  mycroMiddleGrey1,
  mycroMiddleGrey2,

  // GRIGIO NERO (3)
  mycroGrigioNero1,
  mycroGrigioNero2,
  mycroGrigioNero3,
];

export function Mycro({ onGoHome }) {
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
        <h1 className="titulo-coleccion">MYCRO</h1>

        {/* SHOWROOM COLORS (TACOS) */}
        <ShowroomColors
          title="showroom colors"
          items={[
            { label: "WHITE", thumb: tacoMycroWhite },
            { label: "ARGENTO", thumb: tacoMycroArgento },
            { label: "ALMOND", thumb: tacoMycroAlmond },
            { label: "BEIGE", thumb: tacoMycroBeige },
            { label: "MIDDLE GREY", thumb: tacoMycroMiddleGrey },
            { label: "GRIGIO NERO", thumb: tacoMycroGrigioNero },
          ]}
        />

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl={mycroPdf} />

        {/* ---- GALERÍA ---- */}

        {/* WHITE (WX) */}
        <h3 className="color-title">MYCRO WHITE</h3>
        <section className="gallery-grid">
          <img
            src={mycroWhite1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="MYCRO WHITE 1"
          />
          <img
            src={mycroWhite2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="MYCRO WHITE 2"
          />
          <img
            src={mycroWhite3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="MYCRO WHITE 3"
          />
          <img
            src={mycroWhite4}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="MYCRO WHITE 4"
          />
        </section>

        {/* ARGENTO (AG) */}
        <h3 className="color-title">MYCRO ARGENTO</h3>
        <section className="gallery-grid">
          <img
            src={mycroArgento1}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="MYCRO ARGENTO 1"
          />
          <img
            src={mycroArgento2}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="MYCRO ARGENTO 2"
          />
          <img
            src={mycroArgento3}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="MYCRO ARGENTO 3"
          />
        </section>

        {/* ALMOND (A) */}
        <h3 className="color-title">MYCRO ALMOND</h3>
        <section className="gallery-grid">
          <img
            src={mycroAlmond1}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="MYCRO ALMOND 1"
          />
          <img
            src={mycroAlmond2}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="MYCRO ALMOND 2"
          />
        </section>

        {/* BEIGE (B) */}
        <h3 className="color-title">MYCRO BEIGE</h3>
        <section className="gallery-grid">
          <img
            src={mycroBeige1}
            className="gallery-img"
            onClick={() => openModal(9)}
            loading="lazy"
            alt="MYCRO BEIGE 1"
          />
          <img
            src={mycroBeige2}
            className="gallery-img"
            onClick={() => openModal(10)}
            loading="lazy"
            alt="MYCRO BEIGE 2"
          />
        </section>

        {/* MIDDLE GREY (MG) */}
        <h3 className="color-title">MYCRO MIDDLE GREY</h3>
        <section className="gallery-grid">
          <img
            src={mycroMiddleGrey1}
            className="gallery-img"
            onClick={() => openModal(11)}
            loading="lazy"
            alt="MYCRO MIDDLE GREY 1"
          />
          <img
            src={mycroMiddleGrey2}
            className="gallery-img"
            onClick={() => openModal(12)}
            loading="lazy"
            alt="MYCRO MIDDLE GREY 2"
          />
        </section>

        {/* GRIGIO NERO (GN) */}
        <h3 className="color-title">MYCRO GRIGIO NERO</h3>
        <section className="gallery-grid">
          <img
            src={mycroGrigioNero1}
            className="gallery-img"
            onClick={() => openModal(13)}
            loading="lazy"
            alt="MYCRO GRIGIO NERO 1"
          />
          <img
            src={mycroGrigioNero2}
            className="gallery-img"
            onClick={() => openModal(14)}
            loading="lazy"
            alt="MYCRO GRIGIO NERO 2"
          />
          <img
            src={mycroGrigioNero3}
            className="gallery-img"
            onClick={() => openModal(15)}
            loading="lazy"
            alt="MYCRO GRIGIO NERO 3"
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
