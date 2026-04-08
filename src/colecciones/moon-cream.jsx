// src/colecciones/moon-cream.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";
import { ShowroomColors } from "../components/ShowroomColors";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

import moonCreamBeige1 from "../assets/imagenes/moon-cream/moon-cream-beige/moon-cream-beige-01.jpg";
import moonCreamBeige2 from "../assets/imagenes/moon-cream/moon-cream-beige/moon-cream-beige-02.jpg";
import moonCreamBeige3 from "../assets/imagenes/moon-cream/moon-cream-beige/moon-cream-beige-03.jpg";
import moonCreamBeige4 from "../assets/imagenes/moon-cream/moon-cream-beige/moon-cream-beige-04.jpg";

import moonCreamBianco1 from "../assets/imagenes/moon-cream/moon-cream-bianco/moon-cream-bianco-01.jpg";
import moonCreamBianco2 from "../assets/imagenes/moon-cream/moon-cream-bianco/moon-cream-bianco-02.jpg";

import moonCreamGrigio1 from "../assets/imagenes/moon-cream/moon-cream-grigio/moon-cream-grigio-01.jpg";
import moonCreamGrigio2 from "../assets/imagenes/moon-cream/moon-cream-grigio/moon-cream-grigio-02.jpg";

import moonCreamNaturale1 from "../assets/imagenes/moon-cream/moon-cream-naturale/moon-cream-naturale-01.jpg";
import moonCreamNaturale2 from "../assets/imagenes/moon-cream/moon-cream-naturale/moon-cream-naturale-02.jpg";

import moonCreamTerra1 from "../assets/imagenes/moon-cream/moon-cream-terra/moon-cream-terra-01.jpg";
import moonCreamTerra2 from "../assets/imagenes/moon-cream/moon-cream-terra/moon-cream-terra-02.jpg";
import moonCreamTerra3 from "../assets/imagenes/moon-cream/moon-cream-terra/moon-cream-terra-03.jpg";
import moonCreamTerra4 from "../assets/imagenes/moon-cream/moon-cream-terra/moon-cream-terra-04.jpg";

// IMPORTS TACOS
import tacoMoonCreamBiancoMesh from "../assets/imagenes/moon-cream/taco-moon-cream/taco-moon-cream-bianco-mesh.jpg";
import tacoMoonCreamGrigioMesh from "../assets/imagenes/moon-cream/taco-moon-cream/taco-moon-cream-grigio-mesh.jpg";
import tacoMoonCreamNaturaleMesh from "../assets/imagenes/moon-cream/taco-moon-cream/taco-moon-cream-naturale-mesh.jpg";
import tacoMoonCreamTerraMesh from "../assets/imagenes/moon-cream/taco-moon-cream/taco-moon-cream-terra-mesh.jpg";
import tacoMoonCreamBianco from "../assets/imagenes/moon-cream/taco-moon-cream/taco-moon-cream-bianco.jpg";
import tacoMoonCreamGrigio from "../assets/imagenes/moon-cream/taco-moon-cream/taco-moon-cream-grigio.jpg";
import tacoMoonCreamNaturale from "../assets/imagenes/moon-cream/taco-moon-cream/taco-moon-cream-naturale.jpg";
import tacoMoonCreamTerra from "../assets/imagenes/moon-cream/taco-moon-cream/taco-moon-cream-terra.jpg";

// ORDEN EXACTO
const images = [
  moonCreamBeige1,
  moonCreamBeige2,
  moonCreamBeige3,
  moonCreamBeige4,

  moonCreamBianco1,
  moonCreamBianco2,

  moonCreamGrigio1,
  moonCreamGrigio2,

  moonCreamNaturale1,
  moonCreamNaturale2,

  moonCreamTerra1,
  moonCreamTerra2,
  moonCreamTerra3,
  moonCreamTerra4,
];

export function MoonCream({ onGoHome }) {
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
        <h1 className="titulo-coleccion">MOON CREAM</h1>

        {/* SHOWROOM COLORS (TACOS) */}
        <ShowroomColors
          title="showroom colors"
          items={[
            { label: "BIANCO MESH", thumb: tacoMoonCreamBiancoMesh },
            { label: "GRIGIO MESH", thumb: tacoMoonCreamGrigioMesh },
            { label: "NATURALE MESH", thumb: tacoMoonCreamNaturaleMesh },
            { label: "TERRA MESH", thumb: tacoMoonCreamTerraMesh },
            { label: "BIANCO", thumb: tacoMoonCreamBianco },
            { label: "GRIGIO", thumb: tacoMoonCreamGrigio },
            { label: "NATURALE", thumb: tacoMoonCreamNaturale },
            { label: "TERRA", thumb: tacoMoonCreamTerra },
          ]}
        />

        {/* FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.lafabbrica.it/wp-content/uploads/2025/11/LF-AVA_Moon-Cream_Catalog.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color BEIGE */}
        <h3 className="color-title">MOON CREAM BEIGE</h3>
        <section className="gallery-grid">
          <img
            src={moonCreamBeige1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="MOON CREAM BEIGE 1"
          />
          <img
            src={moonCreamBeige2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="MOON CREAM BEIGE 2"
          />
          <img
            src={moonCreamBeige3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="MOON CREAM BEIGE 3"
          />
          <img
            src={moonCreamBeige4}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="MOON CREAM BEIGE 4"
          />
        </section>

        {/* Color BIANCO */}
        <h3 className="color-title">MOON CREAM BIANCO</h3>
        <section className="gallery-grid">
          <img
            src={moonCreamBianco1}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="MOON CREAM BIANCO 1"
          />
          <img
            src={moonCreamBianco2}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="MOON CREAM BIANCO 2"
          />
        </section>

        {/* Color GRIGIO */}
        <h3 className="color-title">MOON CREAM GRIGIO</h3>
        <section className="gallery-grid">
          <img
            src={moonCreamGrigio1}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="MOON CREAM GRIGIO 1"
          />
          <img
            src={moonCreamGrigio2}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="MOON CREAM GRIGIO 2"
          />
        </section>

        {/* Color NATURALE */}
        <h3 className="color-title">MOON CREAM NATURALE</h3>
        <section className="gallery-grid">
          <img
            src={moonCreamNaturale1}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="MOON CREAM NATURALE 1"
          />
          <img
            src={moonCreamNaturale2}
            className="gallery-img"
            onClick={() => openModal(9)}
            loading="lazy"
            alt="MOON CREAM NATURALE 2"
          />
        </section>

        {/* Color TERRA */}
        <h3 className="color-title">MOON CREAM TERRA</h3>
        <section className="gallery-grid">
          <img
            src={moonCreamTerra1}
            className="gallery-img"
            onClick={() => openModal(10)}
            loading="lazy"
            alt="MOON CREAM TERRA 1"
          />
          <img
            src={moonCreamTerra2}
            className="gallery-img"
            onClick={() => openModal(11)}
            loading="lazy"
            alt="MOON CREAM TERRA 2"
          />
          <img
            src={moonCreamTerra3}
            className="gallery-img"
            onClick={() => openModal(12)}
            loading="lazy"
            alt="MOON CREAM TERRA 3"
          />
          <img
            src={moonCreamTerra4}
            className="gallery-img"
            onClick={() => openModal(13)}
            loading="lazy"
            alt="MOON CREAM TERRA 4"
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