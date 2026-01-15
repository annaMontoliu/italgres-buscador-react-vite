// src/colecciones/oxyd.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";
import { ShowroomColors } from "../components/ShowroomColors";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import oxydBianco1 from "../assets/imagenes/oxyd/oxyd-bianco/oxyd-bianco-01.jpg";
import oxydBianco2 from "../assets/imagenes/oxyd/oxyd-bianco/oxyd-bianco-02.jpg";
import oxydBianco3 from "../assets/imagenes/oxyd/oxyd-bianco/oxyd-bianco-03.jpg";

import oxydGrigio1 from "../assets/imagenes/oxyd/oxyd-grigio/oxyd-grigio-01.jpg";
import oxydGrigio2 from "../assets/imagenes/oxyd/oxyd-grigio/oxyd-grigio-02.jpg";
import oxydGrigio3 from "../assets/imagenes/oxyd/oxyd-grigio/oxyd-grigio-03.jpg";
import oxydGrigio4 from "../assets/imagenes/oxyd/oxyd-grigio/oxyd-grigio-04.jpg";

import oxydMarrone1 from "../assets/imagenes/oxyd/oxyd-marrone/oxyd-marrone-01.jpg";
import oxydMarrone2 from "../assets/imagenes/oxyd/oxyd-marrone/oxyd-marrone-02.jpg";
import oxydMarrone3 from "../assets/imagenes/oxyd/oxyd-marrone/oxyd-marrone-03.jpg";

import oxydNegro1 from "../assets/imagenes/oxyd/oxyd-negro/oxyd-negro-01.jpg";
import oxydNegro2 from "../assets/imagenes/oxyd/oxyd-negro/oxyd-negro-02.jpg";
import oxydNegro3 from "../assets/imagenes/oxyd/oxyd-negro/oxyd-negro-03.jpg";

// IMPORTS TACOS (showroom)
import tacoOxydBianco from "../assets/imagenes/oxyd/tacos/taco-oxyd-bianco.jpg";
import tacoOxydGrigio from "../assets/imagenes/oxyd/tacos/taco-oxyd-grigio.jpg";
import tacoOxydMarrone from "../assets/imagenes/oxyd/tacos/taco-oxyd-marrone.jpg";
import tacoOxydNegro from "../assets/imagenes/oxyd/tacos/taco-oxyd-negro.jpg";

// ORDEN EXACTO (primero Bianco, luego Grigio, Marrone y Negro)
const images = [
  oxydBianco1,
  oxydBianco2,
  oxydBianco3,

  oxydGrigio1,
  oxydGrigio2,
  oxydGrigio3,
  oxydGrigio4,

  oxydMarrone1,
  oxydMarrone2,
  oxydMarrone3,

  oxydNegro1,
  oxydNegro2,
  oxydNegro3,
];

export function Oxyd({ onGoHome }) {
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
        <h1 className="titulo-coleccion">OXYD</h1>

        {/* SHOWROOM COLORS (TACOS) */}
        <ShowroomColors
          title="showroom colors"
          items={[
            { label: "BIANCO", thumb: tacoOxydBianco },
            { label: "GRIGIO", thumb: tacoOxydGrigio },
            { label: "MARRONE", thumb: tacoOxydMarrone },
            { label: "NEGRO", thumb: tacoOxydNegro },
          ]}
        />

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.caemdordini.it/public/storage/189368/imola-oxyd-colori-2025.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color BIANCO */}
        <h3 className="color-title">OXYD BIANCO</h3>
        <section className="gallery-grid">
          <img
            src={oxydBianco1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="OXYD BIANCO 1"
          />
          <img
            src={oxydBianco2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="OXYD BIANCO 2"
          />
          <img
            src={oxydBianco3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="OXYD BIANCO 3"
          />
        </section>

        {/* Color GRIGIO */}
        <h3 className="color-title">OXYD GRIGIO</h3>
        <section className="gallery-grid">
          <img
            src={oxydGrigio1}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="OXYD GRIGIO 1"
          />
          <img
            src={oxydGrigio2}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="OXYD GRIGIO 2"
          />
          <img
            src={oxydGrigio3}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="OXYD GRIGIO 3"
          />
          <img
            src={oxydGrigio4}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="OXYD GRIGIO 4"
          />
        </section>

        {/* Color MARRONE */}
        <h3 className="color-title">OXYD MARRONE</h3>
        <section className="gallery-grid">
          <img
            src={oxydMarrone1}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="OXYD MARRONE 1"
          />
          <img
            src={oxydMarrone2}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="OXYD MARRONE 2"
          />
          <img
            src={oxydMarrone3}
            className="gallery-img"
            onClick={() => openModal(9)}
            loading="lazy"
            alt="OXYD MARRONE 3"
          />
        </section>

        {/* Color NEGRO */}
        <h3 className="color-title">OXYD NEGRO</h3>
        <section className="gallery-grid">
          <img
            src={oxydNegro1}
            className="gallery-img"
            onClick={() => openModal(10)}
            loading="lazy"
            alt="OXYD NEGRO 1"
          />
          <img
            src={oxydNegro2}
            className="gallery-img"
            onClick={() => openModal(11)}
            loading="lazy"
            alt="OXYD NEGRO 2"
          />
          <img
            src={oxydNegro3}
            className="gallery-img"
            onClick={() => openModal(12)}
            loading="lazy"
            alt="OXYD NEGRO 3"
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
