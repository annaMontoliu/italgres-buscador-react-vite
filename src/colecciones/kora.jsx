// src/colecciones/kora.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// KORA SAND (2)
import koraSand01 from "../assets/imagenes/kora/kora-sand/kora-sand-01.jpg";
import koraSand02 from "../assets/imagenes/kora/kora-sand/kora-sand-02.jpg";

// KORA AUTUMN (1)
import koraAutumn01 from "../assets/imagenes/kora/kora-autumn/kora-autumn-01.jpg";

// KORA WALNUT (2)
import koraWalnut01 from "../assets/imagenes/kora/kora-walnut/kora-walnut-01.jpg";
import koraWalnut02 from "../assets/imagenes/kora/kora-walnut/kora-walnut-02.jpg";

// =====================
// ARRAY GLOBAL MODAL
// ORDEN EXACTO
// =====================
const images = [
  koraSand01,
  koraSand02,
  koraAutumn01,
  koraWalnut01,
  koraWalnut02,
];

export function Kora({ onGoHome }) {
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
        <h1 className="titulo-coleccion">KORA</h1>

        {/* BOTÓN / BLOQUE IGUAL AL RESTO */}
        <ColeccionLayout infoUrl="https://livingceramics.com/wp-content/uploads/2022/09/25_Livingceramics-KORA.pdf" />

        {/* ===== COLOR: KORA SAND ===== */}
        <h3 className="color-title">KORA SAND</h3>
        <section className="gallery-grid">
          <img
            src={koraSand01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="KORA SAND 01"
          />
          <img
            src={koraSand02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="KORA SAND 02"
          />
        </section>

        {/* ===== COLOR: KORA AUTUMN ===== */}
        <h3 className="color-title">KORA AUTUMN</h3>
        <section className="gallery-grid">
          <img
            src={koraAutumn01}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="KORA AUTUMN 01"
          />
        </section>

        {/* ===== COLOR: KORA WALNUT ===== */}
        <h3 className="color-title">KORA WALNUT</h3>
        <section className="gallery-grid">
          <img
            src={koraWalnut01}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="KORA WALNUT 01"
          />
          <img
            src={koraWalnut02}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="KORA WALNUT 02"
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
