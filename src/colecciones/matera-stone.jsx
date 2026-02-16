// src/colecciones/matera-stone.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import materaStoneBeige1 from "../assets/imagenes/matera-stone/matera-stone-beige/matera-stone-beige-01.jpg";
import materaStoneBeige2 from "../assets/imagenes/matera-stone/matera-stone-beige/matera-stone-beige-02.jpg";
import materaStoneBeige3 from "../assets/imagenes/matera-stone/matera-stone-beige/matera-stone-beige-03.jpg";
import materaStoneBeige4 from "../assets/imagenes/matera-stone/matera-stone-beige/matera-stone-beige-04.jpg";
import materaStoneBeige5 from "../assets/imagenes/matera-stone/matera-stone-beige/matera-stone-beige-05.jpg";
import materaStoneBeige6 from "../assets/imagenes/matera-stone/matera-stone-beige/matera-stone-beige-06.jpg";

import materaStoneWhite1 from "../assets/imagenes/matera-stone/matera-stone-white/matera-stone-white-01.jpg";
import materaStoneWhite2 from "../assets/imagenes/matera-stone/matera-stone-white/matera-stone-white-02.jpg";
import materaStoneWhite3 from "../assets/imagenes/matera-stone/matera-stone-white/matera-stone-white-03.jpg";
import materaStoneWhite4 from "../assets/imagenes/matera-stone/matera-stone-white/matera-stone-white-04.jpg";
import materaStoneWhite5 from "../assets/imagenes/matera-stone/matera-stone-white/matera-stone-white-05.jpg";
import materaStoneWhite6 from "../assets/imagenes/matera-stone/matera-stone-white/matera-stone-white-06.jpg";
import materaStoneWhite7 from "../assets/imagenes/matera-stone/matera-stone-white/matera-stone-white-07.jpg";
import materaStoneWhite8 from "../assets/imagenes/matera-stone/matera-stone-white/matera-stone-white-08.jpg";
import materaStoneWhite9 from "../assets/imagenes/matera-stone/matera-stone-white/matera-stone-white-09.jpg";
import materaStoneWhite10 from "../assets/imagenes/matera-stone/matera-stone-white/matera-stone-white-10.jpg";
import materaStoneWhite11 from "../assets/imagenes/matera-stone/matera-stone-white/matera-stone-white-11.jpg";

// ORDEN EXACTO: primero BEIGE (6), luego WHITE (11)
const images = [
  materaStoneBeige1,
  materaStoneBeige2,
  materaStoneBeige3,
  materaStoneBeige4,
  materaStoneBeige5,
  materaStoneBeige6,

  materaStoneWhite1,
  materaStoneWhite2,
  materaStoneWhite3,
  materaStoneWhite4,
  materaStoneWhite5,
  materaStoneWhite6,
  materaStoneWhite7,
  materaStoneWhite8,
  materaStoneWhite9,
  materaStoneWhite10,
  materaStoneWhite11,
];

export function MateraStone({ onGoHome }) {
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
        <h1 className="titulo-coleccion">MATERA STONE</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.emilgroup.it/emil/prodotti/documenticollezioni_emil/Materastone%20Catalogo%202025.11%20Web.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color BEIGE */}
        <h3 className="color-title">MATERA STONE BEIGE</h3>
        <section className="gallery-grid">
          <img src={materaStoneBeige1} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="MATERA STONE BEIGE 1" />
          <img src={materaStoneBeige2} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="MATERA STONE BEIGE 2" />
          <img src={materaStoneBeige3} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="MATERA STONE BEIGE 3" />
          <img src={materaStoneBeige4} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="MATERA STONE BEIGE 4" />
          <img src={materaStoneBeige5} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="MATERA STONE BEIGE 5" />
          <img src={materaStoneBeige6} className="gallery-img" onClick={() => openModal(5)} loading="lazy" alt="MATERA STONE BEIGE 6" />
        </section>

        {/* Color WHITE */}
        <h3 className="color-title">MATERA STONE WHITE</h3>
        <section className="gallery-grid">
          <img src={materaStoneWhite1} className="gallery-img" onClick={() => openModal(6)} loading="lazy" alt="MATERA STONE WHITE 1" />
          <img src={materaStoneWhite2} className="gallery-img" onClick={() => openModal(7)} loading="lazy" alt="MATERA STONE WHITE 2" />
          <img src={materaStoneWhite3} className="gallery-img" onClick={() => openModal(8)} loading="lazy" alt="MATERA STONE WHITE 3" />
          <img src={materaStoneWhite4} className="gallery-img" onClick={() => openModal(9)} loading="lazy" alt="MATERA STONE WHITE 4" />
          <img src={materaStoneWhite5} className="gallery-img" onClick={() => openModal(10)} loading="lazy" alt="MATERA STONE WHITE 5" />
          <img src={materaStoneWhite6} className="gallery-img" onClick={() => openModal(11)} loading="lazy" alt="MATERA STONE WHITE 6" />
          <img src={materaStoneWhite7} className="gallery-img" onClick={() => openModal(12)} loading="lazy" alt="MATERA STONE WHITE 7" />
          <img src={materaStoneWhite8} className="gallery-img" onClick={() => openModal(13)} loading="lazy" alt="MATERA STONE WHITE 8" />
          <img src={materaStoneWhite9} className="gallery-img" onClick={() => openModal(14)} loading="lazy" alt="MATERA STONE WHITE 9" />
          <img src={materaStoneWhite10} className="gallery-img" onClick={() => openModal(15)} loading="lazy" alt="MATERA STONE WHITE 10" />
          <img src={materaStoneWhite11} className="gallery-img" onClick={() => openModal(16)} loading="lazy" alt="MATERA STONE WHITE 11" />
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
