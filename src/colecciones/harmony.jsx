// src/colecciones/harmony.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import harmony01 from "../assets/imagenes/harmony/harmony-01.jpg";
import harmony02 from "../assets/imagenes/harmony/harmony-02.jpg";
import harmony03 from "../assets/imagenes/harmony/harmony-03.jpg";
import harmony04 from "../assets/imagenes/harmony/harmony-04.jpg";
import harmony05 from "../assets/imagenes/harmony/harmony-05.jpg";
import harmony06 from "../assets/imagenes/harmony/harmony-06.jpg";

const images = [
  harmony01,
  harmony02,
  harmony03,
  harmony04,
  harmony05,
  harmony06,
];

export function Harmony() {
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

  function goToDrawerE4() {
    sessionStorage.setItem("boutiqueCabinet", "E");
    sessionStorage.setItem("boutiqueDrawer", "E4");
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
            onClick={goToDrawerE4}
          >
            E4
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">HARMONY</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">HARMONY</h1>

        <div className="boutique-info">
          <p>8''X8'' · CEVICA</p>
          <p>E4</p>
        </div>

        <ColeccionLayout infoUrl="https://www.cevica.es/wp-content/uploads/Harmony-Collection-H.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`HARMONY ${index + 1}`}
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