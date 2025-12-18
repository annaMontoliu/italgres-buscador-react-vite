// src/colecciones/pulpis.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS
import pulpisGhiaccio01 from "../assets/imagenes/pulpis/pulpis-ghiaccio/pulpis-ghiaccio-01.jpg";
import pulpisGhiaccio02 from "../assets/imagenes/pulpis/pulpis-ghiaccio/pulpis-ghiaccio-02.jpg";

import pulpisTortora01 from "../assets/imagenes/pulpis/pulpis-tortora/pulpis-tortora-01.jpg";
import pulpisTortora02 from "../assets/imagenes/pulpis/pulpis-tortora/pulpis-tortora-02.jpg";

// ORDEN EXACTO (primero GHIACCIO, luego TORTORA)
const images = [
  pulpisGhiaccio01,
  pulpisGhiaccio02,
  pulpisTortora01,
  pulpisTortora02,
];

export function Pulpis({ onGoHome }) {
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
        {/* TÍTULO */}
        <h1 className="titulo-coleccion">PULPIS</h1>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.cerdomus.com/flex/FixedPages/Common/serveAllegato.php/L/EN/id/902" />

        {/* GALERÍA */}
        <h3 className="color-title">PULPIS GHIACCIO</h3>
        <section className="gallery-grid">
          <img
            src={pulpisGhiaccio01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="PULPIS GHIACCIO 01"
          />
          <img
            src={pulpisGhiaccio02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="PULPIS GHIACCIO 02"
          />
        </section>

        <h3 className="color-title">PULPIS TORTORA</h3>
        <section className="gallery-grid">
          <img
            src={pulpisTortora01}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="PULPIS TORTORA 01"
          />
          <img
            src={pulpisTortora02}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="PULPIS TORTORA 02"
          />
        </section>
      </main>

      {/* MODAL */}
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
