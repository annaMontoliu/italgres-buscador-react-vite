// src/colecciones/dreams.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import dreams01 from "../assets/imagenes/dreams/dreams-01.jpg";
import dreams02 from "../assets/imagenes/dreams/dreams-02.jpg";
import dreams03 from "../assets/imagenes/dreams/dreams-03.jpg";
import dreams04 from "../assets/imagenes/dreams/dreams-04.jpg";
import dreams05 from "../assets/imagenes/dreams/dreams-05.jpg";
import dreams06 from "../assets/imagenes/dreams/dreams-06.jpg";
import dreams07 from "../assets/imagenes/dreams/dreams-07.jpg";

const images = [
  dreams01,
  dreams02,
  dreams03,
  dreams04,
  dreams05,
  dreams06,
  dreams07,
];

export function Dreams() {
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

  function goToCabinetC() {
    sessionStorage.setItem("boutiqueCabinet", "C");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerC1() {
    sessionStorage.setItem("boutiqueCabinet", "C");
    sessionStorage.setItem("boutiqueDrawer", "C1");
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
            onClick={goToCabinetC}
          >
            C
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerC1}
          >
            C1
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">DREAMS</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">DREAMS</h1>

        <div className="boutique-info">
          <p>2''X6'' · LIFE CERAMICA</p>
          <p>C1</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/DREAMS.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`DREAMS ${index + 1}`}
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