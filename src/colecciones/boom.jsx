// src/colecciones/boom.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import boom01 from "../assets/imagenes/boom/boom-01.jpg";
import boom02 from "../assets/imagenes/boom/boom-02.jpg";
import boom03 from "../assets/imagenes/boom/boom-03.jpg";
import boom04 from "../assets/imagenes/boom/boom-04.jpg";
import boom05 from "../assets/imagenes/boom/boom-05.jpg";

const images = [
  boom01,
  boom02,
  boom03,
  boom04,
  boom05,
];

export function Boom() {
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

  function goToDrawerC2() {
    sessionStorage.setItem("boutiqueCabinet", "C");
    sessionStorage.setItem("boutiqueDrawer", "C2");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  return (
    <>
      <Header />

      <main>
        <div className="breadcrumb-boutique">
          <button className="breadcrumb-link" onClick={goToBoutique}>
            BOUTIQUE
          </button>
          <span className="breadcrumb-separator">/</span>

          <button className="breadcrumb-link" onClick={goToCabinetC}>
            C
          </button>
          <span className="breadcrumb-separator">/</span>

          <button className="breadcrumb-link" onClick={goToDrawerC2}>
            C2
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">BOOM</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">BOOM</h1>

        <div className="boutique-info">
          <p>5''X6'' · CEVICA</p>
          <p>C2</p>
        </div>

        <ColeccionLayout infoUrl="https://www.cevica.es/wp-content/uploads/boom.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`BOOM ${index + 1}`}
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