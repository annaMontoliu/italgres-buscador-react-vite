// src/colecciones/icon.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";
import { ShowroomColors } from "../components/ShowroomColors";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

// WHITE (1)
import iconWhite01 from "../assets/imagenes/icon/icon-white/icon-white-01.jpg";

// CHAMPAGNE (1)
import iconChampagne01 from "../assets/imagenes/icon/icon-champagne/icon-champagne-01.jpg";

// ALMOND (1)
import iconAlmond01 from "../assets/imagenes/icon/icon-almond/icon-almond-01.jpg";

// BEIGE (2)
import iconBeige01 from "../assets/imagenes/icon/icon-beige/icon-beige-01.jpg";
import iconBeige02 from "../assets/imagenes/icon/icon-beige/icon-beige-02.jpg";

// DARK GREY (1)
import iconDarkGrey01 from "../assets/imagenes/icon/icon-dark-grey/icon-dark-grey-01.jpg";

// BLACK (2)
import iconBlack01 from "../assets/imagenes/icon/icon-black/icon-black-01.jpg";
import iconBlack02 from "../assets/imagenes/icon/icon-black/icon-black-02.jpg";

// IMPORTS TACOS (showroom)
import tacoIconWhite from "../assets/imagenes/icon/icon-tacos/taco-icon-white.jpg";
import tacoIconChampagne from "../assets/imagenes/icon/icon-tacos/taco-icon-champagne.jpg";
import tacoIconAlmond from "../assets/imagenes/icon/icon-tacos/taco-icon-almond.jpg";
import tacoIconBeige from "../assets/imagenes/icon/icon-tacos/taco-icon-beige.jpg";
import tacoIconDarkGrey from "../assets/imagenes/icon/icon-tacos/taco-icon-dark-grey.jpg";
import tacoIconBlack from "../assets/imagenes/icon/icon-tacos/taco-icon-black.jpg";

// ORDEN EXACTO (modal): WHITE, CHAMPAGNE, ALMOND, BEIGE, DARK GREY, BLACK
const images = [
  // WHITE
  iconWhite01,

  // CHAMPAGNE
  iconChampagne01,

  // ALMOND
  iconAlmond01,

  // BEIGE
  iconBeige01,
  iconBeige02,

  // DARK GREY
  iconDarkGrey01,

  // BLACK
  iconBlack01,
  iconBlack02,
];

export function Icon({ onGoHome }) {
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
        <h1 className="titulo-coleccion">ICON</h1>

        {/* SHOWROOM COLORS (TACOS) */}
        <ShowroomColors
          title="showroom colors"
          items={[
            { label: "WHITE", thumb: tacoIconWhite },
            { label: "CHAMPAGNE", thumb: tacoIconChampagne },
            { label: "ALMOND", thumb: tacoIconAlmond },
            { label: "BEIGE", thumb: tacoIconBeige },
            { label: "DARK GREY", thumb: tacoIconDarkGrey },
            { label: "BLACK", thumb: tacoIconBlack },
          ]}
        />

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/ICON.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color WHITE */}
        <h3 className="color-title">ICON WHITE</h3>
        <section className="gallery-grid">
          <img
            src={iconWhite01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="ICON WHITE 1"
          />
        </section>

        {/* Color CHAMPAGNE */}
        <h3 className="color-title">ICON CHAMPAGNE</h3>
        <section className="gallery-grid">
          <img
            src={iconChampagne01}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="ICON CHAMPAGNE 1"
          />
        </section>

        {/* Color ALMOND */}
        <h3 className="color-title">ICON ALMOND</h3>
        <section className="gallery-grid">
          <img
            src={iconAlmond01}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="ICON ALMOND 1"
          />
        </section>

        {/* Color BEIGE */}
        <h3 className="color-title">ICON BEIGE</h3>
        <section className="gallery-grid">
          <img
            src={iconBeige01}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="ICON BEIGE 1"
          />
          <img
            src={iconBeige02}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="ICON BEIGE 2"
          />
        </section>

        {/* Color DARK GREY */}
        <h3 className="color-title">ICON DARK GREY</h3>
        <section className="gallery-grid">
          <img
            src={iconDarkGrey01}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="ICON DARK GREY 1"
          />
        </section>

        {/* Color BLACK */}
        <h3 className="color-title">ICON BLACK</h3>
        <section className="gallery-grid">
          <img
            src={iconBlack01}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="ICON BLACK 1"
          />
          <img
            src={iconBlack02}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="ICON BLACK 2"
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
