// src/colecciones/mapierre.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// MAPIERRE BLANCO (6)
import mapierreBlanco01 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-01.jpg";
import mapierreBlanco02 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-02.jpg";
import mapierreBlanco03 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-03.jpg";
import mapierreBlanco04 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-04.jpg";
import mapierreBlanco05 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-05.jpg";
import mapierreBlanco06 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-06.jpg";

// MAPIERRE GREY (6)
import mapierreGrey01 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-01.jpg";
import mapierreGrey02 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-02.jpg";
import mapierreGrey03 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-03.jpg";
import mapierreGrey04 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-04.jpg";
import mapierreGrey05 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-05.jpg";
import mapierreGrey06 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-06.jpg";

// =====================
// ARRAY GLOBAL MODAL
// ORDEN EXACTO
// =====================
const images = [
  mapierreBlanco01,
  mapierreBlanco02,
  mapierreBlanco03,
  mapierreBlanco04,
  mapierreBlanco05,
  mapierreBlanco06,
  mapierreGrey01,
  mapierreGrey02,
  mapierreGrey03,
  mapierreGrey04,
  mapierreGrey05,
  mapierreGrey06,
];

export function Mapierre({ onGoHome }) {
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
        <h1 className="titulo-coleccion">MAPIERRE</h1>

        <p className="descripcion-coleccion">
          MAPIERRE es una colección de inspiración mineral que reinterpreta la
          piedra natural con una estética sobria y contemporánea. Diseñada para
          arquitectura e interiorismo, ofrece superficies equilibradas,
          versátiles y de gran naturalidad visual.
        </p>

        <ColeccionLayout infoUrl="https://www.emilgroup.it/emil/prodotti/documenticollezioni_emil/Mapierre%20Catalogo%202025.11%20Web.pdf" />

        {/* ===================== */}
        {/* COLOR: MAPIERRE BLANCO */}
        {/* ===================== */}
        <h3 className="color-title">MAPIERRE BLANCO</h3>
        <section className="gallery-grid">
          {[mapierreBlanco01, mapierreBlanco02, mapierreBlanco03, mapierreBlanco04, mapierreBlanco05, mapierreBlanco06].map(
            (img, index) => (
              <img
                key={index}
                src={img}
                className="gallery-img"
                loading="lazy"
                onClick={() => openModal(index)}
                alt={`MAPIERRE BLANCO ${index + 1}`}
              />
            )
          )}
        </section>

        {/* ===================== */}
        {/* COLOR: MAPIERRE GREY */}
        {/* ===================== */}
        <h3 className="color-title">MAPIERRE GREY</h3>
        <section className="gallery-grid">
          {[mapierreGrey01, mapierreGrey02, mapierreGrey03, mapierreGrey04, mapierreGrey05, mapierreGrey06].map(
            (img, index) => (
              <img
                key={index}
                src={img}
                className="gallery-img"
                loading="lazy"
                onClick={() => openModal(index + 6)}
                alt={`MAPIERRE GREY ${index + 1}`}
              />
            )
          )}
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
