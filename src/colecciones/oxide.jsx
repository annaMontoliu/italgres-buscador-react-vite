// src/colecciones/oxide.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// OXIDE BLUE RUST (4)
import oxideBlueRust01 from "../assets/imagenes/oxide/oxide-blue-rust/oxide-blue-rust-01.jpg";
import oxideBlueRust02 from "../assets/imagenes/oxide/oxide-blue-rust/oxide-blue-rust-02.jpg";
import oxideBlueRust03 from "../assets/imagenes/oxide/oxide-blue-rust/oxide-blue-rust-03.jpg";
import oxideBlueRust04 from "../assets/imagenes/oxide/oxide-blue-rust/oxide-blue-rust-04.jpg";

// OXIDE GREY RUST (3)
import oxideGreyRust01 from "../assets/imagenes/oxide/oxide-grey-rust/oxide-grey-rust-01.jpg";
import oxideGreyRust02 from "../assets/imagenes/oxide/oxide-grey-rust/oxide-grey-rust-02.jpg";
import oxideGreyRust03 from "../assets/imagenes/oxide/oxide-grey-rust/oxide-grey-rust-03.jpg";

// =====================
// ARRAY GLOBAL MODAL
// ORDEN EXACTO
// =====================
const images = [
  // BLUE RUST
  oxideBlueRust01,
  oxideBlueRust02,
  oxideBlueRust03,
  oxideBlueRust04,

  // GREY RUST
  oxideGreyRust01,
  oxideGreyRust02,
  oxideGreyRust03,
];

export function Oxide({ onGoHome }) {
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
        <h1 className="titulo-coleccion">OXIDE</h1>

        {/* BLOQUE FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.fapceramiche.com/media/products/documents/collection/OXIDE_2024.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* BLUE RUST */}
        <h3 className="color-title">OXIDE BLUE RUST</h3>
        <section className="gallery-grid">
          <img
            src={oxideBlueRust01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="OXIDE BLUE RUST 01"
          />
          <img
            src={oxideBlueRust02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="OXIDE BLUE RUST 02"
          />
          <img
            src={oxideBlueRust03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="OXIDE BLUE RUST 03"
          />
          <img
            src={oxideBlueRust04}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="OXIDE BLUE RUST 04"
          />
        </section>

        {/* GREY RUST */}
        <h3 className="color-title">OXIDE GREY RUST</h3>
        <section className="gallery-grid">
          <img
            src={oxideGreyRust01}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="OXIDE GREY RUST 01"
          />
          <img
            src={oxideGreyRust02}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="OXIDE GREY RUST 02"
          />
          <img
            src={oxideGreyRust03}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="OXIDE GREY RUST 03"
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
