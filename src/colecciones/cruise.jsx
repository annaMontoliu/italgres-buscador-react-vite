// src/colecciones/cruise.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import cruiseBianco1 from "../assets/imagenes/cruise/cruise-bianco/cruise-bianco-01.jpg";
import cruiseBianco2 from "../assets/imagenes/cruise/cruise-bianco/cruise-bianco-02.jpg";

const images = [cruiseBianco1, cruiseBianco2];

export function Cruise({ onGoHome }) {
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
        <h1 className="titulo-coleccion">CRUISE</h1>

        <ColeccionLayout infoUrl="/pdf/CRUISE.pdf" />

        <h3 className="color-title">CRUISE BIANCO</h3>
        <section className="gallery-grid">
          <img
            src={cruiseBianco1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="CRUISE BIANCO 1"
          />
          <img
            src={cruiseBianco2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="CRUISE BIANCO 2"
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
