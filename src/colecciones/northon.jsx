// src/colecciones/northon.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import northonLightGrey1 from "../assets/imagenes/northon/northon-light-grey/northon-light-grey-01.jpg";
import northonLightGrey2 from "../assets/imagenes/northon/northon-light-grey/northon-light-grey-02.jpg";

// ORDEN EXACTO COMO EN TU HTML ORIGINAL
const images = [
  northonLightGrey1,
  northonLightGrey2,
];

export function Northon({ onGoHome }) {
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
        <h1 className="titulo-coleccion">NORTHON</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/pdf/NORTHON.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color LIGHT GREY */}
        <h3 className="color-title">NORTHON LIGHT GREY</h3>
        <section className="gallery-grid">
          <img
            src={northonLightGrey1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="NORTHON LIGHT GREY 1"
          />
          <img
            src={northonLightGrey2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="NORTHON LIGHT GREY 2"
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