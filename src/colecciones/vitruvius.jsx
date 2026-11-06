
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import vitruviusCream1 from "../assets/imagenes/vitruvius/vitruvius-cream/vitruvius-cream-01.jpg";
import vitruviusIvory1 from "../assets/imagenes/vitruvius/vitruvius-ivory/vitruvius-ivory-01.jpg";

const images = [
  vitruviusCream1,
  vitruviusIvory1,
];

export function Vitruvius({ onGoHome }) {
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
        <h1 className="titulo-coleccion">VITRUVIUS</h1>

        <ColeccionLayout infoUrl="/pdf/VITRUVIUS.pdf" />

        <h3 className="color-title">VITRUVIUS CREAM</h3>

        <section className="gallery-grid">
          <img
            src={vitruviusCream1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="VITRUVIUS CREAM 1"
          />
        </section>

        <h3 className="color-title">VITRUVIUS IVORY</h3>

        <section className="gallery-grid">
          <img
            src={vitruviusIvory1}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="VITRUVIUS IVORY 1"
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
