// src/colecciones/ka-03.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import ka0301 from "../assets/imagenes/ka-03/ka-03-01.jpg";
import ka0302 from "../assets/imagenes/ka-03/ka-03-02.jpg";
import ka0303 from "../assets/imagenes/ka-03/ka-03-03.jpg";
import ka0304 from "../assets/imagenes/ka-03/ka-03-04.jpg";
import ka0305 from "../assets/imagenes/ka-03/ka-03-05.jpg";

// ORDEN EXACTO
const images = [
  ka0301,
  ka0302,
  ka0303,
  ka0304,
  ka0305,
];

export function Ka03({ onGoHome }) {
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
      {/* HEADER GLOBAL */}
      <Header onGoHome={onGoHome} />

      <main>
        {/* Título */}
        <h1 className="titulo-coleccion">KA 03</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://mirage-cdn.thron.com/static/DZ8UV0_Mirage_Catalogo_Kao_-_Giugno_2025_AD0T1V.pdf?xseo=&response-content-disposition=inline%3Bfilename%3D%22catalogue-kao-pdf.pdf%22" />

        {/* ---- GALERÍA ---- */}

        <h3 className="color-title">KA 03</h3>
        <section className="gallery-grid">
          <img
            src={ka0301}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="KA 03 1"
          />
          <img
            src={ka0302}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="KA 03 2"
          />
          <img
            src={ka0303}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="KA 03 3"
          />
          <img
            src={ka0304}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="KA 03 4"
          />
          <img
            src={ka0305}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="KA 03 5"
          />
        </section>
      </main>

      {/* ---- MODAL REUTILIZABLE ---- */}
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