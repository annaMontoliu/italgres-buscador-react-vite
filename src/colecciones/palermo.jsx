// src/colecciones/palermo.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS
import palermoOak01 from "../assets/imagenes/palermo/palermo-oak/palermo-oak-01.jpg";
import palermoMaple01 from "../assets/imagenes/palermo/palermo-maple/palermo-maple-01.jpg";
import palermoWalnut01 from "../assets/imagenes/palermo/palermo-walnut/palermo-walnut-01.jpg";

// ORDEN EXACTO
const images = [
  palermoOak01,
  palermoMaple01,
  palermoWalnut01,
];

export function Palermo({ onGoHome }) {
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
        <h1 className="titulo-coleccion">PALERMO</h1>

        <ColeccionLayout infoUrl="https://cifreceramica.com/pdf-coleccion/PALERMO/" />

        <h3 className="color-title">PALERMO OAK</h3>
        <section className="gallery-grid">
          <img src={palermoOak01} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="PALERMO OAK 01" />
        </section>

        <h3 className="color-title">PALERMO MAPLE</h3>
        <section className="gallery-grid">
          <img src={palermoMaple01} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="PALERMO MAPLE 01" />
        </section>

        <h3 className="color-title">PALERMO WALNUT</h3>
        <section className="gallery-grid">
          <img src={palermoWalnut01} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="PALERMO WALNUT 01" />
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
