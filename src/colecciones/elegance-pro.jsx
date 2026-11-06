
// src/colecciones/elegance-pro.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";
import { ShowroomColors } from "../components/ShowroomColors";

// =====================
// IMPORTS DE IMÁGENES
// =====================

// WHITE (5)
import eleganceProWhite1 from "../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-1.jpg";
import eleganceProWhite2 from "../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-2.jpg";
import eleganceProWhite3 from "../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-3.jpg";
import eleganceProWhite4 from "../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-4.jpg";
import eleganceProWhite5 from "../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-5.jpg";

// ANTHRACITE (5)
// Se elimina la primera fotografía original (01)
import eleganceProAntracita2 from "../assets/imagenes/elegance-pro/elegance-pro-antracita/elegance-pro-antracita-02.jpg";
import eleganceProAntracita3 from "../assets/imagenes/elegance-pro/elegance-pro-antracita/elegance-pro-antracita-03.jpg";
import eleganceProAntracita4 from "../assets/imagenes/elegance-pro/elegance-pro-antracita/elegance-pro-antracita-04.jpg";
import eleganceProAntracita5 from "../assets/imagenes/elegance-pro/elegance-pro-antracita/elegance-pro-antracita-05.jpg";
import eleganceProAntracita6 from "../assets/imagenes/elegance-pro/elegance-pro-antracita/elegance-pro-antracita-06.jpg";

// DARK GREY (5)
import eleganceProDarkGrey1 from "../assets/imagenes/elegance-pro/elegance-pro-dark-grey/elegance-pro-dark-grey-01.jpg";
import eleganceProDarkGrey2 from "../assets/imagenes/elegance-pro/elegance-pro-dark-grey/elegance-pro-dark-grey-02.jpg";
import eleganceProDarkGrey3 from "../assets/imagenes/elegance-pro/elegance-pro-dark-grey/elegance-pro-dark-grey-03.jpg";
import eleganceProDarkGrey4 from "../assets/imagenes/elegance-pro/elegance-pro-dark-grey/elegance-pro-dark-grey-04.jpg";
import eleganceProDarkGrey5 from "../assets/imagenes/elegance-pro/elegance-pro-dark-grey/elegance-pro-dark-grey-05.jpg";

// IVORY (2)
import eleganceProIvory1 from "../assets/imagenes/elegance-pro/elegance-pro-ivory/elegance-pro-ivory-01.jpg";
import eleganceProIvory2 from "../assets/imagenes/elegance-pro/elegance-pro-ivory/elegance-pro-ivory-02.jpg";

// SAND (1)
import eleganceProSand1 from "../assets/imagenes/elegance-pro/elegance-pro-sand/elegance-pro-sand-01.jpg";

// =====================
// IMPORTS TACOS (SHOWROOM)
// =====================

import tacoEleganceProWhite from "../assets/imagenes/elegance-pro/elegance-pro-tacos/taco-elegance-pro-white.jpg";
import tacoEleganceProAnthracite from "../assets/imagenes/elegance-pro/elegance-pro-tacos/taco-elegance-pro-anthracite.jpg";
import tacoEleganceProDarkGrey from "../assets/imagenes/elegance-pro/elegance-pro-tacos/taco-elegance-pro-dark-grey.jpg";
import tacoEleganceProIvory from "../assets/imagenes/elegance-pro/elegance-pro-tacos/taco-elegance-pro-ivory.jpg";
import tacoEleganceProSand from "../assets/imagenes/elegance-pro/elegance-pro-tacos/taco-elegance-pro-sand.jpg";

// =====================
// GALERÍAS POR COLOR
// =====================

const whiteImages = [
  eleganceProWhite1,
  eleganceProWhite2,
  eleganceProWhite3,
  eleganceProWhite4,
  eleganceProWhite5,
];

const anthraciteImages = [
  eleganceProAntracita2,
  eleganceProAntracita3,
  eleganceProAntracita4,
  eleganceProAntracita5,
  eleganceProAntracita6,
];

const darkGreyImages = [
  eleganceProDarkGrey1,
  eleganceProDarkGrey2,
  eleganceProDarkGrey3,
  eleganceProDarkGrey4,
  eleganceProDarkGrey5,
];

const ivoryImages = [
  eleganceProIvory1,
  eleganceProIvory2,
];

const sandImages = [
  eleganceProSand1,
];

// =====================
// ARRAY GLOBAL DEL MODAL
// WHITE → ANTHRACITE → DARK GREY → IVORY → SAND
// =====================

const images = [
  ...whiteImages,
  ...anthraciteImages,
  ...darkGreyImages,
  ...ivoryImages,
  ...sandImages,
];

export function ElegancePro({ onGoHome }) {
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
        {/* TÍTULO */}
        <h1 className="titulo-coleccion">ELEGANCE PRO</h1>

        {/* SHOWROOM COLORS (TACOS) */}
        <ShowroomColors
          title="showroom colors"
          items={[
            { label: "WHITE", thumb: tacoEleganceProWhite },
            { label: "ANTHRACITE", thumb: tacoEleganceProAnthracite },
            { label: "DARK GREY", thumb: tacoEleganceProDarkGrey },
            { label: "IVORY", thumb: tacoEleganceProIvory },
            { label: "SAND", thumb: tacoEleganceProSand },
          ]}
        />

        {/* FINISHES & FORMATS + MORE INFO */}
        <ColeccionLayout
          infoUrl="https://www.emilgroup.it/emil/prodotti/documenticollezioni_emil/Elegance%20Pro%20Catalogo%202024.12%20Web.pdf"
        />

        {/* WHITE */}
        <h3 className="color-title">ELEGANCE PRO WHITE</h3>
        <section className="gallery-grid">
          {whiteImages.map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(i)}
              loading="lazy"
              alt={`ELEGANCE PRO WHITE ${i + 1}`}
            />
          ))}
        </section>

        {/* ANTHRACITE */}
        <h3 className="color-title">ELEGANCE PRO ANTHRACITE</h3>
        <section className="gallery-grid">
          {anthraciteImages.map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(5 + i)}
              loading="lazy"
              alt={`ELEGANCE PRO ANTHRACITE ${i + 1}`}
            />
          ))}
        </section>

        {/* DARK GREY */}
        <h3 className="color-title">ELEGANCE PRO DARK GREY</h3>
        <section className="gallery-grid">
          {darkGreyImages.map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(10 + i)}
              loading="lazy"
              alt={`ELEGANCE PRO DARK GREY ${i + 1}`}
            />
          ))}
        </section>

        {/* IVORY */}
        <h3 className="color-title">ELEGANCE PRO IVORY</h3>
        <section className="gallery-grid">
          {ivoryImages.map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(15 + i)}
              loading="lazy"
              alt={`ELEGANCE PRO IVORY ${i + 1}`}
            />
          ))}
        </section>

        {/* SAND */}
        <h3 className="color-title">ELEGANCE PRO SAND</h3>
        <section className="gallery-grid">
          {sandImages.map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(17 + i)}
              loading="lazy"
              alt={`ELEGANCE PRO SAND ${i + 1}`}
            />
          ))}
        </section>
      </main>

      {/* MODAL REUTILIZABLE */}
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
