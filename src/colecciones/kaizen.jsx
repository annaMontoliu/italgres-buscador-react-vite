// src/colecciones/kaizen.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

import kaizenHoney1 from "../assets/imagenes/kaizen/kaizen-honey/kaizen-honey-01.jpg";
import kaizenKalua1 from "../assets/imagenes/kaizen/kaizen-kalua/kaizen-kalua-01.jpg";
import kaizenWalnut1 from "../assets/imagenes/kaizen/kaizen-walnut/kaizen-walnut-01.jpg";

// ORDEN EXACTO COMO EN TU HTML: HONEY, KALUA, WALNUT
const images = [kaizenHoney1, kaizenKalua1, kaizenWalnut1];

export function Kaizen({ onGoHome }) {
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
        <h1 className="titulo-coleccion">KAIZEN</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/pdf/KAIZEN.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color HONEY */}
        <h3 className="color-title">KAIZEN HONEY</h3>
        <section className="gallery-grid">
          <img
            src={kaizenHoney1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="KAIZEN HONEY 1"
          />
        </section>

        {/* Color KALUA */}
        <h3 className="color-title">KAIZEN KALUA</h3>
        <section className="gallery-grid">
          <img
            src={kaizenKalua1}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="KAIZEN KALUA 1"
          />
        </section>

        {/* Color WALNUT */}
        <h3 className="color-title">KAIZEN WALNUT</h3>
        <section className="gallery-grid">
          <img
            src={kaizenWalnut1}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="KAIZEN WALNUT 1"
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
