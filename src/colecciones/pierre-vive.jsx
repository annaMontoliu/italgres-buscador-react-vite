// src/colecciones/pierre-vive.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORT FOTO (RUTA CORRECTA SEGÚN TU CAPTURA)
import pierreViveLoireNoble01 from "../assets/imagenes/pierre-vive/pierre-vive-loire/pierre-vive-loire-noble-01.jpg";

// ORDEN EXACTO
const images = [pierreViveLoireNoble01];

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

        <ColeccionLayout infoUrl="https://kronosceramiche.com/src/uploads/sites/3/2025/10/Pierre_Vive.pdf" />

        <h3 className="color-title">PIERRE VIVE LOIRE NOBLE</h3>
        <section className="gallery-grid">
          <img
            src={pierreViveLoireNoble01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="PIERRE VIVE LOIRE NOBLE 01"
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
