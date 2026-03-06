// src/colecciones/pierre-vive.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import pierreViveLoireNoble01 from "../assets/imagenes/pierre-vive/pierre-vive-loire/pierre-vive-loire-noble-01.jpg";
import pierreViveLoire02 from "../assets/imagenes/pierre-vive/pierre-vive-loire/pierre-vive-loire-02.jpg";

import pierreViveOrval01 from "../assets/imagenes/pierre-vive/pierre-vive-orval/pierre-vive-orval-01.jpg";
import pierreViveOrval02 from "../assets/imagenes/pierre-vive/pierre-vive-orval/pierre-vive-orval-02.jpg";

import pierreViveBrionne01 from "../assets/imagenes/pierre-vive/pierre-vive-brionne/pierre-vive-brionne-01.jpg";
import pierreViveBrionne02 from "../assets/imagenes/pierre-vive/pierre-vive-brionne/pierre-vive-brionne-02.jpg";

// ORDEN EXACTO
const images = [
  pierreViveLoireNoble01,
  pierreViveLoire02,
  pierreViveOrval01,
  pierreViveOrval02,
  pierreViveBrionne01,
  pierreViveBrionne02,
];

export function PierreVive({ onGoHome }) {
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
        <h1 className="titulo-coleccion">PIERRE VIVE</h1>

        <ColeccionLayout infoUrl="https://kronosceramiche.com/src/uploads/sites/3/2025/10/PierreVive.pdf" />

        {/* Color LOIRE */}
        <h3 className="color-title">PIERRE VIVE LOIRE</h3>
        <section className="gallery-grid">
          <img
            src={pierreViveLoireNoble01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="PIERRE VIVE LOIRE NOBLE 01"
          />
          <img
            src={pierreViveLoire02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="PIERRE VIVE LOIRE 02"
          />
        </section>

        {/* Color ORVAL */}
        <h3 className="color-title">PIERRE VIVE ORVAL</h3>
        <section className="gallery-grid">
          <img
            src={pierreViveOrval01}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="PIERRE VIVE ORVAL 01"
          />
          <img
            src={pierreViveOrval02}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="PIERRE VIVE ORVAL 02"
          />
        </section>

        {/* Color BRIONNE */}
        <h3 className="color-title">PIERRE VIVE BRIONNE</h3>
        <section className="gallery-grid">
          <img
            src={pierreViveBrionne01}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="PIERRE VIVE BRIONNE 01"
          />
          <img
            src={pierreViveBrionne02}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="PIERRE VIVE BRIONNE 02"
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