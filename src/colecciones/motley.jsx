// src/colecciones/motley.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

// MOTLEY 01
import motley0101 from "../assets/imagenes/motley/motley-01/motley-01-01.jpg";
import motley0102 from "../assets/imagenes/motley/motley-01/motley-01-02.jpg";
import motley0103 from "../assets/imagenes/motley/motley-01/motley-01-03.jpg";

// MOTLEY 03
import motley0301 from "../assets/imagenes/motley/motley-03/motley-03-01.jpg";
import motley0302 from "../assets/imagenes/motley/motley-03/motley-03-02.jpg";
import motley0303 from "../assets/imagenes/motley/motley-03/motley-03-03.jpg";
import motley0304 from "../assets/imagenes/motley/motley-03/motley-03-04.jpg";
import motley0305 from "../assets/imagenes/motley/motley-03/motley-03-05.jpg";
import motley0306 from "../assets/imagenes/motley/motley-03/motley-03-06.jpg";
import motley0307 from "../assets/imagenes/motley/motley-03/motley-03-07.jpg";
import motley0308 from "../assets/imagenes/motley/motley-03/motley-03-08.jpg";
import motley0309 from "../assets/imagenes/motley/motley-03/motley-03-09.jpg";

// MOTLEY 04
import motley0401 from "../assets/imagenes/motley/motley-04/motley-04-01.jpg";
import motley0402 from "../assets/imagenes/motley/motley-04/motley-04-02.jpg";
import motley0403 from "../assets/imagenes/motley/motley-04/motley-04-03.jpg";
import motley0404 from "../assets/imagenes/motley/motley-04/motley-04-04.jpg";
import motley0405 from "../assets/imagenes/motley/motley-04/motley-04-05.jpg";
import motley0406 from "../assets/imagenes/motley/motley-04/motley-04-06.jpg";
import motley0407 from "../assets/imagenes/motley/motley-04/motley-04-07.jpg";
import motley0408 from "../assets/imagenes/motley/motley-04/motley-04-08.jpg";

// ORDEN EXACTO DE LAS IMÁGENES
const images = [
  // MOTLEY 01
  motley0101,
  motley0102,
  motley0103,
  // MOTLEY 03
  motley0301,
  motley0302,
  motley0303,
  motley0304,
  motley0305,
  motley0306,
  motley0307,
  motley0308,
  motley0309,
  // MOTLEY 04
  motley0401,
  motley0402,
  motley0403,
  motley0404,
  motley0405,
  motley0406,
  motley0407,
  motley0408,
];

export function Motley({ onGoHome }) {
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
        <h1 className="titulo-coleccion">MOTLEY</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout
          infoUrl="https://mirage-cdn.thron.com/static/BL755F_MRG_CAT_MOTLEY_072024_ACYXN5.pdf?xseo=&response-content-disposition=inline%3Bfilename%3D%22catalogo-motley-pdf.pdf%22"
        />

        {/* ---- GALERÍA ---- */}

        {/* Color MOTLEY 01 */}
        <h3 className="color-title">MOTLEY 01</h3>
        <section className="gallery-grid">
          <img
            src={motley0101}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="MOTLEY 01 - 1"
          />
          <img
            src={motley0102}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="MOTLEY 01 - 2"
          />
          <img
            src={motley0103}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="MOTLEY 01 - 3"
          />
        </section>

        {/* Color MOTLEY 03 */}
        <h3 className="color-title">MOTLEY 03</h3>
        <section className="gallery-grid">
          <img
            src={motley0301}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="MOTLEY 03 - 1"
          />
          <img
            src={motley0302}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="MOTLEY 03 - 2"
          />
          <img
            src={motley0303}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="MOTLEY 03 - 3"
          />
          <img
            src={motley0304}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="MOTLEY 03 - 4"
          />
          <img
            src={motley0305}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="MOTLEY 03 - 5"
          />
          <img
            src={motley0306}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="MOTLEY 03 - 6"
          />
          <img
            src={motley0307}
            className="gallery-img"
            onClick={() => openModal(9)}
            loading="lazy"
            alt="MOTLEY 03 - 7"
          />
          <img
            src={motley0308}
            className="gallery-img"
            onClick={() => openModal(10)}
            loading="lazy"
            alt="MOTLEY 03 - 8"
          />
          <img
            src={motley0309}
            className="gallery-img"
            onClick={() => openModal(11)}
            loading="lazy"
            alt="MOTLEY 03 - 9"
          />
        </section>

        {/* Color MOTLEY 04 */}
        <h3 className="color-title">MOTLEY 04</h3>
        <section className="gallery-grid">
          <img
            src={motley0401}
            className="gallery-img"
            onClick={() => openModal(12)}
            loading="lazy"
            alt="MOTLEY 04 - 1"
          />
          <img
            src={motley0402}
            className="gallery-img"
            onClick={() => openModal(13)}
            loading="lazy"
            alt="MOTLEY 04 - 2"
          />
          <img
            src={motley0403}
            className="gallery-img"
            onClick={() => openModal(14)}
            loading="lazy"
            alt="MOTLEY 04 - 3"
          />
          <img
            src={motley0404}
            className="gallery-img"
            onClick={() => openModal(15)}
            loading="lazy"
            alt="MOTLEY 04 - 4"
          />
          <img
            src={motley0405}
            className="gallery-img"
            onClick={() => openModal(16)}
            loading="lazy"
            alt="MOTLEY 04 - 5"
          />
          <img
            src={motley0406}
            className="gallery-img"
            onClick={() => openModal(17)}
            loading="lazy"
            alt="MOTLEY 04 - 6"
          />
          <img
            src={motley0407}
            className="gallery-img"
            onClick={() => openModal(18)}
            loading="lazy"
            alt="MOTLEY 04 - 7"
          />
          <img
            src={motley0408}
            className="gallery-img"
            onClick={() => openModal(19)}
            loading="lazy"
            alt="MOTLEY 04 - 8"
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
