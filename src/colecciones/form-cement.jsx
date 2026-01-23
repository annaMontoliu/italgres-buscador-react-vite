// src/colecciones/form-cement.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// FORM CEMENT (9)
import formCement01 from "../assets/imagenes/form-cement/form-cement-01.jpg";
import formCement02 from "../assets/imagenes/form-cement/form-cement-02.jpg";
import formCement03 from "../assets/imagenes/form-cement/form-cement-03.jpg";
import formCement04 from "../assets/imagenes/form-cement/form-cement-04.jpg";
import formCement05 from "../assets/imagenes/form-cement/form-cement-05.jpg";
import formCement06 from "../assets/imagenes/form-cement/form-cement-06.jpg";
import formCement07 from "../assets/imagenes/form-cement/form-cement-07.jpg";
import formCement08 from "../assets/imagenes/form-cement/form-cement-08.jpg";
import formCement09 from "../assets/imagenes/form-cement/form-cement-09.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [
  formCement01,
  formCement02,
  formCement03,
  formCement04,
  formCement05,
  formCement06,
  formCement07,
  formCement08,
  formCement09,
];

export function FormCement({ onGoHome }) {
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
        <h1 className="titulo-coleccion">FORM CEMENT</h1>

        <ColeccionLayout infoUrl="/pdf/FORM-CEMENT.pdf" />

        <h3 className="color-title">FORM CEMENT</h3>
        <section className="gallery-grid">
          <img src={formCement01} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="FORM CEMENT 01" />
          <img src={formCement02} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="FORM CEMENT 02" />
          <img src={formCement03} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="FORM CEMENT 03" />
          <img src={formCement04} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="FORM CEMENT 04" />
          <img src={formCement05} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="FORM CEMENT 05" />
          <img src={formCement06} className="gallery-img" onClick={() => openModal(5)} loading="lazy" alt="FORM CEMENT 06" />
          <img src={formCement07} className="gallery-img" onClick={() => openModal(6)} loading="lazy" alt="FORM CEMENT 07" />
          <img src={formCement08} className="gallery-img" onClick={() => openModal(7)} loading="lazy" alt="FORM CEMENT 08" />
          <img src={formCement09} className="gallery-img" onClick={() => openModal(8)} loading="lazy" alt="FORM CEMENT 09" />
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
