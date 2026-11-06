
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import kilianWhite1 from "../assets/imagenes/kilian/kilian-white/kilian-white-01.jpg";
import kilianWhite2 from "../assets/imagenes/kilian/kilian-white/kilian-white-02.jpg";
import kilianWhite3 from "../assets/imagenes/kilian/kilian-white/kilian-white-03.jpg";

const images = [
  kilianWhite1,
  kilianWhite2,
  kilianWhite3,
];

export function Kilian({ onGoHome }) {
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
        <h1 className="titulo-coleccion">KILIAN</h1>

        <ColeccionLayout infoUrl="/pdf/KILIAN.pdf" />

        <h3 className="color-title">KILIAN WHITE</h3>

        <section className="gallery-grid">
          <img
            src={kilianWhite1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="KILIAN WHITE 1"
          />
          <img
            src={kilianWhite2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="KILIAN WHITE 2"
          />
          <img
            src={kilianWhite3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="KILIAN WHITE 3"
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
