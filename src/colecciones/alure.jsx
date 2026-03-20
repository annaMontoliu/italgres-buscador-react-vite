import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import alure01 from "../assets/imagenes/alure/alure-01.jpg";
import alure02 from "../assets/imagenes/alure/alure-02.jpg";
import alure03 from "../assets/imagenes/alure/alure-03.jpg";
import alure04 from "../assets/imagenes/alure/alure-04.jpg";
import alure05 from "../assets/imagenes/alure/alure-05.jpg";
import alure06 from "../assets/imagenes/alure/alure-06.jpg";
import alure07 from "../assets/imagenes/alure/alure-07.jpg";

const images = [
  alure01,
  alure02,
  alure03,
  alure04,
  alure05,
  alure06,
  alure07,
];

export function Alure() {
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

  function goToCabinetA() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerA3() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.setItem("boutiqueDrawer", "A3");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  return (
    <>
      <Header />

      <main>
        <div className="breadcrumb-boutique">
          <button type="button" className="breadcrumb-link" onClick={goToBoutique}>
            BOUTIQUE
          </button>
          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToCabinetA}>
            A
          </button>
          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToDrawerA3}>
            A3
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">ALURE</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">ALURE</h1>

        <div className="boutique-info">
          <p>3''X8'' · CIFRE</p>
          <p>A3</p>
        </div>

        <ColeccionLayout infoUrl="https://cifreceramica.com/en/pdf-coleccion/Alure/" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`ALURE ${index + 1}`}
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