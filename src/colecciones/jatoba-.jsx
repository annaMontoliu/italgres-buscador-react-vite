// src/colecciones/jatoba.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORT FOTO
import jatobaBrown1 from "../assets/imagenes/jatoba/jatoba-brown/jatoba-brown-01.jpg";

// ORDEN EXACTO
const images = [jatobaBrown1];

export function Jatoba({ onGoHome }) {
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
        <h1 className="titulo-coleccion">JATOBA</h1>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/pdf/JATOBA.pdf" />

        {/* ---- GALERÍA ---- */}

        <h3 className="color-title">JATOBA BROWN</h3>
        <section className="gallery-grid">
          <img
            src={jatobaBrown1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="JATOBA BROWN 1"
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
