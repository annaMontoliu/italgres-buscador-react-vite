// src/colecciones/mycro.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";
import { ShowroomColors } from "../components/ShowroomColors";

// WHITE (4)
import mycroWhite1 from "../assets/imagenes/mycro/mycro-white/mycro-white-01.jpg";
import mycroWhite2 from "../assets/imagenes/mycro/mycro-white/mycro-white-02.jpg";
import mycroWhite3 from "../assets/imagenes/mycro/mycro-white/mycro-white-03.jpg";
import mycroWhite4 from "../assets/imagenes/mycro/mycro-white/mycro-white-04.jpg";

// ARGENTO (3)
import mycroArgento1 from "../assets/imagenes/mycro/mycro-argento/mycro-argento-01.jpg";
import mycroArgento2 from "../assets/imagenes/mycro/mycro-argento/mycro-argento-02.jpg";
import mycroArgento3 from "../assets/imagenes/mycro/mycro-argento/mycro-argento-03.jpg";

// ALMOND (2)
import mycroAlmond1 from "../assets/imagenes/mycro/mycro-almond/mycro-almond-01.jpg";
import mycroAlmond2 from "../assets/imagenes/mycro/mycro-almond/mycro-almond-02.jpg";

// BEIGE (2)
import mycroBeige1 from "../assets/imagenes/mycro/mycro-beige/mycro-beige-01.jpg";
import mycroBeige2 from "../assets/imagenes/mycro/mycro-beige/mycro-beige-02.jpg";

// MIDDLE GREY (2)
import mycroMiddleGrey1 from "../assets/imagenes/mycro/mycro-middle-grey/mycro-middle-grey-01.jpg";
import mycroMiddleGrey2 from "../assets/imagenes/mycro/mycro-middle-grey/mycro-middle-grey-02.jpg";

// GRIGIO NERO (3)
import mycroGrigioNero1 from "../assets/imagenes/mycro/mycro-grigio-nero/mycro-grigio-nero-01.jpg";
import mycroGrigioNero2 from "../assets/imagenes/mycro/mycro-grigio-nero/mycro-grigio-nero-02.jpg";
import mycroGrigioNero3 from "../assets/imagenes/mycro/mycro-grigio-nero/mycro-grigio-nero-03.jpg";

// TACOS (✅ están en mycro-tacos)
import tacoMycroAlmond from "../assets/imagenes/mycro/mycro-tacos/taco-mycro-almond.jpg";
import tacoMycroArgento from "../assets/imagenes/mycro/mycro-tacos/taco-mycro-argento.jpg";
import tacoMycroBeige from "../assets/imagenes/mycro/mycro-tacos/taco-mycro-beige.jpg";
import tacoMycroGrigioNero from "../assets/imagenes/mycro/mycro-tacos/taco-mycro-grigio-nero.jpg";
import tacoMycroMiddleGrey from "../assets/imagenes/mycro/mycro-tacos/taco-mycro-middle-grey.jpg";
import tacoMycroWhite from "../assets/imagenes/mycro/mycro-tacos/taco-mycro-white.jpg";

// ORDEN GLOBAL MODAL
const images = [
  // WHITE
  mycroWhite1,
  mycroWhite2,
  mycroWhite3,
  mycroWhite4,

  // ARGENTO
  mycroArgento1,
  mycroArgento2,
  mycroArgento3,

  // ALMOND
  mycroAlmond1,
  mycroAlmond2,

  // BEIGE
  mycroBeige1,
  mycroBeige2,

  // MIDDLE GREY
  mycroMiddleGrey1,
  mycroMiddleGrey2,

  // GRIGIO NERO
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
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">MYCRO</h1>

        {/* TACOS */}
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

        {/* PDF (public/pdf) */}
        <ColeccionLayout infoUrl="/pdf/MYCRO.pdf" />

        {/* WHITE */}
        <h3 className="color-title">MYCRO WHITE</h3>
        <section className="gallery-grid">
          {[mycroWhite1, mycroWhite2, mycroWhite3, mycroWhite4].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(i)}
              loading="lazy"
              alt={`MYCRO WHITE ${i + 1}`}
            />
          ))}
        </section>

        {/* ARGENTO */}
        <h3 className="color-title">MYCRO ARGENTO</h3>
        <section className="gallery-grid">
          {[mycroArgento1, mycroArgento2, mycroArgento3].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(4 + i)}
              loading="lazy"
              alt={`MYCRO ARGENTO ${i + 1}`}
            />
          ))}
        </section>

        {/* ALMOND */}
        <h3 className="color-title">MYCRO ALMOND</h3>
        <section className="gallery-grid">
          {[mycroAlmond1, mycroAlmond2].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(7 + i)}
              loading="lazy"
              alt={`MYCRO ALMOND ${i + 1}`}
            />
          ))}
        </section>

        {/* BEIGE */}
        <h3 className="color-title">MYCRO BEIGE</h3>
        <section className="gallery-grid">
          {[mycroBeige1, mycroBeige2].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(9 + i)}
              loading="lazy"
              alt={`MYCRO BEIGE ${i + 1}`}
            />
          ))}
        </section>

        {/* MIDDLE GREY */}
        <h3 className="color-title">MYCRO MIDDLE GREY</h3>
        <section className="gallery-grid">
          {[mycroMiddleGrey1, mycroMiddleGrey2].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(11 + i)}
              loading="lazy"
              alt={`MYCRO MIDDLE GREY ${i + 1}`}
            />
          ))}
        </section>

        {/* GRIGIO NERO */}
        <h3 className="color-title">MYCRO GRIGIO NERO</h3>
        <section className="gallery-grid">
          {[mycroGrigioNero1, mycroGrigioNero2, mycroGrigioNero3].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(13 + i)}
              loading="lazy"
              alt={`MYCRO GRIGIO NERO ${i + 1}`}
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
