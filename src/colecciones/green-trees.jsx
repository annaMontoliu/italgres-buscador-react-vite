import { useState } from "react";

import { Header } from "../../components/Header";
import { ColeccionLayout } from "../../components/ColeccionLayout";
import { ImageModal } from "../../components/ImageModal";

// IMPORTS DE LA FOTO
import greenTrees1 from "../../assets/imagenes/green-trees/green-trees-01.jpg";

// ARRAY GLOBAL (solo 1 imagen)
const images = [greenTrees1];

export function GreenTrees({ onGoHome }) {
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
        <h1 className="titulo-coleccion">GREEN TREES</h1>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout
          infoUrl="https://www.fapceramiche.com/en/products/fap-maxxi/green-trees/"
        />

        {/* ---- GALERÍA ---- */}

        <h3 className="color-title">GREEN TREES</h3>
        <section className="gallery-grid">
          <img
            src={greenTrees1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="GREEN TREES 1"
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
