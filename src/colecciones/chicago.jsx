// src/colecciones/chicago.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORT DE LA FOTO
import chicagoRoad01 from "../assets/imagenes/chicago/chicago-road/chicago-road-01.jpg";

// ORDEN EXACTO (modal)
const images = [chicagoRoad01];

export function Chicago({ onGoHome }) {
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
        <h1 className="titulo-coleccion">CHICAGO</h1>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/pdf/CHICAGO_catGRAL25-26.pdf" />

        {/* ---- GALERÍA ---- */}
        <h3 className="color-title">CHICAGO ROAD</h3>
        <section className="gallery-grid">
          <img
            src={chicagoRoad01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="CHICAGO ROAD 1"
          />
        </section>
      </main>

      {/* ---- MODAL ---- */}
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
