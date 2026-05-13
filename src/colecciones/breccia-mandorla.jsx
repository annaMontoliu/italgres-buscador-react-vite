// src/colecciones/breccia-mandorla.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORT DE LA FOTO DESDE src/assets/imagenes/...
import brecciaMandorlaDaMilano1 from "../assets/imagenes/breccia-mandorla/breccia-mandorla-da-milano/breccia-mandorla-da-milano-01.jpg";

// ORDEN EXACTO
const images = [
  brecciaMandorlaDaMilano1,
];

export function BrecciaMandorla({ onGoHome }) {
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
        <h1 className="titulo-coleccion">BRECCIA MANDORLA</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout
          infoUrl="https://media.portobello.com.br/catalogo-portobello-shop-catalogo-breccia-collection-ciclo-03-2025-25-0.pdf?_gl=1*q4po2a*_gcl_au*MTIxNTQ5MjcwMy4xNzc4Njg3MzAy"
        />

        {/* ---- GALERÍA ---- */}

        {/* Color DA MILANO */}
        <h3 className="color-title">BRECCIA MANDORLA DA MILANO</h3>

        <section className="gallery-grid">
          <img
            src={brecciaMandorlaDaMilano1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="BRECCIA MANDORLA DA MILANO 1"
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