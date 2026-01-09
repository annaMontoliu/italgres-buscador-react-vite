// src/colecciones/bellevue.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

// WHITE (1)
import bellevueWhite01 from "../assets/imagenes/bellevue/bellevue-white/bellevue-white-01.jpg";

// IVORY (5)
import bellevueIvory01 from "../assets/imagenes/bellevue/bellevue-ivory/bellevue-ivory-01.jpg";
import bellevueIvory02 from "../assets/imagenes/bellevue/bellevue-ivory/bellevue-ivory-02.jpg";
import bellevueIvory03 from "../assets/imagenes/bellevue/bellevue-ivory/bellevue-ivory-03.jpg";
import bellevueIvory04 from "../assets/imagenes/bellevue/bellevue-ivory/bellevue-ivory-04.jpg";
import bellevueIvory05 from "../assets/imagenes/bellevue/bellevue-ivory/bellevue-ivory-05.jpg";

// GREY (8)
import bellevueGrey01 from "../assets/imagenes/bellevue/bellevue-grey/bellevue-grey-01.jpg";
import bellevueGrey02 from "../assets/imagenes/bellevue/bellevue-grey/bellevue-grey-02.jpg";
import bellevueGrey03 from "../assets/imagenes/bellevue/bellevue-grey/bellevue-grey-03.jpg";
import bellevueGrey04 from "../assets/imagenes/bellevue/bellevue-grey/bellevue-grey-04.jpg";
import bellevueGrey05 from "../assets/imagenes/bellevue/bellevue-grey/bellevue-grey-05.jpg";
import bellevueGrey06 from "../assets/imagenes/bellevue/bellevue-grey/bellevue-grey-06.jpg";
import bellevueGrey07 from "../assets/imagenes/bellevue/bellevue-grey/bellevue-grey-07.jpg";
import bellevueGrey08 from "../assets/imagenes/bellevue/bellevue-grey/bellevue-grey-08.jpg";

// ORDEN EXACTO (modal)
const images = [
  // WHITE
  bellevueWhite01,

  // IVORY
  bellevueIvory01,
  bellevueIvory02,
  bellevueIvory03,
  bellevueIvory04,
  bellevueIvory05,

  // GREY
  bellevueGrey01,
  bellevueGrey02,
  bellevueGrey03,
  bellevueGrey04,
  bellevueGrey05,
  bellevueGrey06,
  bellevueGrey07,
  bellevueGrey08,
];

export function Bellevue({ onGoHome }) {
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
        <h1 className="titulo-coleccion">BELLEVUE</h1>

        {/* Bloque FINISHES & FORMATS */}
        {/* Sube el PDF a: public/pdf/BELLEVUE.pdf */}
        <ColeccionLayout infoUrl="/pdf/BELLEVUE.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color WHITE */}
        <h3 className="color-title">BELLEVUE WHITE</h3>
        <section className="gallery-grid">
          <img
            src={bellevueWhite01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="BELLEVUE WHITE 1"
          />
        </section>

        {/* Color IVORY */}
        <h3 className="color-title">BELLEVUE IVORY</h3>
        <section className="gallery-grid">
          <img
            src={bellevueIvory01}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="BELLEVUE IVORY 1"
          />
          <img
            src={bellevueIvory02}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="BELLEVUE IVORY 2"
          />
          <img
            src={bellevueIvory03}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="BELLEVUE IVORY 3"
          />
          <img
            src={bellevueIvory04}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="BELLEVUE IVORY 4"
          />
          <img
            src={bellevueIvory05}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="BELLEVUE IVORY 5"
          />
        </section>

        {/* Color GREY */}
        <h3 className="color-title">BELLEVUE GREY</h3>
        <section className="gallery-grid">
          <img
            src={bellevueGrey01}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="BELLEVUE GREY 1"
          />
          <img
            src={bellevueGrey02}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="BELLEVUE GREY 2"
          />
          <img
            src={bellevueGrey03}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="BELLEVUE GREY 3"
          />
          <img
            src={bellevueGrey04}
            className="gallery-img"
            onClick={() => openModal(9)}
            loading="lazy"
            alt="BELLEVUE GREY 4"
          />
          <img
            src={bellevueGrey05}
            className="gallery-img"
            onClick={() => openModal(10)}
            loading="lazy"
            alt="BELLEVUE GREY 5"
          />
          <img
            src={bellevueGrey06}
            className="gallery-img"
            onClick={() => openModal(11)}
            loading="lazy"
            alt="BELLEVUE GREY 6"
          />
          <img
            src={bellevueGrey07}
            className="gallery-img"
            onClick={() => openModal(12)}
            loading="lazy"
            alt="BELLEVUE GREY 7"
          />
          <img
            src={bellevueGrey08}
            className="gallery-img"
            onClick={() => openModal(13)}
            loading="lazy"
            alt="BELLEVUE GREY 8"
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
