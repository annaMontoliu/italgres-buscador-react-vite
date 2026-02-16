// src/colecciones/pietra-essenza.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import pietraEssenzaCotone1 from "../assets/imagenes/pietra-essenza/pietra-essenza-cotone/pietra-essenza-cotone-01.jpg";
import pietraEssenzaCotone2 from "../assets/imagenes/pietra-essenza/pietra-essenza-cotone/pietra-essenza-cotone-02.jpg";

const images = [pietraEssenzaCotone1, pietraEssenzaCotone2];

export function PietraEssenza({ onGoHome }) {
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
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">PIETRA ESSENZA</h1>

        <ColeccionLayout infoUrl="https://www.emilgroup.it/emil/prodotti/documenticollezioni_emil/PietraEssenza%20Catalogo%202025.10%20Web.pdf" />

        <h3 className="color-title">PIETRA ESSENZA COTONE</h3>
        <section className="gallery-grid">
          <img
            src={pietraEssenzaCotone1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="PIETRA ESSENZA COTONE 1"
          />
          <img
            src={pietraEssenzaCotone2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="PIETRA ESSENZA COTONE 2"
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
