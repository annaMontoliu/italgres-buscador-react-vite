// src/colecciones/lumina-stone.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...
import luminaStoneLight01 from "../assets/imagenes/lumina-stone/lumina-stone-light/lumina-stone-light-01.jpg";
import luminaStoneLight02 from "../assets/imagenes/lumina-stone/lumina-stone-light/lumina-stone-light-02.jpg";

import luminaStoneBeige01 from "../assets/imagenes/lumina-stone/lumina-stone-beige/lumina-stone-beige-01.jpg";

import luminaStoneGrey01 from "../assets/imagenes/lumina-stone/lumina-stone-grey/lumina-stone-grey-01.jpg";
import luminaStoneGrey02 from "../assets/imagenes/lumina-stone/lumina-stone-grey/lumina-stone-grey-02.jpg";
import luminaStoneGrey03 from "../assets/imagenes/lumina-stone/lumina-stone-grey/lumina-stone-grey-03.jpg";
import luminaStoneGrey04 from "../assets/imagenes/lumina-stone/lumina-stone-grey/lumina-stone-grey-04.jpg";

// ORDEN EXACTO
const images = [
  luminaStoneLight01,
  luminaStoneLight02,
  luminaStoneBeige01,
  luminaStoneGrey01,
  luminaStoneGrey02,
  luminaStoneGrey03,
  luminaStoneGrey04,
];

export function LuminaStone({ onGoHome }) {
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
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">LUMINA STONE</h1>

        <ColeccionLayout infoUrl="https://www.fapceramiche.com/media/products/documents/collection/Lumina_Stone_2025.pdf" />

        {/* Color LIGHT */}
        <h3 className="color-title">LUMINA STONE LIGHT</h3>
        <section className="gallery-grid">
          <img
            src={luminaStoneLight01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="LUMINA STONE LIGHT 01"
          />
          <img
            src={luminaStoneLight02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="LUMINA STONE LIGHT 02"
          />
        </section>

        {/* Color BEIGE */}
        <h3 className="color-title">LUMINA STONE BEIGE</h3>
        <section className="gallery-grid">
          <img
            src={luminaStoneBeige01}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="LUMINA STONE BEIGE 01"
          />
        </section>

        {/* Color GREY */}
        <h3 className="color-title">LUMINA STONE GREY</h3>
        <section className="gallery-grid">
          <img
            src={luminaStoneGrey01}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="LUMINA STONE GREY 01"
          />
          <img
            src={luminaStoneGrey02}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="LUMINA STONE GREY 02"
          />
          <img
            src={luminaStoneGrey03}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="LUMINA STONE GREY 03"
          />
          <img
            src={luminaStoneGrey04}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="LUMINA STONE GREY 04"
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