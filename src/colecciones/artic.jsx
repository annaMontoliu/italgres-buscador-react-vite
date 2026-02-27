// src/colecciones/artic.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// GREY
import articGrey01 from "../assets/imagenes/artic/artic-grey/artic-grey-01.jpg";

// WHITE
import articWhite01 from "../assets/imagenes/artic/artic-white/artic-white-01.jpg";

// 🔥 WHITE PRIMERO
const images = [
  articWhite01, // 0
  articGrey01,  // 1
];

export function Artic({ onGoHome }) {
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
        <h1 className="titulo-coleccion">ARTIC</h1>

        <ColeccionLayout infoUrl="https://www.grespania.com/es/pdf-collection/19" />

        {/* WHITE PRIMERO */}
        <h3 className="color-title">ARTIC WHITE</h3>
        <section className="gallery-grid">
          <img
            src={articWhite01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="ARTIC WHITE 01"
          />
        </section>

        {/* DESPUÉS GREY */}
        <h3 className="color-title">ARTIC GREY</h3>
        <section className="gallery-grid">
          <img
            src={articGrey01}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="ARTIC GREY 01"
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