
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS
import odysseyWhite1 from "../assets/imagenes/odyssey/odyssey-white/odyssey-white-01.jpg";
import odysseyWhite2 from "../assets/imagenes/odyssey/odyssey-white/odyssey-white-02.jpg";

// ORDEN DE LAS IMÁGENES
const images = [
  odysseyWhite1,
  odysseyWhite2,
];

export function Odyssey({ onGoHome }) {
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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  return (
    <>
      {/* HEADER GLOBAL */}
      <Header onGoHome={onGoHome} />

      <main>
        {/* TÍTULO */}
        <h1 className="titulo-coleccion">ODYSSEY</h1>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/pdf/ODYSSEY.pdf" />

        {/* GALERÍA */}

        {/* COLOR WHITE */}
        <h3 className="color-title">ODYSSEY WHITE</h3>
        <section className="gallery-grid">
          <img
            src={odysseyWhite1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="ODYSSEY WHITE 1"
          />
          <img
            src={odysseyWhite2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="ODYSSEY WHITE 2"
          />
        </section>
      </main>

      {/* MODAL REUTILIZABLE */}
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
