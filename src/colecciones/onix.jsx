// src/colecciones/onix.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// Ruta verificada:
// /src/assets/imagenes/onix/onix-green/
// =====================

// ONIX GREEN (4)
import onixGreen01 from "../assets/imagenes/onix/onix-green/onix-green-01.jpg";
import onixGreen02 from "../assets/imagenes/onix/onix-green/onix-green-02.jpg";
import onixGreen03 from "../assets/imagenes/onix/onix-green/onix-green-03.jpg";
import onixGreen04 from "../assets/imagenes/onix/onix-green/onix-green-04.jpg";

// ORDEN EXACTO (modal)
const images = [
  onixGreen01, // 0
  onixGreen02, // 1
  onixGreen03, // 2
  onixGreen04, // 3
];

export function Onix({ onGoHome }) {
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
        <h1 className="titulo-coleccion">ONIX</h1>

        <ColeccionLayout infoUrl="https://www.emilgroup.it/emil/prodotti/documenticollezioni_emil/TdMOnyx%20Catalogo%202023.05%20Web.pdf" />

        {/* ONIX GREEN */}
        <h3 className="color-title">ONIX GREEN</h3>
        <section className="gallery-grid">
          <img
            src={onixGreen01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="ONIX GREEN 01"
          />
          <img
            src={onixGreen02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="ONIX GREEN 02"
          />
          <img
            src={onixGreen03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="ONIX GREEN 03"
          />
          <img
            src={onixGreen04}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="ONIX GREEN 04"
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