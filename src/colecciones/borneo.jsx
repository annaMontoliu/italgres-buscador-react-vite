// src/colecciones/borneo.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE FOTOS BORNEO WHITE (3)
import borneoWhite1 from "../assets/imagenes/borneo/borneo-white/borneo-white-01.jpg";
import borneoWhite2 from "../assets/imagenes/borneo/borneo-white/borneo-white-02.jpg";
import borneoWhite3 from "../assets/imagenes/borneo/borneo-white/borneo-white-03.jpg";

// ARRAY GLOBAL ORDENADO
const images = [borneoWhite1, borneoWhite2, borneoWhite3];

export function Borneo({ onGoHome }) {
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
        {/* Título */}
        <h1 className="titulo-coleccion">BORNEO</h1>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout
          infoUrl="https://cifreceramica.com/pdf-producto/300000000000057916/"
        />

        {/* ---- GALERÍA ---- */}

        {/* Color WHITE */}
        <h3 className="color-title">BORNEO WHITE</h3>
        <section className="gallery-grid">
          <img
            src={borneoWhite1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="BORNEO WHITE 1"
          />
          <img
            src={borneoWhite2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="BORNEO WHITE 2"
          />
          <img
            src={borneoWhite3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="BORNEO WHITE 3"
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
