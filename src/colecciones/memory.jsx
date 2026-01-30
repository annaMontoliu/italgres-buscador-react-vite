// src/colecciones/memory.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES (exacto según captura)
// =====================

// JUNGLE (2)
import memoryJungle01 from "../assets/imagenes/memory/memory-jungle/memory-jungle-01.jpg";
import memoryJungle02 from "../assets/imagenes/memory/memory-jungle/memory-jungle-02.jpg";

// INK (2)
import memoryInk01 from "../assets/imagenes/memory/memory-ink/memory-ink-01.jpg";
import memoryInk02 from "../assets/imagenes/memory/memory-ink/memory-ink-02.jpg";

// SPRING (1)
import memorySpring01 from "../assets/imagenes/memory/memory-spring/memory-spring-01.jpg";

// RIO (1)
import memoryRio01 from "../assets/imagenes/memory/memory-rio/memory-rio-01.jpg";

// =====================
// ARRAY GLOBAL MODAL
// ORDEN: JUNGLE → INK → SPRING → RIO
// =====================
const images = [
  memoryJungle01,
  memoryJungle02,

  memoryInk01,
  memoryInk02,

  memorySpring01,

  memoryRio01,
];

export function Memory({ onGoHome }) {
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
    setCurrentIndex((i) => (i + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">MEMORY</h1>

        <ColeccionLayout infoUrl="/pdf/MEMORY.pdf" />

        {/* JUNGLE */}
        <h3 className="color-title">MEMORY JUNGLE</h3>
        <section className="gallery-grid">
          {[memoryJungle01, memoryJungle02].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(i)}
              loading="lazy"
              alt={`MEMORY JUNGLE ${i + 1}`}
            />
          ))}
        </section>

        {/* INK */}
        <h3 className="color-title">MEMORY INK</h3>
        <section className="gallery-grid">
          {[memoryInk01, memoryInk02].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(2 + i)}
              loading="lazy"
              alt={`MEMORY INK ${i + 1}`}
            />
          ))}
        </section>

        {/* SPRING */}
        <h3 className="color-title">MEMORY SPRING</h3>
        <section className="gallery-grid">
          <img
            src={memorySpring01}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="MEMORY SPRING 01"
          />
        </section>

        {/* RIO */}
        <h3 className="color-title">MEMORY RIO</h3>
        <section className="gallery-grid">
          <img
            src={memoryRio01}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="MEMORY RIO 01"
          />
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
