
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import canbyGrey1 from "../assets/imagenes/canby/canby-grey/canby-grey-01.jpg";
import canbyGrey2 from "../assets/imagenes/canby/canby-grey/canby-grey-02.jpg";
import canbyGrey3 from "../assets/imagenes/canby/canby-grey/canby-grey-03.jpg";
import canbyGrey4 from "../assets/imagenes/canby/canby-grey/canby-grey-04.jpg";

const images = [
  canbyGrey1,
  canbyGrey2,
  canbyGrey3,
  canbyGrey4,
];

export function Canby({ onGoHome }) {
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
        <h1 className="titulo-coleccion">CANBY</h1>

        <ColeccionLayout infoUrl="/pdf/CANBY.pdf" />

        <h3 className="color-title">CANBY GREY</h3>

        <section className="gallery-grid">
          <img
            src={canbyGrey1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="CANBY GREY 1"
          />
          <img
            src={canbyGrey2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="CANBY GREY 2"
          />
          <img
            src={canbyGrey3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="CANBY GREY 3"
          />
          <img
            src={canbyGrey4}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="CANBY GREY 4"
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
