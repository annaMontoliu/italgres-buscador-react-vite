// src/colecciones/dust.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE IMÁGENES
import dust01 from "../assets/imagenes/dust/dust-01.jpg";
import dust02 from "../assets/imagenes/dust/dust-02.jpg";
import dust03 from "../assets/imagenes/dust/dust-03.jpg";
import dust04 from "../assets/imagenes/dust/dust-04.jpg";
import dust05 from "../assets/imagenes/dust/dust-05.jpg";
import dust06 from "../assets/imagenes/dust/dust-06.jpg";
import dust07 from "../assets/imagenes/dust/dust-07.jpg";
import dust08 from "../assets/imagenes/dust/dust-08.jpg";
import dust09 from "../assets/imagenes/dust/dust-09.jpg";
import dust10 from "../assets/imagenes/dust/dust-10.jpg";
import dust11 from "../assets/imagenes/dust/dust-11.jpg";
import dust12 from "../assets/imagenes/dust/dust-12.jpg";
import dust13 from "../assets/imagenes/dust/dust-13.jpg";
import dust14 from "../assets/imagenes/dust/dust-14.jpg";
import dust15 from "../assets/imagenes/dust/dust-15.jpg";
import dust16 from "../assets/imagenes/dust/dust-16.jpg";
import dust17 from "../assets/imagenes/dust/dust-17.jpg";

const images = [
  dust01,
  dust02,
  dust03,
  dust04,
  dust05,
  dust06,
  dust07,
  dust08,
  dust09,
  dust10,
  dust11,
  dust12,
  dust13,
  dust14,
  dust15,
  dust16,
  dust17,
];

export function Dust({ onGoHome }) {
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
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <>
      <Header />

      <main>

        {/* MIGAS DE PAN */}
        <div className="breadcrumb-boutique">
          Boutique &gt; A &gt; A1 &gt; DUST
        </div>

        {/* TITULO */}
        <h1 className="titulo-coleccion boutique-title">DUST</h1>

        <div className="boutique-info">
          <p>2"x8" (ELIOS)</p>
          <p>A-1</p>
        </div>

        {/* BOTON MORE INFO */}
        <ColeccionLayout infoUrl="https://eliosceramica.com/wp-content/uploads/2023/10/DUST_catalogo.pdf" />

        {/* GALERIA */}
        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`DUST ${index + 1}`}
            />
          ))}
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