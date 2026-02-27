// src/colecciones/cassero.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// CASSERO ANTRACITE (1)
import casseroAntracite01 from "../assets/imagenes/cassero/cassero-antracite/cassero-antracite-01.jpg";

// CASSERO GREY (4)
import casseroGrey01 from "../assets/imagenes/cassero/cassero-grey/cassero-grey-01.jpg";
import casseroGrey02 from "../assets/imagenes/cassero/cassero-grey/cassero-grey-02.jpg";
import casseroGrey03 from "../assets/imagenes/cassero/cassero-grey/cassero-grey-03.jpg";
import casseroGrey04 from "../assets/imagenes/cassero/cassero-grey/cassero-grey-04.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [
  casseroAntracite01, // 0
  casseroGrey01,      // 1
  casseroGrey02,      // 2
  casseroGrey03,      // 3
  casseroGrey04,      // 4
];

export function Cassero({ onGoHome }) {
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
        <h1 className="titulo-coleccion">CASSERO</h1>

        <ColeccionLayout infoUrl="/pdf/CASSERO.pdf" />

        {/* ANTRACITE */}
        <h3 className="color-title">CASSERO ANTRACITE</h3>
        <section className="gallery-grid">
          <img
            src={casseroAntracite01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="CASSERO ANTRACITE 01"
          />
        </section>

        {/* GREY */}
        <h3 className="color-title">CASSERO GREY</h3>
        <section className="gallery-grid">
          <img
            src={casseroGrey01}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="CASSERO GREY 01"
          />
          <img
            src={casseroGrey02}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="CASSERO GREY 02"
          />
          <img
            src={casseroGrey03}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="CASSERO GREY 03"
          />
          <img
            src={casseroGrey04}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="CASSERO GREY 04"
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