
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import iblaLinfa1 from "../assets/imagenes/ibla/ibla-linfa/ibla-linfa-01.jpg";
import iblaNera1 from "../assets/imagenes/ibla/ibla-nera/ibla-nera-01.jpg";

const images = [
  iblaLinfa1,
  iblaNera1,
];

export function Ibla({ onGoHome }) {
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
        <h1 className="titulo-coleccion">IBLA</h1>

        <ColeccionLayout infoUrl="https://www.ceramiche-piemme.com/product/ibla/" />

        <h3 className="color-title">IBLA LINFA</h3>

        <section className="gallery-grid">
          <img
            src={iblaLinfa1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="IBLA LINFA 1"
          />
        </section>

        <h3 className="color-title">IBLA NERA</h3>

        <section className="gallery-grid">
          <img
            src={iblaNera1}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="IBLA NERA 1"
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
