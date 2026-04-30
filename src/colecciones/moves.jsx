// src/colecciones/moves.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import moves01 from "../assets/imagenes/moves/moves-01.jpg";
import moves02 from "../assets/imagenes/moves/moves-02.jpg";
import moves03 from "../assets/imagenes/moves/moves-03.jpg";
import moves04 from "../assets/imagenes/moves/moves-04.jpg";
import moves05 from "../assets/imagenes/moves/moves-05.jpg";
import moves06 from "../assets/imagenes/moves/moves-06.jpg";
import moves07 from "../assets/imagenes/moves/moves-07.jpg";

const images = [
  moves01,
  moves02,
  moves03,
  moves04,
  moves05,
  moves06,
  moves07,
];

export function Moves() {
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

          <span className="breadcrumb-current">MOVES</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">MOVES</h1>

        <div className="boutique-info">
          <p>8''X16'' · HARMONY</p>
          <p>E2</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/MOVES.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`MOVES ${index + 1}`}
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