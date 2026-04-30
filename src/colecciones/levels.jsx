// src/colecciones/levels.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import levels01 from "../assets/imagenes/levels/levels-01.jpg";
import levels02 from "../assets/imagenes/levels/levels-02.jpg";
import levels03 from "../assets/imagenes/levels/levels-03.jpg";
import levels04 from "../assets/imagenes/levels/levels-04.jpg";
import levels05 from "../assets/imagenes/levels/levels-05.jpg";
import levels06 from "../assets/imagenes/levels/levels-06.jpg";
import levels07 from "../assets/imagenes/levels/levels-07.jpg";
import levels08 from "../assets/imagenes/levels/levels-08.jpg";
import levels09 from "../assets/imagenes/levels/levels-09.jpg";

const images = [
  levels01,
  levels02,
  levels03,
  levels04,
  levels05,
  levels06,
  levels07,
  levels08,
  levels09,
];

export function Levels() {
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

  function goToDrawerE2() {
    sessionStorage.setItem("boutiqueCabinet", "E");
    sessionStorage.setItem("boutiqueDrawer", "E2");
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
            onClick={goToDrawerE2}
          >
            E2
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">LEVELS</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">LEVELS</h1>

        <div className="boutique-info">
          <p>8'' X16'' · HARMONY</p>
          <p>E2</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/LEVELS.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`LEVELS ${index + 1}`}
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