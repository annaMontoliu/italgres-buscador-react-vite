// src/colecciones/materia-classica.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE FOTOS MATERIA CLASSICA BEIGE (3)
import materiaBeige1 from "../assets/imagenes/materia-classica/materia-classica-beige/materia-classica-beige-01.jpg";
import materiaBeige2 from "../assets/imagenes/materia-classica/materia-classica-beige/materia-classica-beige-02.jpg";
import materiaBeige3 from "../assets/imagenes/materia-classica/materia-classica-beige/materia-classica-beige-03.jpg";

// ARRAY GLOBAL EN ORDEN
const images = [materiaBeige1, materiaBeige2, materiaBeige3];

export function MateriaClassica({ onGoHome }) {
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
        <h1 className="titulo-coleccion">MATERIA CLASSICA</h1>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout
          infoUrl="https://www.fapceramiche.com/media/products/documents/collection/Cat_Materia_Classica_November_2025_web.pdf"
        />

        {/* ---- GALERÍA ---- */}

        {/* Color BEIGE */}
        <h3 className="color-title">MATERIA CLASSICA BEIGE</h3>
        <section className="gallery-grid">
          <img
            src={materiaBeige1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="MATERIA CLASSICA BEIGE 1"
          />
          <img
            src={materiaBeige2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="MATERIA CLASSICA BEIGE 2"
          />
          <img
            src={materiaBeige3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="MATERIA CLASSICA BEIGE 3"
          />
        </section>
      </main>

      {/* MODAL REUTILIZABLE */}
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
