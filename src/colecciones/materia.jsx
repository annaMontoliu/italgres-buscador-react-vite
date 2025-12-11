// src/colecciones/materia.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import materiaGesso1 from "../assets/imagenes/materia/gesso/materia-gesso-01.jpg";
import materiaSeta1 from "../assets/imagenes/materia/seta/materia-seta-01.jpg";

// ORDEN EXACTO DE LAS IMÁGENES
const images = [materiaGesso1, materiaSeta1];

export function Materia({ onGoHome }) {
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
        <h1 className="titulo-coleccion">MATERIA</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout
          infoUrl="https://kronosceramiche.com/src/uploads/sites/3/2025/03/Materia.pdf?_gl=1*1eq5iow*_up*MQ..*_ga*MTIyMTU1NTc1My4xNzY1NDgyOTky*_ga_4S4P65CL4D*czE3NjU0ODI5OTIkbzEkZzAkdDE3NjU0ODI5OTIkajYwJGwwJGgxNzY5MTYwNDY5"
        />

        {/* ---- GALERÍA ---- */}

        {/* Color GESSO */}
        <h3 className="color-title">MATERIA GESSO</h3>
        <section className="gallery-grid">
          <img
            src={materiaGesso1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="MATERIA GESSO 1"
          />
        </section>

        {/* Color SETA */}
        <h3 className="color-title">MATERIA SETA</h3>
        <section className="gallery-grid">
          <img
            src={materiaSeta1}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="MATERIA SETA 1"
          />
        </section>

        {/* Color CENERE (sin imágenes de momento) */}
        <h3 className="color-title">MATERIA CENERE</h3>
        <section className="gallery-grid">
          {/* Añade aquí las imágenes de CENERE cuando las tengas */}
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
