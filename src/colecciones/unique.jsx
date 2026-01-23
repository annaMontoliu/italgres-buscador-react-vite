// src/colecciones/unique.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// UNIQUE WHITE BETON (1)
import uniqueWhiteBeton01 from "../assets/imagenes/unique/unique-white-beton/unique-white-beton-01.jpg";

// UNIQUE NATIVE BETON (3)
import uniqueNativeBeton01 from "../assets/imagenes/unique/unique-native-beton/unique-native-beton-01.jpg";
import uniqueNativeBeton02 from "../assets/imagenes/unique/unique-native-beton/unique-native-beton-02.jpg";
import uniqueNativeBeton03 from "../assets/imagenes/unique/unique-native-beton/unique-native-beton-03.jpg";

// =====================
// ARRAY GLOBAL MODAL
// ORDEN EXACTO
// =====================
const images = [
  // WHITE BETON
  uniqueWhiteBeton01,

  // NATIVE BETON
  uniqueNativeBeton01,
  uniqueNativeBeton02,
  uniqueNativeBeton03,
];

export function Unique({ onGoHome }) {
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
        <h1 className="titulo-coleccion">UNIQUE</h1>

        <ColeccionLayout infoUrl="https://pavigres.com/documentacao/abrirdocumento/UNQCIM/" />

        {/* WHITE BETON */}
        <h3 className="color-title">UNIQUE WHITE BETON</h3>
        <section className="gallery-grid">
          <img
            src={uniqueWhiteBeton01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="UNIQUE WHITE BETON 01"
          />
        </section>

        {/* NATIVE BETON */}
        <h3 className="color-title">UNIQUE NATIVE BETON</h3>
        <section className="gallery-grid">
          <img
            src={uniqueNativeBeton01}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="UNIQUE NATIVE BETON 01"
          />
          <img
            src={uniqueNativeBeton02}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="UNIQUE NATIVE BETON 02"
          />
          <img
            src={uniqueNativeBeton03}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="UNIQUE NATIVE BETON 03"
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
