// src/colecciones/silverline.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// Ruta verificada:
// /src/assets/imagenes/silverline/silverline-avorio/
// =====================

import silverlineAvorio01 from "../assets/imagenes/silverline/silverline-avorio/silverline-avorio-01.jpg";
import silverlineAvorio02 from "../assets/imagenes/silverline/silverline-avorio/silverline-avorio-02.jpg";
import silverlineAvorio03 from "../assets/imagenes/silverline/silverline-avorio/silverline-avorio-03.jpg";
import silverlineAvorio04 from "../assets/imagenes/silverline/silverline-avorio/silverline-avorio-04.jpg";
import silverlineAvorio05 from "../assets/imagenes/silverline/silverline-avorio/silverline-avorio-05.jpg";

const images = [
  silverlineAvorio01, // 0
  silverlineAvorio02, // 1
  silverlineAvorio03, // 2
  silverlineAvorio04, // 3
  silverlineAvorio05, // 4
];

export function Silverline({ onGoHome }) {
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
        <h1 className="titulo-coleccion">SILVERLINE</h1>

        {/* PDF LOCAL */}
        <ColeccionLayout infoUrl="/pdf/SILVERLINE.pdf" />

        <h3 className="color-title">SILVERLINE AVORIO</h3>
        <section className="gallery-grid">
          <img src={silverlineAvorio01} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="SILVERLINE AVORIO 01" />
          <img src={silverlineAvorio02} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="SILVERLINE AVORIO 02" />
          <img src={silverlineAvorio03} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="SILVERLINE AVORIO 03" />
          <img src={silverlineAvorio04} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="SILVERLINE AVORIO 04" />
          <img src={silverlineAvorio05} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="SILVERLINE AVORIO 05" />
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