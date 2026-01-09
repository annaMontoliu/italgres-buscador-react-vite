// src/colecciones/sinai-ktl.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import sinaiKtlAlmond01 from "../assets/imagenes/sinai-ktl/sinai-ktl-almond/sinai-ktl-almond-01.jpg";

// ORDEN EXACTO COMO EN TU HTML ORIGINAL
const images = [sinaiKtlAlmond01];

export function SinaiKtl({ onGoHome }) {
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
        <h1 className="titulo-coleccion">SINAI KTL</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://ktlceramica.com/wp-content/uploads/2025/04/KTL-FOLLETO-SINAI.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color ALMOND */}
        <h3 className="color-title">SINAI KTL ALMOND</h3>
        <section className="gallery-grid">
          <img
            src={sinaiKtlAlmond01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="SINAI KTL ALMOND 1"
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
