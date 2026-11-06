
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import marsellaBlanco1 from "../assets/imagenes/marsella/marsella-blanco/marsella-blanco-01.jpg";

const images = [
  marsellaBlanco1,
];

export function Marsella({ onGoHome }) {
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
        <h1 className="titulo-coleccion">MARSELLA</h1>

        <ColeccionLayout infoUrl="https://www.bellacasaceramica.com/wp-content/uploads/2020/03/BELLACASA-Catalogo-GENERAL-2020-2021-MARSELLA-1.pdf" />

        <h3 className="color-title">MARSELLA BLANCO</h3>

        <section className="gallery-grid">
          <img
            src={marsellaBlanco1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="MARSELLA BLANCO 1"
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
