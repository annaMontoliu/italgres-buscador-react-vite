
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import anticVelhiraWhite1 from "../assets/imagenes/antic-velhira/antic-velhira-white/antic-velhira-white-01.jpg";
import anticVelhiraWhite2 from "../assets/imagenes/antic-velhira/antic-velhira-white/antic-velhira-white-02.jpg";
import anticVelhiraWhite3 from "../assets/imagenes/antic-velhira/antic-velhira-white/antic-velhira-white-03.jpg";

const images = [
  anticVelhiraWhite1,
  anticVelhiraWhite2,
  anticVelhiraWhite3,
];

export function AnticVelhira({ onGoHome }) {
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
        <h1 className="titulo-coleccion">ANTIC VELHIRA</h1>

        <ColeccionLayout infoUrl="https://www.pamesa.com/en/seriep/VELHIRA_1050020046262.html" />

        <h3 className="color-title">ANTIC VELHIRA WHITE</h3>

        <section className="gallery-grid">
          <img
            src={anticVelhiraWhite1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="ANTIC VELHIRA WHITE 1"
          />
          <img
            src={anticVelhiraWhite2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="ANTIC VELHIRA WHITE 2"
          />
          <img
            src={anticVelhiraWhite3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="ANTIC VELHIRA WHITE 3"
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
