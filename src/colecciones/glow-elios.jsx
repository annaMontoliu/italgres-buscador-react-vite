// src/colecciones/glow-elios.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import glowElios01 from "../assets/imagenes/glow-elios/glow-elios-01.jpg";
import glowElios02 from "../assets/imagenes/glow-elios/glow-elios-02.jpg";
import glowElios03 from "../assets/imagenes/glow-elios/glow-elios-03.jpg";
import glowElios04 from "../assets/imagenes/glow-elios/glow-elios-04.jpg";
import glowElios05 from "../assets/imagenes/glow-elios/glow-elios-05.jpg";
import glowElios06 from "../assets/imagenes/glow-elios/glow-elios-06.jpg";
import glowElios07 from "../assets/imagenes/glow-elios/glow-elios-07.jpg";
import glowElios08 from "../assets/imagenes/glow-elios/glow-elios-08.jpg";
import glowElios09 from "../assets/imagenes/glow-elios/glow-elios-09.jpg";

const images = [
  glowElios01,
  glowElios02,
  glowElios03,
  glowElios04,
  glowElios05,
  glowElios06,
  glowElios07,
  glowElios08,
  glowElios09,
];

export function GlowElios() {
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

  function goToDrawerE1() {
    sessionStorage.setItem("boutiqueCabinet", "E");
    sessionStorage.setItem("boutiqueDrawer", "E1");
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
            onClick={goToDrawerE1}
          >
            E1
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">GLOW ELIOS</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">GLOW ELIOS</h1>

        <div className="boutique-info">
          <p>2''X18'' · ELIOS</p>
          <p>E1</p>
        </div>

        <ColeccionLayout infoUrl="https://eliosceramica.com/wp-content/uploads/2024/10/Elios_catalogo_GLOW-1.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`GLOW ELIOS ${index + 1}`}
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