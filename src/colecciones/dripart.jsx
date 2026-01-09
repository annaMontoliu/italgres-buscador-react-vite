// src/colecciones/dripart.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

// CALAMITE (2)
import dripartCalamite01 from "../assets/imagenes/dripart/dripart-calamite/dripart-calamite-01.jpg";
import dripartCalamite02 from "../assets/imagenes/dripart/dripart-calamite/dripart-calamite-02.jpg";

// IRON (4)
import dripartIron01 from "../assets/imagenes/dripart/dripart-iron/dripart-iron-01.jpg";
import dripartIron02 from "../assets/imagenes/dripart/dripart-iron/dripart-iron-02.jpg";
import dripartIron03 from "../assets/imagenes/dripart/dripart-iron/dripart-iron-03.jpg";
import dripartIron04 from "../assets/imagenes/dripart/dripart-iron/dripart-iron-04.jpg";

// BRONZE (3)
import dripartBronze01 from "../assets/imagenes/dripart/dripart-bronze/dripart-bronze-01.jpg";
import dripartBronze02 from "../assets/imagenes/dripart/dripart-bronze/dripart-bronze-02.jpg";
import dripartBronze03 from "../assets/imagenes/dripart/dripart-bronze/dripart-bronze-03.jpg";

// VERDEGRIS (5)
import dripartVerdegris01 from "../assets/imagenes/dripart/dripart-verdegris/dripart-verdegris-01.jpg";
import dripartVerdegris02 from "../assets/imagenes/dripart/dripart-verdegris/dripart-verdegris-02.jpg";
import dripartVerdegris03 from "../assets/imagenes/dripart/dripart-verdegris/dripart-verdegris-03.jpg";
import dripartVerdegris04 from "../assets/imagenes/dripart/dripart-verdegris/dripart-verdegris-04.jpg";
import dripartVerdegris05 from "../assets/imagenes/dripart/dripart-verdegris/dripart-verdegris-05.jpg";

// TITANEO (3)
import dripartTitaneo01 from "../assets/imagenes/dripart/dripart-titaneo/dripart-titaneo-01.jpg";
import dripartTitaneo02 from "../assets/imagenes/dripart/dripart-titaneo/dripart-titaneo-02.jpg";
import dripartTitaneo03 from "../assets/imagenes/dripart/dripart-titaneo/dripart-titaneo-03.jpg";

// ORDEN EXACTO (modal)
const images = [
  // CALAMITE
  dripartCalamite01,
  dripartCalamite02,

  // IRON
  dripartIron01,
  dripartIron02,
  dripartIron03,
  dripartIron04,

  // BRONZE
  dripartBronze01,
  dripartBronze02,
  dripartBronze03,

  // VERDEGRIS
  dripartVerdegris01,
  dripartVerdegris02,
  dripartVerdegris03,
  dripartVerdegris04,
  dripartVerdegris05,

  // TITANEO
  dripartTitaneo01,
  dripartTitaneo02,
  dripartTitaneo03,
];

export function Dripart({ onGoHome }) {
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
        <h1 className="titulo-coleccion">DRIPART</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/pdf/DRIPART.PDF" />

        {/* ---- GALERÍA ---- */}

        {/* Color CALAMITE */}
        <h3 className="color-title">DRIPART CALAMITE</h3>
        <section className="gallery-grid">
          <img
            src={dripartCalamite01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="DRIPART CALAMITE 1"
          />
          <img
            src={dripartCalamite02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="DRIPART CALAMITE 2"
          />
        </section>

        {/* Color IRON */}
        <h3 className="color-title">DRIPART IRON</h3>
        <section className="gallery-grid">
          <img
            src={dripartIron01}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="DRIPART IRON 1"
          />
          <img
            src={dripartIron02}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="DRIPART IRON 2"
          />
          <img
            src={dripartIron03}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="DRIPART IRON 3"
          />
          <img
            src={dripartIron04}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="DRIPART IRON 4"
          />
        </section>

        {/* Color BRONZE */}
        <h3 className="color-title">DRIPART BRONZE</h3>
        <section className="gallery-grid">
          <img
            src={dripartBronze01}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="DRIPART BRONZE 1"
          />
          <img
            src={dripartBronze02}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="DRIPART BRONZE 2"
          />
          <img
            src={dripartBronze03}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="DRIPART BRONZE 3"
          />
        </section>

        {/* Color VERDEGRIS */}
        <h3 className="color-title">DRIPART VERDEGRIS</h3>
        <section className="gallery-grid">
          <img
            src={dripartVerdegris01}
            className="gallery-img"
            onClick={() => openModal(9)}
            loading="lazy"
            alt="DRIPART VERDEGRIS 1"
          />
          <img
            src={dripartVerdegris02}
            className="gallery-img"
            onClick={() => openModal(10)}
            loading="lazy"
            alt="DRIPART VERDEGRIS 2"
          />
          <img
            src={dripartVerdegris03}
            className="gallery-img"
            onClick={() => openModal(11)}
            loading="lazy"
            alt="DRIPART VERDEGRIS 3"
          />
          <img
            src={dripartVerdegris04}
            className="gallery-img"
            onClick={() => openModal(12)}
            loading="lazy"
            alt="DRIPART VERDEGRIS 4"
          />
          <img
            src={dripartVerdegris05}
            className="gallery-img"
            onClick={() => openModal(13)}
            loading="lazy"
            alt="DRIPART VERDEGRIS 5"
          />
        </section>

        {/* Color TITANEO */}
        <h3 className="color-title">DRIPART TITANEO</h3>
        <section className="gallery-grid">
          <img
            src={dripartTitaneo01}
            className="gallery-img"
            onClick={() => openModal(14)}
            loading="lazy"
            alt="DRIPART TITANEO 1"
          />
          <img
            src={dripartTitaneo02}
            className="gallery-img"
            onClick={() => openModal(15)}
            loading="lazy"
            alt="DRIPART TITANEO 2"
          />
          <img
            src={dripartTitaneo03}
            className="gallery-img"
            onClick={() => openModal(16)}
            loading="lazy"
            alt="DRIPART TITANEO 3"
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
