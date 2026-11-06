
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import grandiosaCristArgento1 from "../assets/imagenes/grandiosa-crist/grandiosa-crist-argento/grandiosa-crist-argento-01.jpg";

const images = [
  grandiosaCristArgento1,
];

export function GrandiosaCrist({ onGoHome }) {
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
        <h1 className="titulo-coleccion">GRANDIOSA CRIST</h1>

        <ColeccionLayout infoUrl="/pdf/GRANDIOSA-CRIST.pdf" />

        <h3 className="color-title">GRANDIOSA CRIST ARGENTO</h3>

        <section className="gallery-grid">
          <img
            src={grandiosaCristArgento1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="GRANDIOSA CRIST ARGENTO 1"
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
