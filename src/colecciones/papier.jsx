// src/colecciones/papier.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES (exacto según carpetas)
// =====================

// CAMILLES (2)
import papierCamilles01 from "../assets/imagenes/papier/papier-camilles/papier-camilles-01.jpg";
import papierCamilles02 from "../assets/imagenes/papier/papier-camilles/papier-camilles-02.jpg";

// ENCANTO (2)
import papierEncanto01 from "../assets/imagenes/papier/papier-encanto/papier-encanto-01.jpg";
import papierEncanto02 from "../assets/imagenes/papier/papier-encanto/papier-encanto-02.jpg";

// JARDIN (4)
import papierJardin01 from "../assets/imagenes/papier/papier-jardin/papier-jardin-01.jpg";
import papierJardin02 from "../assets/imagenes/papier/papier-jardin/papier-jardin-02.jpg";
import papierJardin03 from "../assets/imagenes/papier/papier-jardin/papier-jardin-03.jpg";
import papierJardin04 from "../assets/imagenes/papier/papier-jardin/papier-jardin-04.jpg";

// NUAGES (2)
import papierNuages01 from "../assets/imagenes/papier/papier-nuages/papier-nuages-01.jpg";
import papierNuages02 from "../assets/imagenes/papier/papier-nuages/papier-nuages-02.jpg";

// PALM (7)
import papierPalm01 from "../assets/imagenes/papier/papier-palm/papier-palm-01.jpg";
import papierPalm02 from "../assets/imagenes/papier/papier-palm/papier-palm-02.jpg";
import papierPalm03 from "../assets/imagenes/papier/papier-palm/papier-palm-03.jpg";
import papierPalm04 from "../assets/imagenes/papier/papier-palm/papier-palm-04.jpg";
import papierPalm05 from "../assets/imagenes/papier/papier-palm/papier-palm-05.jpg";
import papierPalm06 from "../assets/imagenes/papier/papier-palm/papier-palm-06.jpg";
import papierPalm07 from "../assets/imagenes/papier/papier-palm/papier-palm-07.jpg";

// =====================
// ARRAY GLOBAL MODAL (orden por colores como me diste)
// JARDIN, ENCANTO, NUAGES, CAMILLES, PALM
// =====================
const images = [
  // JARDIN (4)
  papierJardin01,
  papierJardin02,
  papierJardin03,
  papierJardin04,

  // ENCANTO (2)
  papierEncanto01,
  papierEncanto02,

  // NUAGES (2)
  papierNuages01,
  papierNuages02,

  // CAMILLES (2)
  papierCamilles01,
  papierCamilles02,

  // PALM (7)
  papierPalm01,
  papierPalm02,
  papierPalm03,
  papierPalm04,
  papierPalm05,
  papierPalm06,
  papierPalm07,
];

export function Papier({ onGoHome }) {
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
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">PAPIER</h1>

        <ColeccionLayout infoUrl="https://mirage-cdn.thron.com/static/XIFEF0_MRG_CAT_PAPIER_112025_710956.pdf?xseo=&response-content-disposition=inline%3Bfilename%3D%22catalogue-papier-pdf.pdf%22" />

        {/* JARDIN */}
        <h3 className="color-title">PAPIER JARDIN</h3>
        <section className="gallery-grid">
          {[papierJardin01, papierJardin02, papierJardin03, papierJardin04].map(
            (img, i) => (
              <img
                key={i}
                src={img}
                className="gallery-img"
                onClick={() => openModal(i)}
                loading="lazy"
                alt={`PAPIER JARDIN ${i + 1}`}
              />
            )
          )}
        </section>

        {/* ENCANTO */}
        <h3 className="color-title">PAPIER ENCANTO</h3>
        <section className="gallery-grid">
          {[papierEncanto01, papierEncanto02].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(4 + i)}
              loading="lazy"
              alt={`PAPIER ENCANTO ${i + 1}`}
            />
          ))}
        </section>

        {/* NUAGES */}
        <h3 className="color-title">PAPIER NUAGES</h3>
        <section className="gallery-grid">
          {[papierNuages01, papierNuages02].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(6 + i)}
              loading="lazy"
              alt={`PAPIER NUAGES ${i + 1}`}
            />
          ))}
        </section>

        {/* CAMILLES */}
        <h3 className="color-title">PAPIER CAMILLES</h3>
        <section className="gallery-grid">
          {[papierCamilles01, papierCamilles02].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(8 + i)}
              loading="lazy"
              alt={`PAPIER CAMILLES ${i + 1}`}
            />
          ))}
        </section>

        {/* PALM */}
        <h3 className="color-title">PAPIER PALM</h3>
        <section className="gallery-grid">
          {[
            papierPalm01,
            papierPalm02,
            papierPalm03,
            papierPalm04,
            papierPalm05,
            papierPalm06,
            papierPalm07,
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(10 + i)}
              loading="lazy"
              alt={`PAPIER PALM ${i + 1}`}
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
