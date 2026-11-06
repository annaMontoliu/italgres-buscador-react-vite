
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import miralithGesso1 from "../assets/imagenes/miralith/miralith-gesso/miralith-gesso-01.jpg";
import miralithGesso2 from "../assets/imagenes/miralith/miralith-gesso/miralith-gesso-02.jpg";
import miralithGesso3 from "../assets/imagenes/miralith/miralith-gesso/miralith-gesso-03.jpg";
import miralithGesso4 from "../assets/imagenes/miralith/miralith-gesso/miralith-gesso-04.jpg";

const images = [
  miralithGesso1,
  miralithGesso2,
  miralithGesso3,
  miralithGesso4,
];

export function Miralith({ onGoHome }) {
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
        <h1 className="titulo-coleccion">MIRALITH</h1>

        <ColeccionLayout infoUrl="https://www.cerdomus.com/flex/FixedPages/Common/serveAllegato.php/L/EN/id/1147" />

        <h3 className="color-title">MIRALITH GESSO</h3>

        <section className="gallery-grid">
          <img
            src={miralithGesso1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="MIRALITH GESSO 1"
          />
          <img
            src={miralithGesso2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="MIRALITH GESSO 2"
          />
          <img
            src={miralithGesso3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="MIRALITH GESSO 3"
          />
          <img
            src={miralithGesso4}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="MIRALITH GESSO 4"
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
