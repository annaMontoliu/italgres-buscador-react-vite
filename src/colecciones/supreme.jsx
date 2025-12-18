// Supreme.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import supremeWhite01 from "../assets/imagenes/supreme/supreme-white/supreme-white-01.jpg";
import supremeWhite02 from "../assets/imagenes/supreme/supreme-white/supreme-white-02.jpg";
import supremeWhite03 from "../assets/imagenes/supreme/supreme-white/supreme-white-03.jpg";
import supremeWhite04 from "../assets/imagenes/supreme/supreme-white/supreme-white-04.jpg";
import supremeWhite05 from "../assets/imagenes/supreme/supreme-white/supreme-white-05.jpg";
import supremeWhite06 from "../assets/imagenes/supreme/supreme-white/supreme-white-06.jpg";

// ORDEN EXACTO
const images = [
  supremeWhite01,
  supremeWhite02,
  supremeWhite03,
  supremeWhite04,
  supremeWhite05,
  supremeWhite06,
];

export function Supreme({ onGoHome }) {
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
      {/* HEADER GLOBAL */}
      <Header onGoHome={onGoHome} />

      <main>
        {/* Título */}
        <h1 className="titulo-coleccion">SUPREME</h1>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.cerdomus.com/flex/FixedPages/Common/serveAllegato.php/L/EN/id/903" />

        {/* GALERÍA */}
        <h3 className="color-title">SUPREME WHITE</h3>
        <section className="gallery-grid">
          <img src={supremeWhite01} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="SUPREME WHITE 01" />
          <img src={supremeWhite02} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="SUPREME WHITE 02" />
          <img src={supremeWhite03} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="SUPREME WHITE 03" />
          <img src={supremeWhite04} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="SUPREME WHITE 04" />
          <img src={supremeWhite05} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="SUPREME WHITE 05" />
          <img src={supremeWhite06} className="gallery-img" onClick={() => openModal(5)} loading="lazy" alt="SUPREME WHITE 06" />
        </section>
      </main>

      {/* MODAL */}
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
