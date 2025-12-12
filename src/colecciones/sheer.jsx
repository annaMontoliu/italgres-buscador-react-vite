// src/colecciones/sheer.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/sheer/...

// SHEER WHITE
import sheerWhitePlain01 from "../assets/imagenes/sheer/sheer-white/sheer-white-plain/sheer-white-plain-01.jpg";
import sheerWhitePlain02 from "../assets/imagenes/sheer/sheer-white/sheer-white-plain/sheer-white-plain-02.jpg";
import sheerWhiteStick01 from "../assets/imagenes/sheer/sheer-white/sheer-white-stick/sheer-white-stick-01.jpg";

// SHEER BEIGE
import sheerBeigeStick01 from "../assets/imagenes/sheer/sheer-beige/sheer-beige-stick/sheer-beige-stick-01.jpg";
import sheerBeigeStick02 from "../assets/imagenes/sheer/sheer-beige/sheer-beige-stick/sheer-beige-stick-02.jpg";
import sheerBeigeBloomStar01 from "../assets/imagenes/sheer/sheer-beige/sheer-beige-bloom-star/sheer-beige-bloom-star-01.jpg";
import sheerBeigeBloomStar02 from "../assets/imagenes/sheer/sheer-beige/sheer-beige-bloom-star/sheer-beige-bloom-star-02.jpg";
import sheerBeigeBloomStar03 from "../assets/imagenes/sheer/sheer-beige/sheer-beige-bloom-star/sheer-beige-bloom-star-03.jpg";

// SHEER GREY
import sheerGreyPlain01 from "../assets/imagenes/sheer/sheer-grey/sheer-grey-plain/sheer-grey-plain-01.jpg";
import sheerGreyStick01 from "../assets/imagenes/sheer/sheer-grey/sheer-grey-stick/sheer-grey-stick-01.jpg";
import sheerGreyDune01 from "../assets/imagenes/sheer/sheer-grey/sheer-grey-dune/sheer-grey-dune-01.jpg";

// SHEER LEAVES
import sheerLeaves01 from "../assets/imagenes/sheer/sheer-leaves/sheer-leaves-01.jpg";

// SHEER RUST
import sheerRust01 from "../assets/imagenes/sheer/sheer-rust/sheer-rust-01.jpg";
import sheerRust02 from "../assets/imagenes/sheer/sheer-rust/sheer-rust-02.jpg";
import sheerRust03 from "../assets/imagenes/sheer/sheer-rust/sheer-rust-03.jpg";
import sheerRust04 from "../assets/imagenes/sheer/sheer-rust/sheer-rust-04.jpg";

// ORDEN EXACTO COMO EN LA PÁGINA (y por tanto en el modal)
const images = [
  // WHITE
  sheerWhitePlain01,
  sheerWhitePlain02,
  sheerWhiteStick01,

  // BEIGE
  sheerBeigeStick01,
  sheerBeigeStick02,
  sheerBeigeBloomStar01,
  sheerBeigeBloomStar02,
  sheerBeigeBloomStar03,

  // GREY
  sheerGreyPlain01,
  sheerGreyStick01,
  sheerGreyDune01,

  // LEAVES
  sheerLeaves01,

  // RUST
  sheerRust01,
  sheerRust02,
  sheerRust03,
  sheerRust04,
];

export function Sheer({ onGoHome }) {
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
      {/* HEADER GLOBAL */}
      <Header onGoHome={onGoHome} />

      <main>
        {/* Título */}
        <h1 className="titulo-coleccion">SHEER</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.fapceramiche.com/es/productos/sheer/" />

        {/* ---- GALERÍA ---- */}

        {/* SHEER WHITE PLAIN */}
        <h3 className="color-title">SHEER WHITE PLAIN</h3>
        <section className="gallery-grid">
          <img
            src={sheerWhitePlain01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="SHEER WHITE PLAIN 1"
          />
          <img
            src={sheerWhitePlain02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="SHEER WHITE PLAIN 2"
          />
        </section>

        {/* SHEER WHITE STICK */}
        <h3 className="color-title">SHEER WHITE STICK</h3>
        <section className="gallery-grid">
          <img
            src={sheerWhiteStick01}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="SHEER WHITE STICK 1"
          />
        </section>

        {/* SHEER BEIGE STICK */}
        <h3 className="color-title">SHEER BEIGE STICK</h3>
        <section className="gallery-grid">
          <img
            src={sheerBeigeStick01}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="SHEER BEIGE STICK 1"
          />
          <img
            src={sheerBeigeStick02}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="SHEER BEIGE STICK 2"
          />
        </section>

        {/* SHEER BEIGE BLOOM STAR */}
        <h3 className="color-title">SHEER BEIGE BLOOM STAR</h3>
        <section className="gallery-grid">
          <img
            src={sheerBeigeBloomStar01}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="SHEER BEIGE BLOOM STAR 1"
          />
          <img
            src={sheerBeigeBloomStar02}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="SHEER BEIGE BLOOM STAR 2"
          />
          <img
            src={sheerBeigeBloomStar03}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="SHEER BEIGE BLOOM STAR 3"
          />
        </section>

        {/* SHEER GREY PLAIN */}
        <h3 className="color-title">SHEER GREY PLAIN</h3>
        <section className="gallery-grid">
          <img
            src={sheerGreyPlain01}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="SHEER GREY PLAIN 1"
          />
        </section>

        {/* SHEER GREY STICK */}
        <h3 className="color-title">SHEER GREY STICK</h3>
        <section className="gallery-grid">
          <img
            src={sheerGreyStick01}
            className="gallery-img"
            onClick={() => openModal(9)}
            loading="lazy"
            alt="SHEER GREY STICK 1"
          />
        </section>

        {/* SHEER GREY DUNE */}
        <h3 className="color-title">SHEER GREY DUNE</h3>
        <section className="gallery-grid">
          <img
            src={sheerGreyDune01}
            className="gallery-img"
            onClick={() => openModal(10)}
            loading="lazy"
            alt="SHEER GREY DUNE 1"
          />
        </section>

        {/* SHEER LEAVES */}
        <h3 className="color-title">SHEER LEAVES</h3>
        <section className="gallery-grid">
          <img
            src={sheerLeaves01}
            className="gallery-img"
            onClick={() => openModal(11)}
            loading="lazy"
            alt="SHEER LEAVES 1"
          />
        </section>

        {/* SHEER RUST */}
        <h3 className="color-title">SHEER RUST</h3>
        <section className="gallery-grid">
          <img
            src={sheerRust01}
            className="gallery-img"
            onClick={() => openModal(12)}
            loading="lazy"
            alt="SHEER RUST 1"
          />
          <img
            src={sheerRust02}
            className="gallery-img"
            onClick={() => openModal(13)}
            loading="lazy"
            alt="SHEER RUST 2"
          />
          <img
            src={sheerRust03}
            className="gallery-img"
            onClick={() => openModal(14)}
            loading="lazy"
            alt="SHEER RUST 3"
          />
          <img
            src={sheerRust04}
            className="gallery-img"
            onClick={() => openModal(15)}
            loading="lazy"
            alt="SHEER RUST 4"
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
