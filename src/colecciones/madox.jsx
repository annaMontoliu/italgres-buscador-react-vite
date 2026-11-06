
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import madoxWhite1 from "../assets/imagenes/madox/madox-white/madox-white-01.jpg";

const images = [
  madoxWhite1,
];

export function Madox({ onGoHome }) {
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
      (prevIndex - 1 + images.length) % images.length
    );
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">MADOX</h1>

        <ColeccionLayout infoUrl="https://www.halconceramicas.com/en/products/30x60-madox-blanco-mate" />

        <h3 className="color-title">MADOX WHITE</h3>

        <section className="gallery-grid">
          <img
            src={madoxWhite1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="MADOX WHITE 1"
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
