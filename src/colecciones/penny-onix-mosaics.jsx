// src/colecciones/penny-onix-mosaics.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import pennyOnixMosaics01 from "../assets/imagenes/penny-onix-mosaics/penny-onix-mosaics-01.jpg";
import pennyOnixMosaics02 from "../assets/imagenes/penny-onix-mosaics/penny-onix-mosaics-02.jpg";
import pennyOnixMosaics03 from "../assets/imagenes/penny-onix-mosaics/penny-onix-mosaics-03.jpg";
import pennyOnixMosaics04 from "../assets/imagenes/penny-onix-mosaics/penny-onix-mosaics-04.jpg";

const images = [
  pennyOnixMosaics01,
  pennyOnixMosaics02,
  pennyOnixMosaics03,
  pennyOnixMosaics04,
];

export function PennyOnixMosaics() {
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

  function goToBoutique() {
    sessionStorage.removeItem("boutiqueCabinet");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToCabinetE() {
    sessionStorage.setItem("boutiqueCabinet", "E");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerE9() {
    sessionStorage.setItem("boutiqueCabinet", "E");
    sessionStorage.setItem("boutiqueDrawer", "E9");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  return (
    <>
      <Header />

      <main>
        <div className="breadcrumb-boutique">
          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToBoutique}
          >
            BOUTIQUE
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToCabinetE}
          >
            E
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerE9}
          >
            E9
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">PENNY ONIX MOSAICS</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">
          PENNY ONIX MOSAICS
        </h1>

        <div className="boutique-info">
          <p>1''X1'' & 2''X2'' · ONIX MOSAICS</p>
          <p>E9</p>
        </div>

        <ColeccionLayout infoUrl="https://www.onixmosaico.com/en/glass-mosaic-styles/penny-en/" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`PENNY ONIX MOSAICS ${index + 1}`}
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